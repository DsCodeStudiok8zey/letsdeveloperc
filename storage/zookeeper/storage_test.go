package zookeeper

import (
	"github.com/ihaiker/aginx/logger"
	"github.com/ihaiker/aginx/server/ignore"
	"github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
	url2 "net/url"
	"os"
	"strconv"
	"testing"
	"time"
)

func init() {
	logrus.SetLevel(logrus.DebugLevel)
	logrus.SetFormatter(&logger.Formatter{
		TimestampFormat: "2006-01-02 15:04:05.000",
		FieldsOrder:     []string{"engine"},
	})
	logrus.SetOutput(os.Stdout)
}

func newClient(t *testing.T) *zkStorage {
	url, _ := url2.Parse("zk://127.0.0.1:2181/aginx")
	engine, _ := New(url, ignore.Empty())
	return engine
}

func TestStore(t *testing.T) {
	api := newClient(t)

	err := api.Store("nginx.conf", []byte("zookeeper configuration "+time.Now().Format(time.RFC3339)))
	assert.Nil(t, err)
}

func TestSearch(t *testing.T) {
	api := newClient(t)

	files, err := api.Search("*")
	assert.Nil(t, err)

	for _, file := range files {
		t.Log(file.Name)
	}
}

func TestStart(t *testing.T) {
	api := newClient(t)
	err := api.Start()
	assert.Nil(t, err)
}

func TestRemove(t *testing.T) {
	api := newClient(t)

	for i := 0; i < 10; i++ {
		err := api.Store("test/nginx"+strconv.Itoa(i)+".conf", []byte("nginx configuration ."+strconv.Itoa(i)))
		assert.Nil(t, err)
	}

	t.Log(api.Remove("test/nginx0.conf"))
	t.Log(api.Remove("test"))
}
