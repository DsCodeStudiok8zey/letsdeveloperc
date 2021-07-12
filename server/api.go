package server

import (
	"bytes"
	"errors"
	"github.com/ihaiker/aginx/lego"
	"github.com/ihaiker/aginx/nginx/client"
	"github.com/ihaiker/aginx/nginx/configuration"
	"github.com/ihaiker/aginx/storage"
	"github.com/ihaiker/aginx/util"
	"github.com/kataras/iris/v12"
	"io"
	"strings"
)

type apiController struct {
	vister  *Supervister
	engine  storage.Engine
	manager *lego.Manager
}

func (as *apiController) deleteFile(ctx iris.Context) int {
	file := ctx.URLParam("file")
	if strings.HasPrefix(file, "/") {
		panic("File path must be relative")
	}
	util.PanicMessage(as.engine.Remove(file), "remove file error")
	return iris.StatusNoContent
}

func (as *apiController) upload(ctx iris.Context) int {
	filePath := ctx.FormValue("path")

	file, _, err := ctx.FormFile("file")
	util.PanicIfError(err)
	defer func() { _ = file.Close() }()

	out := bytes.NewBuffer(make([]byte, 0))
	_, err = io.Copy(out, file)
	util.PanicIfError(err)

	err = as.engine.Store(filePath, out.Bytes())
	util.PanicIfError(err)

	return iris.StatusNoContent
}

func (as *apiController) queryDirective(client *client.Client, queries []string) []*configuration.Directive {
	directives, err := client.Select(queries...)
	util.PanicIfError(err)
	return directives
}

func (as *apiController) addDirective(client *client.Client, queries []string, directives []*configuration.Directive) int {
	util.PanicIfError(client.Add(queries, directives...))
	util.PanicIfError(as.vister.Test(client.Configuration()))
	util.PanicIfError(as.engine.StoreConfiguration(client.Configuration()))
	if !as.engine.IsCluster() {
		_ = as.vister.Reload()
	}
	return iris.StatusNoContent
}

func (as *apiController) deleteDirective(client *client.Client, queries []string) int {
	util.PanicIfError(client.Delete(queries...))
	util.PanicIfError(as.vister.Test(client.Configuration()))
	util.PanicIfError(as.engine.StoreConfiguration(client.Configuration()))
	if !as.engine.IsCluster() {
		_ = as.vister.Reload()
	}
	return iris.StatusNoContent
}

func (as *apiController) modifyDirective(client *client.Client, queries []string, directives []*configuration.Directive) int {
	if len(directives) == 0 {
		panic(errors.New("new directive is empty"))
	}
	util.PanicIfError(client.Modify(queries, directives[0]))
	util.PanicIfError(as.vister.Test(client.Configuration()))
	util.PanicIfError(as.engine.StoreConfiguration(client.Configuration()))
	if !as.engine.IsCluster() {
		_ = as.vister.Reload()
	}
	return iris.StatusNoContent
}

func (as *apiController) reload() int {
	util.PanicIfError(as.vister.Reload())
	return iris.StatusNoContent
}

func (as *apiController) selectDirective(queries ...string) func(*client.Client) []*configuration.Directive {
	return func(client *client.Client) []*configuration.Directive {
		directives := make([]*configuration.Directive, 0)
		for _, query := range queries {
			if ds, err := client.Select(strings.Split(query, ",")...); err == nil {
				directives = append(directives, ds...)
			}
		}
		return directives
	}
}
