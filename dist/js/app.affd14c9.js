(function(e){function t(t){for(var o,r,a=t[0],u=t[1],i=t[2],l=0,f=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c={app:0},s=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f4b1256d","chunk-2c2e613c":"f00ddd0e","chunk-2d0c7cf2":"2aca29d5","chunk-2d0f0d96":"ca24bce7","chunk-d342a3e0":"9a513261","chunk-2d0a4638":"20f52174","chunk-2d0aa7e7":"df8782c6","chunk-da0a3822":"42bb9a72"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-d342a3e0":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2c2e613c":"31d6cfe0","chunk-2d0c7cf2":"31d6cfe0","chunk-2d0f0d96":"31d6cfe0","chunk-d342a3e0":"e798096c","chunk-2d0a4638":"31d6cfe0","chunk-2d0aa7e7":"31d6cfe0","chunk-da0a3822":"31d6cfe0"}[e]+".css",c=u.p+o,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var i=s[a],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===c))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){i=f[a],l=i.getAttribute("data-href");if(l===o||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],d.parentNode.removeChild(d),n(s)},d.href=c;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vatch-vue/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;s.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t,n){e.exports=n("56d7")},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},"1a8d":function(e,t,n){},2:function(e,t){},"2ae9":function(e,t,n){"use strict";n("1a8d")},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},c=[],s=(n("034f"),n("2877")),a={},u=Object(s["a"])(a,r,c,!1,null,null,null),i=u.exports,l=n("9483");Object(l["a"])("".concat("/vatch-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Solid Local to POD transfert"}})],1)},g=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("b-container",[n("b-row",[n("b-col",[n("Network"),n("LocalBrowser")],1),n("b-col",[null==e.webId?n("div",[n("b-form-select",{attrs:{options:e.issuers},model:{value:e.issuer,callback:function(t){e.issuer=t},expression:"issuer"}}),n("b-button",{on:{click:e.login}},[e._v("Login")])],1):n("b-button",{on:{click:e.logout}},[e._v("Logout")]),null!=e.webId?n("div",[e._v(" Name: "+e._s(e.name)),n("br"),e._v(" WebId : "),n("a",{attrs:{href:"https://podbrowser.inrupt.com/resource/"+e.webId,target:"_blank"}},[e._v(e._s(e.webId))]),n("br"),e._v(" storage : "+e._s(e.podStorage)),n("br"),n("br"),n("PodStorage")],1):e._e()],1)],1)],1)],1)},h=[],b=n("1da1"),m=(n("96cf"),n("b0c0"),n("8522")),v=n("93ef"),w=n("d11f"),k=n("dbc7"),S={name:"HelloWorld",props:{msg:String},components:{Network:function(){return n.e("chunk-d342a3e0").then(n.bind(null,"db1c"))},PodStorage:function(){return n.e("chunk-2d0c7cf2").then(n.bind(null,"51cc"))},LocalBrowser:function(){return n.e("chunk-2d0f0d96").then(n.bind(null,"9db7"))}},data:function(){return{issuers:[{value:null,text:"Please select an issuer"},{value:"https://broker.pod.inrupt.com",text:"Broker Pod Inrupt (Entreprise Solid Server)"},{value:"https://inrupt.net",text:"Inrupt.net"},{value:"https://solidcommunity.net",text:"SolidCommunity.net"},{value:"https://solidweb.org",text:"Solidweb.org"}],issuer:null,webId:null,podStorage:null,name:null}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(Object(m["getDefaultSession"])()),Object(m["onSessionRestore"])((function(e){console.log("restore",e)})),t.next=4,Object(m["getDefaultSession"])().info.isLoggedIn;case 4:return n=t.sent,console.log("logged",n),t.next=8,Object(m["handleIncomingRedirect"])({restorePreviousSession:!0}).then((function(e){console.log("Logged in with WebID [".concat(e.webId,"]"))}));case 8:return t.next=10,e.fetch();case 10:case"end":return t.stop()}}),t)})))()},watch:{session:function(){console.log("SESSION",this.session)}},computed:{session:function(){return Object(m["getDefaultSession"])()}},methods:{logout:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(Object(m["getDefaultSession"])()),t.next=3,Object(m["getDefaultSession"])().logout();case 3:return t.next=5,e.fetch();case 5:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,o,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("fetch"),t.next=3,Object(m["getDefaultSession"])().info.isLoggedIn;case 3:if(n=t.sent,console.log("logged",n),Object(m["getDefaultSession"])().info.isLoggedIn){t.next=12;break}console.log("not logged"),e.webId=null,e.podStorage=null,e.$store.dispatch("setPodStorage",e.podStorage),t.next=28;break;case 12:return console.log("webId",Object(m["getDefaultSession"])().info.webId),e.webId=Object(m["getDefaultSession"])().info.webId,t.next=16,Object(v["a"])(Object(m["getDefaultSession"])().info.webId,{fetch:m["fetch"]});case 16:o=t.sent,console.log(Object(m["getDefaultSession"])()),console.log(o),r=Object(v["c"])(o,Object(m["getDefaultSession"])().info.webId),console.log("profile",r),e.name=Object(v["b"])(r,w["a"].name),console.log("name",e.name),c=Object(v["f"])(r,w["a"].knows),console.log("acquaintances",c),e.podStorage=Object(v["e"])(r,k["a"].storage),console.log("storage",e.podStorage),e.$store.dispatch("setPodStorage",e.podStorage);case 28:case"end":return t.stop()}}),t)})))()},login:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.issuer),null==e.issuer){t.next=6;break}return t.next=4,Object(m["login"])({oidcIssuer:e.issuer,redirectUrl:window.location.href,clientName:"Vatch"});case 4:return t.next=6,e.fetch();case 6:case"end":return t.stop()}}),t)})))()}}},O=S,j=(n("2ae9"),Object(s["a"])(O,p,h,!1,null,"33d322cc",null)),x=j.exports,y={name:"Home",components:{HelloWorld:x}},_=y,I=Object(s["a"])(_,d,g,!1,null,null,null),P=I.exports;o["default"].use(f["a"]);var R=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],L=new f["a"]({mode:"history",base:"/vatch-vue/",routes:R}),D=L,E=n("2f62");o["default"].use(E["a"]);var C=new E["a"].Store({state:{podStorage:null,things:[],pathsep:"/",users:[],localResources:[],podResources:{},netWork:{},user:null,chatMessages:[],file:{},webId:null,storage:null},mutations:{setPodStorage:function(e,t){e.podStorage=t},setThings:function(e,t){console.log("setThings",t),e.things=t},setUser:function(e,t){console.log(t),e.user=t},setUsers:function(e,t){e.users=t},updatepathSep:function(e,t){e.pathsep=t},updateLocalResources:function(e,t){console.log(t),e.localResources=t},addChatMessage:function(e,t){e.chatMessages.push(t)},setFile:function(e,t){e.file=t}},actions:{setPodStorage:function(e,t){e.commit("setPodStorage",t),null!=t&&e.dispatch("setCurrentThingUrl",t)},setCurrentThingUrl:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(v["a"])(t,{fetch:m["fetch"]});case 2:return o=n.sent,console.log(o),n.next=6,Object(v["d"])(o,t);case 6:r=n.sent,console.log("Things",r),e.commit("setThings",r);case 9:case"end":return n.stop()}}),n)})))()}},modules:{}}),T=n("8e27"),N={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log("opts",t);var n=t.store,o=e.prototype.$socket=Object(T["io"])("http://localhost:3000");o.on("init",(function(e){console.log("init",e),n.commit("updatepathSep",e.pathsep)})),o.on("users",(function(e){console.log("users",e),n.commit("setUsers",e)})),o.on("watcher event",(function(e){console.log("Watcher event",e),n.commit("updateLocalResources",e)})),o.on("walker",(function(e){console.log("Walker",e),n.commit("updateLocalResources",e)})),o.on("cat file",(function(e){console.log("TODO PROCESSFILE cat file",e),n.commit("setFile",e)})),o.on("chat message",(function(e){console.log("chat message",e),n.commit("addChatMessage",e)})),o.on("connect",(function(){n.commit("setUser",o.id)})),o.on("disconnect",(function(){n.commit("setUser",null)}))}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(N);var A=N,U=n("5f5b"),M=n("b1e0");n("f9e3"),n("2dd8");o["default"].use(A,{store:C}),o["default"].use(U["a"]),o["default"].use(M["a"]),o["default"].config.productionTip=!1,new o["default"]({router:D,store:C,render:function(e){return e(i)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){}});
//# sourceMappingURL=app.affd14c9.js.map