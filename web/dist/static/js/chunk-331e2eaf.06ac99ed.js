(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-331e2eaf"],{"0e63":function(t,e,n){},"3dcf":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"navigation"}},[n("ul",{staticClass:"pagination pagination-sm justify-content-center mb-0"},[n("li",{staticClass:"page-item disabled"},[n("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("\n                共 "+t._s(t.total)+" 条\n            ")])]),n("li",{staticClass:"page-item",class:{disabled:t.start}},[n("button",{staticClass:"page-link",on:{click:function(e){return t.toPage(1)}}},[t._v("首页")])]),t._l(t.pages,(function(e){return n("li",{staticClass:"page-item",class:{active:e===t.page}},[n("button",{staticClass:"page-link",on:{click:function(n){return t.toPage(e)}}},[t._v(t._s(e))])])})),n("li",{staticClass:"page-item",class:{disabled:t.end}},[n("button",{staticClass:"page-link",on:{click:function(e){return t.toPage(t.pages.length)}}},[t._v("尾页")])]),n("li",{staticClass:"page-item disabled"},[n("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("\n                每页 "+t._s(t.limit)+" 条\n            ")])])],2)])},a=[],s={name:"XPage",props:{items:Object},methods:{toPage:function(t){this.$emit("change",t)}},computed:{start:function(){return 1===this.page||this.total<this.limit},end:function(){return this.page===this.pages.length||this.total<this.limit},total:function(){return this.items.total},page:function(){return this.items.page},limit:function(){return this.items.limit},pages:function(){var t=[];console.log("total:",this.total,", limit:",this.limit," pages: ",Math.ceil(this.total/this.limit));for(var e=1;e<=Math.ceil(this.total/this.limit);e++)t.push(e);return t}}},o=s,c=n("c701"),r=Object(c["a"])(o,i,a,!1,null,null,null);e["a"]=r.exports},"4ba2":function(t,e,n){var i=n("2ea2"),a=n("2f77"),s=n("69b3"),o=n("e7ad").Reflect;t.exports=o&&o.ownKeys||function(t){var e=i.f(s(t)),n=a.f;return n?e.concat(n(t)):e}},"5ab2":function(t,e,n){var i=n("e46b"),a=n("4ba2"),s=n("09b9"),o=n("dcb7"),c=n("ebc3");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,i=s(t),r=o.f,l=a(i),u={},d=0;while(l.length>d)n=r(i,e=l[d++]),void 0!==n&&c(u,e,n);return u}})},"5df5":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition,appear:""}},[t.show?n("div",{ref:"modal",staticClass:"modal fade show",style:t.getStyle,on:{mousedown:t.mouseDown}},[n("div",{staticClass:"modal-dialog",class:t.getClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._t("modal-header",[t.title?n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v(t._s(t.title))]),n("a",{staticClass:"close",attrs:{"aria-label":"Close"},on:{click:function(e){return e.stopPropagation(),t.clickCloseBtn(e)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e()]),n("div",{staticClass:"modal-body p-0"},[t._t("default")],2),t._t("modal-footer",[n("div",{staticClass:"modal-footer"},[t.cancelButtonOptions.visible?n("button",{staticClass:"w-25",class:Object.assign({},t.cancelButtonOptions.btnClass),attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return e.stopPropagation(),t.clickCloseBtn(e)}}},[t._v(t._s(t.cancelButtonOptions.title)+"\n                        ")]):t._e(),t.saveButtonOptions.visible?n("button",{staticClass:"w-25",class:Object.assign({},t.saveButtonOptions.btnClass),attrs:{type:"button"},on:{click:t.clickSaveBtn}},[t._v(t._s(t.saveButtonOptions.title)+"\n                        ")]):t._e()])])],2)])]):t._e()])},a=[];n("5ab2"),n("6d57"),n("e10e");function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var r={count:0},l={name:"modal",props:{show:Boolean,title:String,modalClass:{type:Object,default:null},hasBackdrop:{type:Boolean,default:!0},saveButton:{type:Object,default:function(){return{}}},cancelButton:{type:Object,default:function(){return{}}},transition:{type:String,default:"translate-fade"},closeOnEscape:{type:Boolean,default:!0}},data:function(){return{isShow:this.show,backdrop:null,zIndex:0,modals:r}},mounted:function(){this.show&&(r.count++,this.zIndex=r.count,this.$emit("show",!0,this.zIndex,r.count)),this.checkBackdrop()},destroyed:function(){this.show&&(r.count--,this.zIndex=r.count,this.$emit("show",!1,this.zIndex,r.count)),this.backdrop&&this.show&&document.body.removeChild(this.backdrop),0===r.count&&document.body.classList.remove("modal-open")},methods:{clickCloseBtn:function(){this.$emit("cancel")},clickSaveBtn:function(){this.$emit("ok")},handleEscape:function(t){this.show&&27===t.keyCode&&this.zIndex===this.totalModals&&this.$emit("close")},mouseDown:function(t){this.$refs.modal===t.target&&(this.$emit("close"),t.preventDefault())},checkBackdrop:function(){this.hasBackdrop&&(this.show&&1===this.zIndex?document.body.classList.add("modal-open"):!this.show&&(this.zIndex,this.totalModals),this.show?(this.backdrop=document.createElement("div"),this.backdrop.classList.add("modal-backdrop","fade","show"),this.backdrop.style.zIndex=1048+2*this.zIndex,document.body.appendChild(this.backdrop)):this.backdrop&&(document.body.removeChild(this.backdrop),document.body.classList.remove("modal-open")))}},computed:{totalModals:function(){return r.count},getStyle:function(){var t={};return this.show&&(t.display="block"),t["z-index"]=1048+2*this.zIndex+1,t},getClass:function(){var t={},e=this.totalModals-this.zIndex;return t["modal-stack-"+e]=!0,t["modal-order-"+this.zIndex]=!0,t.aside=this.zIndex!==this.totalModals,c(c({},t),this.modalClass)},saveButtonOptions:function(){var t={title:"确定",visible:!0,btnClass:{"btn btn-primary":!0}};return c(c({},t),this.saveButton)},cancelButtonOptions:function(){var t={title:"取消",visible:!0,btnClass:{"btn btn-outline-secondary":!0}};return c(c({},t),this.cancelButton)}},watch:{show:function(t){t?r.count++:r.count--,this.zIndex=r.count,this.$emit("show",t,this.zIndex,r.count),t||0!==r.count||document.body.classList.remove("modal-open"),this.checkBackdrop()},closeOnEscape:{handler:function(t){"undefined"!==typeof document&&(t?document.addEventListener("keydown",this.handleEscape):document.removeEventListener("keydown",this.handleEscape))},immediate:!0}}},u=l,d=(n("cbb6"),n("c701")),p=Object(d["a"])(u,i,a,!1,null,"0d2e2f80",null);e["a"]=p.exports},aa7a:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-title",{attrs:{title:"证书管理"}},[n("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(e){t.obtainNewDomain={domain:"",provider:"lego"}}}},[t._v("申请新证书\n        ")]),n("button",{staticClass:"btn btn-sm btn-outline-primary ml-2",on:{click:function(e){t.custom={domain:""}}}},[t._v("添加自定义证书\n        ")])]),n("div",{staticClass:"p-3"},[n("table",{staticClass:"table table-hover table-bordered"},[t._m(0),n("tbody",t._l(t.certs,(function(e,i){return t.showPage(i)?n("tr",[n("td",[t._v(t._s(t.providers[e.provider])+" ("+t._s(e.provider)+")")]),n("td",[t._v(t._s(e.domain))]),n("td",[t._v(t._s(e.certificate))]),n("td",[t._v(t._s(e.privateKey))]),n("td",[t._v(t._s(t.expireTime(e.expireTime)))]),n("td",["custom"!==e.provider?n("button",{staticClass:"btn btn-sm btn-outline-dark",on:{click:function(n){return t.obtainDomain(e.provider,e.domain)}}},[t._v("续租\n                    ")]):n("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(n){t.custom={domain:e.domain}}}},[t._v("\n                        重传\n                    ")])])]):t._e()})),0),n("tfoot",[n("tr",[n("td",{attrs:{colspan:"6"}},[n("XPage",{attrs:{items:t.page},on:{change:function(e){t.page.page=e}}})],1)])])])]),null!==t.obtainNewDomain?n("modal",{attrs:{title:"申请证书",show:null!==t.obtainNewDomain},on:{cancel:function(e){t.obtainNewDomain=null},ok:function(e){return t.obtainDomainRequest()}}},[n("div",{staticClass:"p-3"},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("证书供应商：")])]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.obtainNewDomain.provider,expression:"obtainNewDomain.provider"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.obtainNewDomain,"provider",e.target.multiple?n:n[0])}}},t._l(t.providers,(function(e,i){return"custom"!==i?n("option",{domProps:{value:i}},[t._v("\n                            "+t._s(e)+" ("+t._s(i)+")\n                        ")]):t._e()})),0)])]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("域名：")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.obtainNewDomain.domain,expression:"obtainNewDomain.domain"}],staticClass:"form-control",class:{"is-invalid":""===t.obtainNewDomain.domain},attrs:{type:"text"},domProps:{value:t.obtainNewDomain.domain},on:{input:function(e){e.target.composing||t.$set(t.obtainNewDomain,"domain",e.target.value)}}})])])])]):t._e(),null!==t.custom?n("modal",{attrs:{title:"添加自定义证书",show:null!==t.custom},on:{cancel:function(e){t.custom=null},ok:t.uploadCert}},[n("div",{staticClass:"p-3"},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("域名：")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.custom.domain,expression:"custom.domain"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.custom.domain},on:{input:function(e){e.target.composing||t.$set(t.custom,"domain",e.target.value)}}})])]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("证书（crt）：")])]),n("input",{staticClass:"form-control",attrs:{type:"file"},on:{change:function(e){return t.selectFile("crt",e)}}})])]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("证书（key）：")])]),n("input",{staticClass:"form-control",attrs:{type:"file"},on:{change:function(e){return t.selectFile("key",e)}}})])])])]):t._e()],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("提供商")]),n("th",[t._v("域名")]),n("th",[t._v("证书(crt)")]),n("th",[t._v("证书(key)")]),n("th",[t._v("过期时间")]),n("th",[t._v("操作")])])])}],s=n("c0cf"),o=n("5df5"),c=n("3dcf"),r={name:"Certs",components:{XPage:c["a"],Modal:o["a"],VTitle:s["a"]},data:function(){return{certs:[],providers:{},obtainNewDomain:null,custom:null,page:{page:1,total:0,limit:12}}},mounted:function(){this.refresh()},methods:{refresh:function(){this.queryCerts(),this.queryInfo()},showPage:function(t){return t>=(this.page.page-1)*this.page.limit&&t<this.page.page*this.page.limit},queryInfo:function(){var t=this;t.$axios.get("/admin/api/info").then((function(e){t.providers=e.certificate})).catch((function(e){t.$alert("查询证书异常："+e.message)}))},queryCerts:function(){this.startLoading();var t=this;t.$axios.get("/admin/api/cert/list").then((function(e){t.certs=e,t.page.total=t.certs.length})).catch((function(e){t.$alert("查询证书异常："+e.message)})).finally((function(){t.finishLoading()}))},expireTime:function(t){return t.substr(0,10)+" "+t.substr(11,8)},obtainDomainRequest:function(){this.obtainDomain(this.obtainNewDomain.provider,this.obtainNewDomain.domain)},obtainDomain:function(t,e){this.startLoading("正在申请证书："+e);var n=this;n.$axios.post("/admin/api/cert?domain="+e+"&provider="+t).then((function(t){n.$toast.success("申请证书成功！"),n.queryCerts(),n.obtainNewDomain=null})).catch((function(t){n.$alert("申请证书失败："+t.message)})).finally((function(){n.finishLoading()}))},selectFile:function(t,e){this.$set(this.custom,t,e)},uploadCertFile:function(t,e,n){var i=this,a=new FormData;a.append("path",t),a.append("file",e),i.$axios.post("/admin/api/file",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){n()})).catch((function(t){i.$alert(t.message)}))},uploadCert:function(){var t=this,e=0,n=function(){e+=1,2===e&&(t.queryCerts(),t.custom=null)};this.uploadCertFile("certs/custom/"+this.custom.domain+"/server.crt",this.custom.crt.target.files[0],n),this.uploadCertFile("certs/custom/"+this.custom.domain+"/server.key",this.custom.key.target.files[0],n)}}},l=r,u=n("c701"),d=Object(u["a"])(l,i,a,!1,null,null,null);e["default"]=d.exports},c0cf:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"breadcrumb breadcrumb-fixed"},[n("li",{staticClass:"breadcrumb-item"},[n("i",{staticClass:"fa",class:t.titleClass}),t._v(" "+t._s(t.title)+"\n    ")]),n("li",{staticClass:"ml-auto"},[t._t("default")],2)])},a=[],s={name:"vTitle",props:{title:String,titleClass:{type:String,default:""}}},o=s,c=n("c701"),r=Object(c["a"])(o,i,a,!1,null,null,null);e["a"]=r.exports},cbb6:function(t,e,n){"use strict";n("0e63")},e10e:function(t,e,n){var i=n("008a"),a=n("80a9");n("f0cc")("keys",(function(){return function(t){return a(i(t))}}))},ebc3:function(t,e,n){"use strict";var i=n("064e"),a=n("cc33");t.exports=function(t,e,n){e in t?i.f(t,e,a(0,n)):t[e]=n}},f0cc:function(t,e,n){var i=n("e46b"),a=n("7ddc"),s=n("238a");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],o={};o[t]=e(n),i(i.S+i.F*s((function(){n(1)})),"Object",o)}}}]);
//# sourceMappingURL=chunk-331e2eaf.06ac99ed.js.map