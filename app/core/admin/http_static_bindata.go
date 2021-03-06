// +build bindata

package admin

import (
	"github.com/kataras/iris/v12"
)

func Static(app *iris.Application) {
	app.Get("/favicon.ico", func(ctx iris.Context) {
		bs, _ := Asset("web/dist/favicon.ico")
		_, _ = ctx.Write(bs)
	})
	app.RegisterView(iris.HTML("web/dist", ".html").Binary(Asset, AssetNames))
	app.HandleDir("/static", "web/dist/static", iris.DirOptions{
		Asset:      Asset,
		AssetInfo:  AssetInfo,
		AssetNames: AssetNames,
		Gzip:       true,
	})
	app.Get("/console", func(ctx iris.Context) {
		_ = ctx.View("index.html")
	})
}
