(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7cf2"],{"51cc":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mb-4"},[null!=e.pod?r("div",[r("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and input groups"}},[r("b-button-group",{staticClass:"mr-1",staticStyle:{width:"100%"},attrs:{size:"sm"}},[r("b-button",{on:{click:function(t){return e.load(e.pod.storage)}}},[r("b-icon",{attrs:{icon:"arrow90deg-up","aria-hidden":"true"}})],1),r("b-button",{on:{click:function(t){e.load(e.parent(e.currentRemoteUrl))}}},[r("b-icon",{attrs:{icon:"arrow-up","aria-hidden":"true"}})],1),r("b-button",{on:{click:e.newFile}},[r("b-icon",{attrs:{icon:"file-earmark-richtext","aria-hidden":"true"}})],1),r("b-button",{on:{click:e.newFolder}},[r("b-icon",{attrs:{icon:"folder-fill","aria-hidden":"true"}})],1),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.bv-modal-profile",modifiers:{"bv-modal-profile":!0}}]},[r("b-icon",{attrs:{icon:"person-circle","aria-hidden":"true"}})],1)],1),r("b-button-group",[r("b-form-input",{staticClass:"text-right",model:{value:e.currentRemoteUrl,callback:function(t){e.currentRemoteUrl=t},expression:"currentRemoteUrl"}})],1)],1),r("div",{staticStyle:{height:"400px","overflow-y":"scroll"}},[r("b-list-group",e._l(e.remoteResources,(function(e){return r("Resource",{key:e,attrs:{resource:e}})})),1)],1),r("Profile")],1):r("Login")],1)},o=[],i=r("1da1"),c=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("8a79"),r("fb6a"),{name:"PodStorage",components:{Resource:function(){return r.e("chunk-2d207e90").then(r.bind(null,"a319"))},Login:function(){return r.e("chunk-2d0bceed").then(r.bind(null,"2a9a"))},Profile:function(){return r.e("chunk-2d22d406").then(r.bind(null,"f765"))}},methods:{load:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$setCurrentThingUrl(e);case 1:case"end":return r.stop()}}),r)})))()},parent:function(e){return e=e.endsWith("/")?e.slice(0,-1):e,e.substring(0,e.lastIndexOf("/")+1)},newFile:function(){var e=prompt("Filename :",Date.now());if(console.log(e),null!==e&&e.length>0){var t=this.currentRemoteUrl.endsWith("/")?this.currentRemoteUrl:this.parent(this.currentRemoteUrl);this.$createFile({dest:t,filename:e})}},newFolder:function(){var e=prompt("Foldername :",Date.now());if(console.log(e),null!==e&&e.length>0){var t=this.currentRemoteUrl.endsWith("/")?this.currentRemoteUrl:this.parent(this.currentRemoteUrl);this.$createFolder({dest:t,foldername:e})}}},computed:{pod:{get:function(){return this.$store.state.solid.pod},set:function(){}},remoteResources:{get:function(){return this.$store.state.solid.remoteResources},set:function(){}},currentRemoteUrl:{get:function(){return this.$store.state.solid.currentRemoteUrl},set:function(){}}}}),u=c,a=r("2877"),l=Object(a["a"])(u,n,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c7cf2.c4788bd3.js.map