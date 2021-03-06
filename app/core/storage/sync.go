package storage

import (
	"bytes"
	"github.com/ihaiker/aginx/v2/core/logs"
	"github.com/ihaiker/aginx/v2/plugins/storage"
)

var logger = logs.New("storage")

//在 args 中是否保存 cur 文件
func contains(args []*storage.File, cur *storage.File) (*storage.File, bool) {
	for _, arg := range args {
		if arg.Name == cur.Name {
			return arg, true
		}
	}
	return nil, false
}

//从from存储同步到to存储，
func Sync(from storage.Plugin, to storage.Plugin) error {
	fromFiles, err := from.Search()
	if err != nil {
		return err
	}

	toFiles, err := to.Search()
	if err != nil {
		return err
	}

	for _, formFile := range fromFiles {
		if toFile, has := contains(toFiles, formFile); has {
			if bytes.Equal(toFile.Content, formFile.Content) {
				logger.Debug("忽略未更新 ", formFile.Name)
				continue
			}
		}
		if err := to.Put(formFile.Name, formFile.Content); err != nil {
			logger.WithError(err).Warn("同步文件 ", formFile.Name)
			return err
		} else {
			logger.Info("同步文件 ", formFile.Name)
		}
	}

	for _, toFile := range toFiles {
		if _, has := contains(fromFiles, toFile); !has {
			if err := to.Remove(toFile.Name); err != nil {
				logger.WithError(err).Warn("删除文件 ", toFile.Name)
				return err
			} else {
				logger.Info("删除文件 ", toFile.Name)
			}
		}
	}
	return nil
}
