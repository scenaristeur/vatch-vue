(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac44b"],{"198e":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{attrs:{id:"bv-modal-editor",size:"lg"},on:{ok:t.save,cancel:t.cancel},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Editor ... "),o("a",{attrs:{href:"https://scenaristeur.github.io/ipgs/about",target:"_blank"}},[t._v("WAnt to CReate BIg MindMaps ? TRy Ipgs")])]},proxy:!0}])},[t.src.length>0?o("b-img",{attrs:{src:t.src,width:"425px"}}):o("b-textarea",{attrs:{rows:"20",cols:"50"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),o("b-input",{attrs:{autocomplete:"off"},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}})],1)},i=[],n=(o("2ca0"),o("ac1f"),o("1276"),{name:"Editor",data:function(){return{path:"",content:"",src:""}},methods:{save:function(){this.$bvModal.hide("bv-modal-exditor"),this.path.startsWith(this.pod.storage)?this.$store.dispatch("solid/uploadLocalToPod",{dest:this.path,content:this.content}):this.$socket.emit("write file",{path:this.path,content:this.content}),this.src="",this.path="",this.content=""},cancel:function(){this.src="",this.path="",this.content=""},processFile:function(t){if(this.src="",this.path="",this.content="",t.error)alert("Error: ",t.error);else if(void 0==t.type&&(t.ext=t.path.split(".").pop()),this.$bvModal.show("bv-modal-editor"),this.path=t.path,this.content=t.content,void 0!=t.type&&void 0!=t.type.mime&&"image"==t.type.mime.split("/")[0]){var e="data:"+t.type.mime+";base64,"+t.content;this.src=e}else console.log(t)}},watch:{file:function(){this.processFile(this.file)}},computed:{file:{get:function(){return this.$store.state.vatch.file},set:function(){}},pod:{get:function(){return this.$store.state.solid.pod},set:function(){}}}}),a=n,c=o("2877"),r=Object(c["a"])(a,s,i,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0ac44b.65b028e1.js.map