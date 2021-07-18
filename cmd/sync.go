package cmd

import (
	"errors"
	"fmt"
	"github.com/ihaiker/aginx/logs"
	"github.com/ihaiker/aginx/server/ignore"
	"github.com/ihaiker/aginx/storage"
	"github.com/ihaiker/aginx/storage/file"
	. "github.com/ihaiker/aginx/util"
	"github.com/spf13/cobra"
	"io/ioutil"
	"os"
	"path/filepath"
)

func syncupClusterConfiguration(root, appendRelativeDir string, engine storage.Engine) error {
	return filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		if err != nil || info.IsDir() {
			return err
		}

		if filepath.Ext(path) == ".so" || filepath.Ext(path) == ".dll" {
			return nil
		}

		if info.Mode()&os.ModeSymlink == os.ModeSymlink {
			linkPath, _ := filepath.EvalSymlinks(path)
			if linkInfo, err := os.Stat(linkPath); err != nil {
				return err
			} else if linkInfo.IsDir() {
				relative, _ := filepath.Rel(root, path)
				return syncupClusterConfiguration(linkPath, relative, engine)
			}
		}

		if bs, err := ioutil.ReadFile(path); err != nil {
			return err
		} else {
			file, _ := filepath.Rel(root, path)
			if appendRelativeDir != "" {
				file = filepath.Join(appendRelativeDir, file)
			}
			logs.New("cluster").Info("sync file ", file)
			return engine.Put(file, bs)
		}
	})
}

var SyncCmd = &cobra.Command{
	Use: "sync", Short: "Sync configuration files from nginx to cluster storage",
	Long: "Sync configuration files to storage", Example: "aginx sync consul://127.0.0.1:8500/aginx",
	Args: cobra.ExactValidArgs(1),
	RunE: func(cmd *cobra.Command, args []string) error {
		defer Catch(func(err error) {
			fmt.Println(err)
		})

		engine := clusterConfiguration(args[0], ignore.Empty())
		if engine == nil {
			return errors.New("the flag cluster not found")
		}

		_, conf, err := file.GetInfo()
		PanicIfError(err)

		//TODO 同步到服务器上使用bridge提供的方式，并且不能这样全部删除后同步，一定要判断更改做操作
		err = engine.Remove("")
		PanicIfError(err)

		root := filepath.Dir(conf)
		return syncupClusterConfiguration(root, "", engine)
	},
}
