package api

import (
	"encoding/json"
	"errors"
	"io"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"
	"time"
)

type client struct {
	address string
	client  *http.Client
}

func (self *client) get(uri string, queries []string) string {
	if len(queries) > 0 {
		values := url.Values{}
		for _, query := range queries {
			values.Add("q", query)
		}
		return uri + "?" + values.Encode()
	}
	return uri
}

func (self *client) response(resp *http.Response, ret interface{}) error {
	if resp.StatusCode == http.StatusNoContent {
		return nil
	}
	defer func() { _ = resp.Body.Close() }()
	if bs, err := ioutil.ReadAll(resp.Body); err != nil {
		return err
	} else if resp.StatusCode != http.StatusOK {
		if strings.HasPrefix(resp.Header.Get("Content-Type"), "application/json") {
			errApi := &struct {
				Error   string `json:"error"`
				Message string `json:"message"`
			}{}
			if err := json.Unmarshal(bs, errApi); err != nil {
				return err
			} else {
				return errors.New(errApi.Message)
			}
		}
		return errors.New(string(bs))
	} else {
		return json.Unmarshal(bs, ret)
	}
}

func (self *client) timeout(timeout time.Duration) func(r *http.Request) {
	return func(r *http.Request) {
		self.client.Timeout = timeout
	}
}

func (self *client) request(method string, url string, body io.Reader, ret interface{}, extends ...func(r *http.Request)) error {
	if req, err := http.NewRequest(method, self.address+url, body); err != nil {
		return err
	} else {
		for _, extend := range extends {
			extend(req)
		}
		if resp, err := self.client.Do(req); err != nil {
			return err
		} else {
			return self.response(resp, ret)
		}
	}
}
