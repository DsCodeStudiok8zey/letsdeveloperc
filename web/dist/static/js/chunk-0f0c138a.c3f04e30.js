(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f0c138a"],{"0e63":function(e,t,s){},"4ba2":function(e,t,s){var i=s("2ea2"),a=s("2f77"),r=s("69b3"),n=s("e7ad").Reflect;e.exports=n&&n.ownKeys||function(e){var t=i.f(r(e)),s=a.f;return s?t.concat(s(e)):t}},"5ab2":function(e,t,s){var i=s("e46b"),a=s("4ba2"),r=s("09b9"),n=s("dcb7"),o=s("ebc3");i(i.S,"Object",{getOwnPropertyDescriptors:function(e){var t,s,i=r(e),c=n.f,_=a(i),l={},u=0;while(_.length>u)s=c(i,t=_[u++]),void 0!==s&&o(l,t,s);return l}})},"5df5":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:e.transition,appear:""}},[e.show?s("div",{ref:"modal",staticClass:"modal fade show",style:e.getStyle,on:{mousedown:e.mouseDown}},[s("div",{staticClass:"modal-dialog",class:e.getClass,attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[e._t("modal-header",[e.title?s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[e._v(e._s(e.title))]),s("a",{staticClass:"close",attrs:{"aria-label":"Close"},on:{click:function(t){return t.stopPropagation(),e.clickCloseBtn(t)}}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]):e._e()]),s("div",{staticClass:"modal-body p-0"},[e._t("default")],2),e._t("modal-footer",[s("div",{staticClass:"modal-footer"},[e.cancelButtonOptions.visible?s("button",{staticClass:"w-25",class:Object.assign({},e.cancelButtonOptions.btnClass),attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){return t.stopPropagation(),e.clickCloseBtn(t)}}},[e._v(e._s(e.cancelButtonOptions.title)+"\n                        ")]):e._e(),e.saveButtonOptions.visible?s("button",{staticClass:"w-25",class:Object.assign({},e.saveButtonOptions.btnClass),attrs:{type:"button"},on:{click:e.clickSaveBtn}},[e._v(e._s(e.saveButtonOptions.title)+"\n                        ")]):e._e()])])],2)])]):e._e()])},a=[];s("5ab2"),s("6d57"),s("e10e");function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var c={count:0},_={name:"modal",props:{show:Boolean,title:String,modalClass:{type:Object,default:null},hasBackdrop:{type:Boolean,default:!0},saveButton:{type:Object,default:function(){return{}}},cancelButton:{type:Object,default:function(){return{}}},transition:{type:String,default:"translate-fade"},closeOnEscape:{type:Boolean,default:!0}},data:function(){return{isShow:this.show,backdrop:null,zIndex:0,modals:c}},mounted:function(){this.show&&(c.count++,this.zIndex=c.count,this.$emit("show",!0,this.zIndex,c.count)),this.checkBackdrop()},destroyed:function(){this.show&&(c.count--,this.zIndex=c.count,this.$emit("show",!1,this.zIndex,c.count)),this.backdrop&&this.show&&document.body.removeChild(this.backdrop),0===c.count&&document.body.classList.remove("modal-open")},methods:{clickCloseBtn:function(){this.$emit("cancel")},clickSaveBtn:function(){this.$emit("ok")},handleEscape:function(e){this.show&&27===e.keyCode&&this.zIndex===this.totalModals&&this.$emit("close")},mouseDown:function(e){this.$refs.modal===e.target&&(this.$emit("close"),e.preventDefault())},checkBackdrop:function(){this.hasBackdrop&&(this.show&&1===this.zIndex?document.body.classList.add("modal-open"):!this.show&&(this.zIndex,this.totalModals),this.show?(this.backdrop=document.createElement("div"),this.backdrop.classList.add("modal-backdrop","fade","show"),this.backdrop.style.zIndex=1048+2*this.zIndex,document.body.appendChild(this.backdrop)):this.backdrop&&(document.body.removeChild(this.backdrop),document.body.classList.remove("modal-open")))}},computed:{totalModals:function(){return c.count},getStyle:function(){var e={};return this.show&&(e.display="block"),e["z-index"]=1048+2*this.zIndex+1,e},getClass:function(){var e={},t=this.totalModals-this.zIndex;return e["modal-stack-"+t]=!0,e["modal-order-"+this.zIndex]=!0,e.aside=this.zIndex!==this.totalModals,o(o({},e),this.modalClass)},saveButtonOptions:function(){var e={title:"确定",visible:!0,btnClass:{"btn btn-primary":!0}};return o(o({},e),this.saveButton)},cancelButtonOptions:function(){var e={title:"取消",visible:!0,btnClass:{"btn btn-outline-secondary":!0}};return o(o({},e),this.cancelButton)}},watch:{show:function(e){e?c.count++:c.count--,this.zIndex=c.count,this.$emit("show",e,this.zIndex,c.count),e||0!==c.count||document.body.classList.remove("modal-open"),this.checkBackdrop()},closeOnEscape:{handler:function(e){"undefined"!==typeof document&&(e?document.addEventListener("keydown",this.handleEscape):document.removeEventListener("keydown",this.handleEscape))},immediate:!0}}},l=_,u=(s("cbb6"),s("c701")),d=Object(u["a"])(l,i,a,!1,null,"0d2e2f80",null);t["a"]=d.exports},"97a6":function(e,t,s){(function(e){e(s("953d"))})((function(e){"use strict";e.defineMode("nginx",(function(e){function t(e){for(var t={},s=e.split(" "),i=0;i<s.length;++i)t[s[i]]=!0;return t}var s,i=t("break return rewrite set accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23"),a=t("http mail events server types location upstream charset_map limit_except if geo map"),r=t("include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files"),n=e.indentUnit;function o(e,t){return s=t,e}function c(e,t){e.eatWhile(/[\w\$_]/);var s=e.current();if(i.propertyIsEnumerable(s))return"keyword";if(a.propertyIsEnumerable(s))return"variable-2";if(r.propertyIsEnumerable(s))return"string-2";var n=e.next();return"@"==n?(e.eatWhile(/[\w\\\-]/),o("meta",e.current())):"/"==n&&e.eat("*")?(t.tokenize=_,_(e,t)):"<"==n&&e.eat("!")?(t.tokenize=l,l(e,t)):"="!=n?"~"!=n&&"|"!=n||!e.eat("=")?'"'==n||"'"==n?(t.tokenize=u(n),t.tokenize(e,t)):"#"==n?(e.skipToEnd(),o("comment","comment")):"!"==n?(e.match(/^\s*\w*/),o("keyword","important")):/\d/.test(n)?(e.eatWhile(/[\w.%]/),o("number","unit")):/[,.+>*\/]/.test(n)?o(null,"select-op"):/[;{}:\[\]]/.test(n)?o(null,n):(e.eatWhile(/[\w\\\-]/),o("variable","variable")):o(null,"compare"):void o(null,"compare")}function _(e,t){var s,i=!1;while(null!=(s=e.next())){if(i&&"/"==s){t.tokenize=c;break}i="*"==s}return o("comment","comment")}function l(e,t){var s,i=0;while(null!=(s=e.next())){if(i>=2&&">"==s){t.tokenize=c;break}i="-"==s?i+1:0}return o("comment","comment")}function u(e){return function(t,s){var i,a=!1;while(null!=(i=t.next())){if(i==e&&!a)break;a=!a&&"\\"==i}return a||(s.tokenize=c),o("string","string")}}return{startState:function(e){return{tokenize:c,baseIndent:e||0,stack:[]}},token:function(e,t){if(e.eatSpace())return null;s=null;var i=t.tokenize(e,t),a=t.stack[t.stack.length-1];return"hash"==s&&"rule"==a?i="atom":"variable"==i&&("rule"==a?i="number":a&&"@media{"!=a||(i="tag")),"rule"==a&&/^[\{\};]$/.test(s)&&t.stack.pop(),"{"==s?"@media"==a?t.stack[t.stack.length-1]="@media{":t.stack.push("{"):"}"==s?t.stack.pop():"@media"==s?t.stack.push("@media"):"{"==a&&"comment"!=s&&t.stack.push("rule"),i},indent:function(e,t){var s=e.stack.length;return/^\}/.test(t)&&(s-="rule"==e.stack[e.stack.length-1]?2:1),e.baseIndent+s*n},electricChars:"}"}})),e.defineMIME("text/x-nginx-conf","nginx")}))},"9c4f":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-fixed"},[s("router-link",{staticClass:"text-primary font-weight-bold",attrs:{to:"/admin/files"}},[s("i",{staticClass:"fa fa-home"}),e._v("文件目录：\n            ")])],1),e._l(e.paths,(function(t,i){return s("li",{staticClass:"breadcrumb-fixed text-primary font-weight-bold"},[s("router-link",{attrs:{to:{path:"/admin/files",query:{path:e.getPath(i)}}}},[e._v(e._s(t)+"/")])],1)}))],2),s("div",{staticClass:"animated fadeIn pl-3 pr-3 pt-3 row"},[s("div",{staticClass:"form-group col-12"},[s("div",{staticClass:"input-group"},[e._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",name:"program",placeholder:"匹配内容：*、*.conf、hosts.d/*.conf"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-sm btn-css3",on:{click:e.queryFiles}},[s("i",{staticClass:"fa fa-search"}),e._v("  搜  索  \n                    ")]),s("button",{staticClass:"btn btn-sm btn-primary text-white font-weight-bold",on:{click:function(t){return e.$router.push({path:"/admin/file/edit",query:{path:e.folder}})}}},[s("i",{staticClass:"fa fa-file-text"}),e._v(" 新建文件 \n                    ")])])])])]),s("div",{staticClass:"pl-4 pr-4"},[""===e.search?s("div",[s("div",{staticClass:"row"},e._l(e.showFiles,(function(t){return s("div",{staticClass:"col-auto"},[t.folder?s("div",{staticClass:"brand-card-body"},[s("router-link",{staticClass:"p-1",attrs:{to:{path:"/admin/files",query:{path:t.path}}}},[s("i",{staticClass:"fa fa-2x text-warning fa-folder"}),s("div",{staticClass:"text-wrap"},[e._v(e._s(t.name))])])],1):s("div",{staticClass:"brand-card-body"},[s("router-link",{staticClass:"p-1",attrs:{to:{path:"/admin/file/edit",query:{name:t.path}}}},[s("i",{staticClass:"fa fa-2x text-info fa-file"}),s("div",{staticClass:"text-wrap"},[e._v(e._s(t.name))])])],1)])})),0)]):s("div",{staticClass:" pt-1"},[s("div",{staticClass:"list-group"},e._l(e.files,(function(t,i){return s("a",{staticClass:"list-group-item list-group-item-action"},[s("i",{staticClass:"fa text-warning text-info fa-file"}),e._v(" "+e._s(t.name)+"\n                ")])})),0)])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text bg-css3 text-white"},[e._v("文件查找")])])}],r=(s("f548"),s("c0c3"),s("cc57"),s("9a33"),s("c0cf")),n=s("c9b1"),o=s("5df5"),c=s("8a2b"),_=(s("97a6"),s("fe51"),s("8561"),{name:"Files",components:{Modal:o["a"],Delete:n["a"],VTitle:r["a"],codemirror:c["codemirror"]},data:function(){return{files:[],search:""}},mounted:function(){this.queryFiles()},computed:{folder:function(){var e=this.$route.query["path"];return void 0===e&&(e=""),e},paths:function(){var e=this.folder;return""!==e?e.split("/"):[]},showFiles:function(){var e=this.folder,t={},s=[];for(var i in this.files){var a=this.getFile(this.files[i]);if(a.dir===e&&s.push(a),""!==a.dir){var r=this.getFolder(a.dir,e);void 0!==r&&void 0===t[r.name]&&(s.unshift(r),t[r.name]=r)}}return s}},methods:{refresh:function(){this.queryFiles()},queryFiles:function(){this.startLoading();var e=this,t="/admin/api/file/search";""!==this.search&&(t+="?q="+encodeURI(this.search)),e.$axios.get(t).then((function(t){e.files=t})).catch((function(t){e.$toast.error(t.message)})).finally((function(){e.finishLoading()}))},getFile:function(e){var t=e.name.split("/");return{name:t.pop(),dir:t.join("/"),path:e.name,folder:!1}},getFolder:function(e,t){if(""===t){var s=e.split("/").shift();return{name:s,path:s,folder:!0}}if(0===e.indexOf(t+"/")&&e!==t){var i=e.replace(t+"/","").split("/").shift();return{name:i,path:t+"/"+i,folder:!0}}},getPath:function(e){return this.paths.slice(0,e+1).join("/")}}}),l=_,u=s("c701"),d=Object(u["a"])(l,i,a,!1,null,null,null);t["default"]=d.exports},c9b1:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{on:{click:e.confirm}},[e._t("default")],2)},a=[],r={name:"delete",props:{title:{type:String,default:"确定？"},message:{type:String,default:"确定删除"}},methods:{confirm:function(){var e=this;this.$confirm(e.message,{title:e.title}).then((function(t){e.$emit("ok")})).catch((function(e){}))}}},n=r,o=s("c701"),c=Object(o["a"])(n,i,a,!1,null,null,null);t["a"]=c.exports},cbb6:function(e,t,s){"use strict";s("0e63")},e10e:function(e,t,s){var i=s("008a"),a=s("80a9");s("f0cc")("keys",(function(){return function(e){return a(i(e))}}))},ebc3:function(e,t,s){"use strict";var i=s("064e"),a=s("cc33");e.exports=function(e,t,s){t in e?i.f(e,t,a(0,s)):e[t]=s}},f0cc:function(e,t,s){var i=s("e46b"),a=s("7ddc"),r=s("238a");e.exports=function(e,t){var s=(a.Object||{})[e]||Object[e],n={};n[e]=t(s),i(i.S+i.F*r((function(){s(1)})),"Object",n)}}}]);
//# sourceMappingURL=chunk-0f0c138a.c3f04e30.js.map