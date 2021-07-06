package consul

import (
	"bytes"
	consulApi "github.com/hashicorp/consul/api"
	"github.com/ihaiker/aginx/nginx/configuration"
	ig "github.com/ihaiker/aginx/server/ignore"
	"github.com/ihaiker/aginx/storage/file"
	"github.com/ihaiker/aginx/util"
	"github.com/sirupsen/logrus"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"
)

type consulStorage struct {
	closeChan  chan struct{}
	wg         *sync.WaitGroup
	address    string
	folder     string
	client     *consulApi.Client
	index      uint64
	rootDir    string
	cacheFiles consulApi.KVPairs
	ignore     ig.Ignore
}

func New(clusterConfig *url.URL, ignore ig.Ignore) (cs *consulStorage, err error) {
	address := clusterConfig.Host
	folder := clusterConfig.EscapedPath()[1:]
	token := clusterConfig.Query().Get("token")

	cs = new(consulStorage)
	cs.address = address
	cs.folder = folder
	cs.closeChan = make(chan struct{})
	cs.wg = new(sync.WaitGroup)
	cs.index = 0
	cs.cacheFiles = consulApi.KVPairs{}
	cs.ignore = ignore

	if _, conf, err := file.GetInfo(); err != nil {
		return nil, err
	} else {
		cs.rootDir = filepath.Dir(conf)
	}

	config := consulApi.DefaultConfig()
	config.Address = cs.address
	config.Token = token
	if cs.client, err = consulApi.NewClient(config); err != nil {
		return
	}
	return
}

func (cs *consulStorage) IsCluster() bool {
	return true
}

func (cs *consulStorage) downloadFile(watcher bool) bool {
	kvs, query, err := cs.client.KV().List(cs.folder, &consulApi.QueryOptions{
		WaitTime: time.Second * 3, WaitIndex: cs.index,
	})
	if err != nil {
		return false
	}

	changeFiles := make([]*consulApi.KVPair, 0)
	deleteFiles := make([]*consulApi.KVPair, 0)
	if cs.index != query.LastIndex {
		//文件修改
		for _, kv := range kvs {
			if cs.index == 0 || kv.ModifyIndex >= query.LastIndex {
				clusterPath := strings.Replace(kv.Key, cs.folder+"/", "", 1)
				if watcher && cs.ignore.IfNotIsAdd(clusterPath) {
					continue
				}
				filePath := cs.rootDir + "/" + clusterPath
				changeFiles = append(changeFiles, kv)

				if len(kv.Value) == 0 {
					err := os.MkdirAll(filePath, os.ModePerm)
					logrus.WithField("engine", "consul").
						WithError(err).Debug("mkdir ", kv.Key, ", write to ", filePath)
				} else {
					err := util.WriterFile(filePath, kv.Value)
					logrus.WithField("engine", "consul").
						WithError(err).Debug("the file changed ", kv.Key, ", write to ", filePath)
				}
			}
		}
		//删除文件
		for _, cacheFile := range cs.cacheFiles {
			has := false
			for _, kv := range kvs {
				if kv.Key == cacheFile.Key {
					has = true
					break
				}
			}
			if !has {
				clusterPath := strings.Replace(cacheFile.Key, cs.folder+"/", "", 1)
				if watcher && cs.ignore.IfNotIsAdd(clusterPath) {
					continue
				}
				filePath := cs.rootDir + "/" + clusterPath
				deleteFiles = append(deleteFiles, cacheFile)
				err = os.RemoveAll(filePath)
				logrus.WithField("engine", "consul").WithError(err).Debug("delete ", filePath)
			}
		}
	}

	cs.cacheFiles = kvs
	cs.index = query.LastIndex
	return len(changeFiles) > 0 || len(deleteFiles) > 0
}

func (cs *consulStorage) watchChanged() {
	cs.wg.Add(1)
	defer cs.wg.Done()
	for {
		select {
		case <-cs.closeChan:
			return
		default:
			if cs.downloadFile(true) {
				logrus.Info("publish: ", util.StorageFileChanged)
				util.EBus.Publish(util.StorageFileChanged)
			}
		}
	}
}

func (cs *consulStorage) Start() error {

	_ = filepath.Walk(cs.rootDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		return os.RemoveAll(path)
	})

	cs.downloadFile(false)
	go cs.watchChanged()
	return nil
}

func (cs *consulStorage) Stop() error {
	if cs.closeChan != nil {
		close(cs.closeChan)
	}
	cs.wg.Wait()
	return nil
}

func (cs *consulStorage) Search(args ...string) ([]*util.NameReader, error) {
	readers := make([]*util.NameReader, 0)
	if keys, _, err := cs.client.KV().Keys(cs.folder, "", nil); err != nil {
		return nil, err
	} else {
		for _, key := range keys {
			if strings.HasSuffix(key, "/") {
				continue
			}
			name := strings.ReplaceAll(key, cs.folder+"/", "")
			for _, arg := range args {
				if matched, _ := filepath.Match(arg, name); matched {
					reader, _ := cs.File(name)
					readers = append(readers, reader)
				}
			}
		}
	}
	return readers, nil
}

func (cs *consulStorage) Remove(file string) error {
	key := cs.folder + "/" + file
	logrus.WithField("engine", "consul").Debug("remove ", key)

	if kvs, _, err := cs.client.KV().List(key, nil); err != nil {
		return err
	} else {
		for _, kv := range kvs {
			_, _ = cs.client.KV().Delete(kv.Key, nil)
		}
	}
	_, err := cs.client.KV().Delete(key, nil)
	return err
}

func (cs *consulStorage) File(file string) (*util.NameReader, error) {
	key := cs.folder + "/" + file
	if value, _, err := cs.client.KV().Get(key, nil); err != nil {
		return nil, err
	} else if value == nil {
		return nil, os.ErrNotExist
	} else {
		reader := util.NamedReader(bytes.NewBuffer(value.Value), file)
		return reader, nil
	}
}

func (cs *consulStorage) store(file string, content []byte) error {
	logrus.WithField("engine", "consul").Debug("store file ", file)
	p := &consulApi.KVPair{Key: file, Value: content}
	if _, err := cs.client.KV().Put(p, nil); err != nil {
		logrus.WithField("engine", "consul").Debug("store file: ", file, ", error: ", err)
		return err
	}
	return nil
}

func (cs *consulStorage) Store(file string, content []byte) error {
	return cs.store(cs.folder+"/"+file, content)
}

func (cs *consulStorage) StoreConfiguration(cfg *configuration.Configuration) error {
	return configuration.DownWriter(cs.folder, cfg, cs.store)
}
