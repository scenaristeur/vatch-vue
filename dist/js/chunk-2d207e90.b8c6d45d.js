(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207e90"],{a319:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-list-group-item",{staticClass:"d-flex",attrs:{href:"#"},on:{click:e.loadResource,contextmenu:function(t){return t.preventDefault(),e.openContext(t)}}},[n("div",{staticClass:"mr-3"},[e.resource.endsWith("/")?n("b-icon",{attrs:{icon:"folder-fill",variant:"warning"}}):n("b-icon",{attrs:{icon:"file-earmark-richtext",variant:"info"}})],1),n("span",[e._v(" "+e._s(decodeURIComponent(e.resource)))]),n("context-menu",{ref:"ctxMenu",attrs:{id:"context-menu"}},[n("b-list-group",[n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center",attrs:{href:"#"},on:{click:function(t){return e.doSomething("delete")}}},[n("b-icon",{attrs:{icon:"x-circle",scale:"2",variant:"danger"}}),e._v(" Delete ")],1),n("b-list-group-item",{attrs:{href:"#"},on:{click:function(t){return e.doSomething("1")}}},[e._v("Download (todo)")]),n("b-list-group-item",{attrs:{href:"#"},on:{click:function(t){return e.doSomething("1")}}},[e._v("Copy (todo)")]),n("b-list-group-item",{attrs:{href:"#"},on:{click:function(t){return e.doSomething("2")}}},[e._v("Rename (todo)")]),n("b-list-group-item",{attrs:{href:"#"},on:{click:function(t){return e.doSomething("3")}}},[e._v("Move (todo)")])],1)],1)],1)},r=[],i=n("1da1"),c=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),{name:"Resource",props:["resource"],components:{contextMenu:function(){return n.e("chunk-2d0a4638").then(n.t.bind(null,"05da",7))}},methods:{loadResource:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("solid/setCurrentThingUrl",e.resource);case 1:case"end":return t.stop()}}),t)})))()},openContext:function(){this.$refs.ctxMenu.open()},doSomething:function(e){var t=!1;switch(e){case"delete":console.log("delete",this.resource),t=confirm("Are you sure you want to delete "+this.resource),1==t&&this.$store.dispatch("solid/deleteOnPod",this.resource);break;default:console.log(e)}}}}),s=c,u=n("2877"),a=Object(u["a"])(s,o,r,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d207e90.b8c6d45d.js.map