(function(e){function t(t){for(var o,r,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4e17229e","chunk-2c2e613c":"f00ddd0e","chunk-2d0ac44b":"65b028e1","chunk-2d0bceed":"025827ea","chunk-2d0c7cf2":"09d445b6","chunk-2d0f0d96":"643c11b0","chunk-4610bb8d":"518e44ad","chunk-467e37e4":"04130cfd","chunk-2d0a4638":"20f52174"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4610bb8d":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2c2e613c":"31d6cfe0","chunk-2d0ac44b":"31d6cfe0","chunk-2d0bceed":"31d6cfe0","chunk-2d0c7cf2":"31d6cfe0","chunk-2d0f0d96":"31d6cfe0","chunk-4610bb8d":"d94dc95c","chunk-467e37e4":"31d6cfe0","chunk-2d0a4638":"31d6cfe0"}[e]+".css",c=i.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vatch-vue/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;a.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t,n){e.exports=n("56d7")},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},2:function(e,t){},3:function(e,t){},"3a93":function(e,t,n){"use strict";n("6782")},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},c=[],a=(n("034f"),n("2877")),s={},i=Object(a["a"])(s,r,c,!1,null,null,null),u=i.exports,l=n("9483");Object(l["a"])("".concat("/vatch-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Solid Local to POD transfert"}})],1)},h=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("b-container",[n("b-row",[n("b-col",[n("Network"),n("Editor"),n("LocalBrowser")],1),n("b-col",[n("Login"),n("PodStorage")],1)],1)],1),n("Input")],1)},g=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"network",attrs:{id:"mynetwork"}},[e._v("N/A")]),n("b-button",{on:{click:e.clusterByGroup}},[e._v("Cluster By group")])],1)},b=[],v=(n("b64b"),n("159b"),n("ac1f"),n("1276"),n("2ca0"),n("a15b"),n("5872")),k=n("087a"),w=(n("1faf"),{name:"Network",mounted:function(){var e=this,t=new v["DataSet"]([]),n=new v["DataSet"]([]),o=document.getElementById("mynetwork");this.data={nodes:t,edges:n};var r={interaction:{navigationButtons:!0},edges:{arrows:"to"}};this.network=new k["Network"](o,this.data,r),this.network.on("selectNode",(function(t){if(1==t.nodes.length)if(1==e.network.isCluster(t.nodes[0]))e.network.openCluster(t.nodes[0]);else{var n=t.nodes[0];e.$store.commit("vatch/setInput",n),console.log("input.value",n);var o=e.data.nodes.get(n);console.log("selected",o),console.log("socket",e.$socket),"file"==o.type?(e.$socket.emit("read file",{path:o.id}),o.shape="ellipse",e.data.nodes.update(o)):"folder"==o.type&&(o.shape="box",e.data.nodes.update(o))}})),this.localResources=this.$store.state.vatch.localResources,console.log(this.localResources)},methods:{fieldFromItems:function(e,t){var n={};for(var o in e)n[e[o][t]]=!0;return Object.keys(n)},collectGroups:function(){var e=this.data.nodes.get({fields:["group"]});return this.fieldFromItems(e,"group")},clusterByGroup:function(){var e=this.collectGroups();for(var t in e){var n=e[t];this.network.cluster({joinCondition:function(e){return e.group==n},clusterNodeProperties:{label:"Group "+n,borderWidth:3,shape:"database",color:"orange"}})}},process:function(e){var t=this;console.log("PROCESS",e),e.forEach((function(e){switch(e.event){case"add":t.add(e);break;case"addDir":t.addDir(e);break;case"unlink":t.unlink(e),t.unlinkContainer(e);break;case"unlinkDir":t.unlinkDir(e),t.unlinkContainer(e);break;case"change":t.change(e);break;default:}}))},add:function(e){var t="#55D5E0",n=e.path.split(this.pathsep).pop();this.data.nodes.update([{id:e.path,label:n,color:t,type:"file",group:"file"}]),this.linkContainer(e),n.startsWith("#")&&this.$socket.emit("read file",{path:e.path})},addDir:function(e){var t=e.path.split(this.pathsep),n=1==t.length?"#F26619":"#F6B12D";this.data.nodes.update([{id:e.path,label:t.pop(),shape:"box",color:n,type:"folder",group:"folder"}]),this.linkContainer(e)},unlink:function(e){this.data.nodes.remove(e.path)},unlinkDir:function(e){this.data.nodes.remove(e.path)},linkContainer:function(e){var t=e.path.split(this.pathsep);if(t.length>1){var n=e.path;t.pop();var o=t.join(this.pathsep),r=this.data.edges.get({filter:function(e){return e.from==o&&e.to==n&&"contains"==e.label}});if(0==r.length){var c={from:o,to:n,label:"contains"};this.data.edges.add([c])}}},unlinkContainer:function(e){var t=e.path.split(this.pathsep);if(t.length>1){var n=e.path;t.pop();var o=t.join(this.pathsep),r=this.data.edges.get({filter:function(e){return e.from==o&&e.to==n&&"contains"==e.label}});this.data.edges.remove(r)}},change:function(e){var t=this.data.nodes.get(e.path);t.shape="star",this.data.nodes.update(t)}},watch:{localResources:function(){console.log("Resources in network",this.localResources),this.process(this.localResources)}},computed:{pathsep:{get:function(){return this.$store.state.vatch.pathsep},set:function(){}},localResources:{get:function(){return this.$store.state.vatch.localResources},set:function(){}}}}),O=w,j=(n("6771"),Object(a["a"])(O,m,b,!1,null,null,null)),y=j.exports,x={name:"HelloWorld",props:{msg:String},components:{Network:y,PodStorage:function(){return n.e("chunk-2d0c7cf2").then(n.bind(null,"51cc"))},LocalBrowser:function(){return n.e("chunk-2d0f0d96").then(n.bind(null,"9db7"))},Input:function(){return n.e("chunk-4610bb8d").then(n.bind(null,"1270"))},Editor:function(){return n.e("chunk-2d0ac44b").then(n.bind(null,"198e"))},Login:function(){return n.e("chunk-2d0bceed").then(n.bind(null,"2a9a"))}}},R=x,S=(n("3a93"),Object(a["a"])(R,p,g,!1,null,"58a2ed7b",null)),C=S.exports,P={name:"Home",components:{HelloWorld:C}},_=P,E=Object(a["a"])(_,f,h,!1,null,null,null),I=E.exports;o["default"].use(d["a"]);var T=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],D=new d["a"]({mode:"history",base:"/vatch-vue/",routes:T}),L=D,F=n("2f62"),N=n("1da1"),U=(n("b0c0"),n("8a79"),n("99af"),n("fb6a"),n("96cf"),n("93ef")),A=n("8522"),B=n("d11f"),$=n("dbc7"),W=function(){return{session:null,pod:null,currentRemoteUrl:"",things:[]}},M={checkSessions:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var o,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,r=e.dispatch,n.next=3,Object(A["handleIncomingRedirect"])({restorePreviousSession:t.restore}).then((function(e){console.log(e)}));case 3:c=Object(A["getDefaultSession"])(),Object(A["onSessionRestore"])((function(e){console.log("restore",e)})),o("setSession",c),r("getPodInfos",c);case 7:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(A["login"])({oidcIssuer:t,redirectUrl:window.location.href,clientName:"Vatch"});case 2:case"end":return e.stop()}}),e)})))()},logout:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=Object(A["getDefaultSession"])(),console.log(t),n.next=4,o.logout();case 4:e.commit("setSession",o),e.commit("setPod",{});case 6:case"end":return n.stop()}}),n)})))()},getPodInfos:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o={},o.logged=t.info.isLoggedIn,!o.logged){n.next=15;break}return o.webId=t.info.webId,n.next=6,Object(U["d"])(o.webId,{fetch:A["fetch"]});case 6:r=n.sent,o.profile=Object(U["g"])(r,o.webId),o.name=Object(U["f"])(o.profile,B["a"].name),o.acquaintances=Object(U["j"])(o.profile,B["a"].knows),o.storage=Object(U["i"])(o.profile,$["a"].storage),e.commit("setPod",o),null!=o.storage&&e.dispatch("setCurrentThingUrl",o.storage),n.next=17;break;case 15:e.commit("setPod",null),e.commit("setThings",[]);case 17:case"end":return n.stop()}}),n)})))()},uploadLocalToPod:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var o,r,c,a,s,i,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(t),void 0!=t.dest){n.next=4;break}return alert("Please select a destination"),n.abrupt("return");case 4:if(o=t.type&&t.type.mime||"plain/text",r=t.dest.endsWith("/"),c="addDir"==t.event,!c){n.next=11;break}console.info("todo src is directory"),n.next=27;break;case 11:if(!r){n.next=21;break}return void 0==t.parts&&(t.parts=t.path.split(e.rootState.vatch.pathsep)),a=encodeURIComponent(t.parts.pop()),n.next=16,Object(U["m"])(t.dest,new Blob([t.content],{type:o}),{slug:a,fetch:A["fetch"]});case 16:s=n.sent,console.log("File saved at ".concat(Object(U["e"])(s))),e.dispatch("setCurrentThingUrl",t.dest),n.next=27;break;case 21:if(i=confirm("Are you sure you want to replace "+t.dest),1!=i){n.next=27;break}return n.next=25,Object(U["l"])(t.dest,new Blob([t.content],{type:o}),{fetch:A["fetch"]});case 25:u=n.sent,console.log("File saved!",u);case 27:case"end":return n.stop()}}),n)})))()},setCurrentThingUrl:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var o,r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(U["c"])(t,{fetch:A["fetch"]});case 2:if(o=n.sent,console.log("Fetched a ".concat(Object(U["b"])(o)," file from ").concat(Object(U["e"])(o),".")),console.log("The file is ".concat(Object(U["k"])(o)?"not ":"","a dataset.")),e.commit("setCurrentRemoteUrl",t),!Object(U["k"])(o)){n.next=13;break}console.log("todo raw data",o),r=new FileReader,r.addEventListener("loadend",(function(){console.log(r),e.commit("vatch/setFile",{path:Object(U["e"])(o),content:r.result,type:{mime:Object(U["b"])(o)}},{root:!0})})),r.readAsText(o),n.next=21;break;case 13:return n.next=15,Object(U["d"])(t,{fetch:A["fetch"]});case 15:return c=n.sent,console.log(c),n.next=19,Object(U["h"])(c,t);case 19:a=n.sent,e.commit("setThings",a);case 21:case"end":return n.stop()}}),n)})))()},deleteOnPod:function(e,t){return Object(N["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(U["a"])(t,{fetch:A["fetch"]});case 2:console.log("File deleted !",t),o=t.slice(0,t.lastIndexOf("/"))+"/",console.log("parent",o),e.dispatch("setCurrentThingUrl",o);case 6:case"end":return n.stop()}}),n)})))()}},H={setPod:function(e,t){e.pod=t},setSession:function(e,t){e.session=t},setCurrentRemoteUrl:function(e,t){e.currentRemoteUrl=t},setThings:function(e,t){e.things=t}},G={namespaced:!0,state:W,actions:M,mutations:H},q=function(){return{pathsep:"/",users:[],localResources:[],netWork:{},user:null,chatMessages:[],file:{},storage:null,input:""}},V={},J={setInput:function(e,t){e.input=t},setPodStorage:function(e,t){e.podStorage=t},setUser:function(e,t){console.log(t),e.user=t},setUsers:function(e,t){e.users=t},updatepathSep:function(e,t){e.pathsep=t},updateLocalResources:function(e,t){console.log(t),e.localResources=t},addChatMessage:function(e,t){e.chatMessages.push(t)},setFile:function(e,t){e.file=t}},K={namespaced:!0,state:q,actions:V,mutations:J};o["default"].use(F["a"]);var z=new F["a"].Store({state:{},mutations:{},actions:{},modules:{solid:G,vatch:K}}),Q=n("8e27"),X={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store,o=e.prototype.$socket=Object(Q["io"])(":3000");o.on("init",(function(e){console.log("init",e),n.commit("vatch/updatepathSep",e.pathsep)})),o.on("users",(function(e){console.log("users",e),n.commit("vatch/setUsers",e)})),o.on("watcher event",(function(e){console.log("Watcher event",e),n.commit("vatch/updateLocalResources",e)})),o.on("walker",(function(e){console.log("Walker",e),n.commit("vatch/updateLocalResources",e)})),o.on("cat file",(function(e){void 0!=e.callback?n.dispatch(e.callback,e):(console.log("TODO PROCESSFILE cat file",e),n.commit("vatch/setFile",e))})),o.on("chat message",(function(e){console.log("chat message",e),n.commit("vatch/addChatMessage",e)})),o.on("connect",(function(){n.commit("vatch/setUser",o.id)})),o.on("disconnect",(function(){n.commit("vatch/setUser",null)}))}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(X);var Y=X,Z=n("5f5b"),ee=n("b1e0");n("f9e3"),n("2dd8");o["default"].use(Y,{store:z}),o["default"].use(Z["a"]),o["default"].use(ee["a"]),o["default"].config.productionTip=!1,new o["default"]({router:L,store:z,render:function(e){return e(u)}}).$mount("#app")},6:function(e,t){},6771:function(e,t,n){"use strict";n("d901")},6782:function(e,t,n){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){},d901:function(e,t,n){}});
//# sourceMappingURL=app.81155392.js.map