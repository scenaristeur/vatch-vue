(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8fe2374"],{"129f":function(n,t){n.exports=Object.is||function(n,t){return n===t?0!==n||1/n===1/t:n!=n&&t!=t}},"2f47":function(n,t,r){"use strict";(function(n){r.d(t,"e",(function(){return e})),r.d(t,"p",(function(){return u})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return c})),r.d(t,"o",(function(){return a})),r.d(t,"q",(function(){return f})),r.d(t,"t",(function(){return l})),r.d(t,"i",(function(){return s})),r.d(t,"r",(function(){return d})),r.d(t,"s",(function(){return p})),r.d(t,"k",(function(){return h})),r.d(t,"m",(function(){return v})),r.d(t,"j",(function(){return g})),r.d(t,"l",(function(){return y})),r.d(t,"g",(function(){return b})),r.d(t,"f",(function(){return m})),r.d(t,"h",(function(){return w})),r.d(t,"n",(function(){return _})),r.d(t,"b",(function(){return j}));var e="1.13.1",u="object"==typeof self&&self.self===self&&self||"object"==typeof n&&n.global===n&&n||Function("return this")()||{},i=Array.prototype,o=Object.prototype,c="undefined"!==typeof Symbol?Symbol.prototype:null,a=i.push,f=i.slice,l=o.toString,s=o.hasOwnProperty,d="undefined"!==typeof ArrayBuffer,p="undefined"!==typeof DataView,h=Array.isArray,v=Object.keys,g=Object.create,y=d&&ArrayBuffer.isView,b=isNaN,m=isFinite,w=!{toString:null}.propertyIsEnumerable("toString"),_=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],j=Math.pow(2,53)-1}).call(this,r("c8ba"))},"841c":function(n,t,r){"use strict";var e=r("d784"),u=r("825a"),i=r("1d80"),o=r("129f"),c=r("14c3");e("search",1,(function(n,t,r){return[function(t){var r=i(this),e=void 0==t?void 0:t[n];return void 0!==e?e.call(t,r):new RegExp(t)[n](String(r))},function(n){var e=r(t,n,this);if(e.done)return e.value;var i=u(n),a=String(this),f=i.lastIndex;o(f,0)||(i.lastIndex=0);var l=c(i,a);return o(i.lastIndex,f)||(i.lastIndex=f),null===l?-1:l.index}]}))},f709:function(n,t,r){"use strict";r.r(t);var e={};r.r(e),r.d(e,"VERSION",(function(){return c["e"]})),r.d(e,"restArguments",(function(){return a})),r.d(e,"isObject",(function(){return f})),r.d(e,"isNull",(function(){return l})),r.d(e,"isUndefined",(function(){return s})),r.d(e,"isBoolean",(function(){return d})),r.d(e,"isElement",(function(){return p})),r.d(e,"isString",(function(){return v})),r.d(e,"isNumber",(function(){return g})),r.d(e,"isDate",(function(){return y})),r.d(e,"isRegExp",(function(){return b})),r.d(e,"isError",(function(){return m})),r.d(e,"isSymbol",(function(){return w})),r.d(e,"isArrayBuffer",(function(){return _})),r.d(e,"isDataView",(function(){return E})),r.d(e,"isArray",(function(){return M})),r.d(e,"isFunction",(function(){return S})),r.d(e,"isArguments",(function(){return N})),r.d(e,"isFinite",(function(){return R})),r.d(e,"isNaN",(function(){return q})),r.d(e,"isTypedArray",(function(){return C})),r.d(e,"isEmpty",(function(){return H})),r.d(e,"isMatch",(function(){return Q})),r.d(e,"isEqual",(function(){return rn})),r.d(e,"isMap",(function(){return pn})),r.d(e,"isWeakMap",(function(){return hn})),r.d(e,"isSet",(function(){return vn})),r.d(e,"isWeakSet",(function(){return gn})),r.d(e,"keys",(function(){return G})),r.d(e,"allKeys",(function(){return en})),r.d(e,"values",(function(){return yn})),r.d(e,"pairs",(function(){return bn})),r.d(e,"invert",(function(){return mn})),r.d(e,"functions",(function(){return wn})),r.d(e,"methods",(function(){return wn})),r.d(e,"extend",(function(){return jn})),r.d(e,"extendOwn",(function(){return xn})),r.d(e,"assign",(function(){return xn})),r.d(e,"defaults",(function(){return Sn})),r.d(e,"create",(function(){return An})),r.d(e,"clone",(function(){return Tn})),r.d(e,"tap",(function(){return In})),r.d(e,"get",(function(){return Fn})),r.d(e,"has",(function(){return Nn})),r.d(e,"mapObject",(function(){return Un})),r.d(e,"identity",(function(){return Rn})),r.d(e,"constant",(function(){return D})),r.d(e,"noop",(function(){return Wn})),r.d(e,"toPath",(function(){return En})),r.d(e,"property",(function(){return Dn})),r.d(e,"propertyOf",(function(){return Cn})),r.d(e,"matcher",(function(){return qn})),r.d(e,"matches",(function(){return qn})),r.d(e,"times",(function(){return Ln})),r.d(e,"random",(function(){return Jn})),r.d(e,"now",(function(){return Kn})),r.d(e,"escape",(function(){return Qn})),r.d(e,"unescape",(function(){return Yn})),r.d(e,"templateSettings",(function(){return Zn})),r.d(e,"template",(function(){return it})),r.d(e,"result",(function(){return ot})),r.d(e,"uniqueId",(function(){return at})),r.d(e,"chain",(function(){return ft})),r.d(e,"iteratee",(function(){return $n})),r.d(e,"partial",(function(){return dt})),r.d(e,"bind",(function(){return pt})),r.d(e,"bindAll",(function(){return gt})),r.d(e,"memoize",(function(){return yt})),r.d(e,"delay",(function(){return bt})),r.d(e,"defer",(function(){return mt})),r.d(e,"throttle",(function(){return wt})),r.d(e,"debounce",(function(){return _t})),r.d(e,"wrap",(function(){return jt})),r.d(e,"negate",(function(){return xt})),r.d(e,"compose",(function(){return St})),r.d(e,"after",(function(){return kt})),r.d(e,"before",(function(){return Ot})),r.d(e,"once",(function(){return At})),r.d(e,"findKey",(function(){return Tt})),r.d(e,"findIndex",(function(){return Et})),r.d(e,"findLastIndex",(function(){return Mt})),r.d(e,"sortedIndex",(function(){return Bt})),r.d(e,"indexOf",(function(){return Nt})),r.d(e,"lastIndexOf",(function(){return Rt})),r.d(e,"find",(function(){return qt})),r.d(e,"detect",(function(){return qt})),r.d(e,"findWhere",(function(){return Dt})),r.d(e,"each",(function(){return Vt})),r.d(e,"forEach",(function(){return Vt})),r.d(e,"map",(function(){return Pt})),r.d(e,"collect",(function(){return Pt})),r.d(e,"reduce",(function(){return zt})),r.d(e,"foldl",(function(){return zt})),r.d(e,"inject",(function(){return zt})),r.d(e,"reduceRight",(function(){return Ut})),r.d(e,"foldr",(function(){return Ut})),r.d(e,"filter",(function(){return Wt})),r.d(e,"select",(function(){return Wt})),r.d(e,"reject",(function(){return Ct})),r.d(e,"every",(function(){return Lt})),r.d(e,"all",(function(){return Lt})),r.d(e,"some",(function(){return Jt})),r.d(e,"any",(function(){return Jt})),r.d(e,"contains",(function(){return Kt})),r.d(e,"includes",(function(){return Kt})),r.d(e,"include",(function(){return Kt})),r.d(e,"invoke",(function(){return Gt})),r.d(e,"pluck",(function(){return Ht})),r.d(e,"where",(function(){return Qt})),r.d(e,"max",(function(){return Xt})),r.d(e,"min",(function(){return Yt})),r.d(e,"shuffle",(function(){return nr})),r.d(e,"sample",(function(){return Zt})),r.d(e,"sortBy",(function(){return tr})),r.d(e,"groupBy",(function(){return er})),r.d(e,"indexBy",(function(){return ur})),r.d(e,"countBy",(function(){return ir})),r.d(e,"partition",(function(){return or})),r.d(e,"toArray",(function(){return ar})),r.d(e,"size",(function(){return fr})),r.d(e,"pick",(function(){return sr})),r.d(e,"omit",(function(){return dr})),r.d(e,"first",(function(){return hr})),r.d(e,"head",(function(){return hr})),r.d(e,"take",(function(){return hr})),r.d(e,"initial",(function(){return pr})),r.d(e,"last",(function(){return gr})),r.d(e,"rest",(function(){return vr})),r.d(e,"tail",(function(){return vr})),r.d(e,"drop",(function(){return vr})),r.d(e,"compact",(function(){return yr})),r.d(e,"flatten",(function(){return br})),r.d(e,"without",(function(){return wr})),r.d(e,"uniq",(function(){return _r})),r.d(e,"unique",(function(){return _r})),r.d(e,"union",(function(){return jr})),r.d(e,"intersection",(function(){return xr})),r.d(e,"difference",(function(){return mr})),r.d(e,"unzip",(function(){return Sr})),r.d(e,"transpose",(function(){return Sr})),r.d(e,"zip",(function(){return kr})),r.d(e,"object",(function(){return Or})),r.d(e,"range",(function(){return Ar})),r.d(e,"chunk",(function(){return Tr})),r.d(e,"mixin",(function(){return Er})),r.d(e,"default",(function(){return Mr}));var u=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-modal",{attrs:{id:"bv-modal-tag",size:"lg"},on:{ok:n.save},scopedSlots:n._u([{key:"modal-title",fn:function(){return[n._v(" Wikidata tagger "),r("small",[r("i",[n._v(" (if you don't find, try the "),r("a",{attrs:{href:"https://www.wikidata.org/w/index.php?title=Special%3ASearch&go=Go&ns0=1&ns120=1",target:"_blank"}},[n._v("manual search")]),n._v(")")])]),1==n.loading?r("b-spinner",{attrs:{label:"Loading..."}}):n._e()]},proxy:!0}])},[n._v(" Tags for "),r("b",[n._v(n._s(n.resourceToTag))]),r("p",{staticClass:"my-4"},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"Search on wikidata","label-for":"wikidata_search",description:"ex: `solid project`"}},[r("vue-bootstrap-typeahead",{attrs:{id:"wikidata_search",data:n.items,size:"lg",serializer:function(n){return n.match.text},placeholder:"type two letters"},on:{hit:function(t){n.selectedItem=t}},scopedSlots:n._u([{key:"suggestion",fn:function(t){var e=t.data;return[r("b",{staticClass:"md-2"},[n._v(n._s(e.match.text)+" ")]),r("small",[r("i",[n._v(n._s(e.description))])])]}}]),model:{value:n.itemSearch,callback:function(t){n.itemSearch=t},expression:"itemSearch"}})],1),r("b-list-group",n._l(n.tags,(function(t){return r("b-list-group-item",{key:t.id,attrs:{button:""}},[r("VocabSelector",{attrs:{tag:t},on:{selected:n.update}})],1)})),1)],1),r("b-row",[r("b-col",{staticClass:"col-3"},[r("b-form-group",{attrs:{label:"Privacy:"},scopedSlots:n._u([{key:"default",fn:function(t){var e=t.ariaDescribedby;return[r("b-form-radio",{attrs:{"aria-describedby":e,name:"some-radios",value:"public"},model:{value:n.privacy,callback:function(t){n.privacy=t},expression:"privacy"}},[n._v(" Public Tag File")]),r("b-form-radio",{attrs:{"aria-describedby":e,name:"some-radios",value:"private"},model:{value:n.privacy,callback:function(t){n.privacy=t},expression:"privacy"}},[n._v(" Private Tag File")])]}}])})],1),r("b-col",[n._v(" 'Public Tag File' allow other people to find this resource with your help ! but you can keep it private 😉 ")])],1)],1)},i=[],o=r("1da1"),c=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("ac1f"),r("1276"),r("841c"),r("2f47"));function a(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;u<r;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(t+1);for(u=0;u<t;u++)i[u]=arguments[u];return i[t]=e,n.apply(this,i)}}function f(n){var t=typeof n;return"function"===t||"object"===t&&!!n}function l(n){return null===n}function s(n){return void 0===n}function d(n){return!0===n||!1===n||"[object Boolean]"===c["t"].call(n)}function p(n){return!(!n||1!==n.nodeType)}function h(n){var t="[object "+n+"]";return function(n){return c["t"].call(n)===t}}var v=h("String"),g=h("Number"),y=h("Date"),b=h("RegExp"),m=h("Error"),w=h("Symbol"),_=h("ArrayBuffer"),j=h("Function"),x=c["p"].document&&c["p"].document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof x&&(j=function(n){return"function"==typeof n||!1});var S=j,k=h("Object"),O=c["s"]&&k(new DataView(new ArrayBuffer(8))),A="undefined"!==typeof Map&&k(new Map),T=h("DataView");function I(n){return null!=n&&S(n.getInt8)&&_(n.buffer)}var E=O?I:T,M=c["k"]||h("Array");function B(n,t){return null!=n&&c["i"].call(n,t)}var F=h("Arguments");(function(){F(arguments)||(F=function(n){return B(n,"callee")})})();var N=F;function R(n){return!w(n)&&Object(c["f"])(n)&&!isNaN(parseFloat(n))}function q(n){return g(n)&&Object(c["g"])(n)}function D(n){return function(){return n}}function V(n){return function(t){var r=n(t);return"number"==typeof r&&r>=0&&r<=c["b"]}}function P(n){return function(t){return null==t?void 0:t[n]}}var $=P("byteLength"),z=V($),U=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function W(n){return c["l"]?Object(c["l"])(n)&&!E(n):z(n)&&U.test(c["t"].call(n))}var C=c["r"]?W:D(!1),L=P("length");function J(n){for(var t={},r=n.length,e=0;e<r;++e)t[n[e]]=!0;return{contains:function(n){return t[n]},push:function(r){return t[r]=!0,n.push(r)}}}function K(n,t){t=J(t);var r=c["n"].length,e=n.constructor,u=S(e)&&e.prototype||c["c"],i="constructor";B(n,i)&&!t.contains(i)&&t.push(i);while(r--)i=c["n"][r],i in n&&n[i]!==u[i]&&!t.contains(i)&&t.push(i)}function G(n){if(!f(n))return[];if(c["m"])return Object(c["m"])(n);var t=[];for(var r in n)B(n,r)&&t.push(r);return c["h"]&&K(n,t),t}function H(n){if(null==n)return!0;var t=L(n);return"number"==typeof t&&(M(n)||v(n)||N(n))?0===t:0===L(G(n))}function Q(n,t){var r=G(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0}function X(n){return n instanceof X?n:this instanceof X?void(this._wrapped=n):new X(n)}function Y(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,$(n))}X.VERSION=c["e"],X.prototype.value=function(){return this._wrapped},X.prototype.valueOf=X.prototype.toJSON=X.prototype.value,X.prototype.toString=function(){return String(this._wrapped)};var Z="[object DataView]";function nn(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return!1;if(n!==n)return t!==t;var u=typeof n;return("function"===u||"object"===u||"object"==typeof t)&&tn(n,t,r,e)}function tn(n,t,r,e){n instanceof X&&(n=n._wrapped),t instanceof X&&(t=t._wrapped);var u=c["t"].call(n);if(u!==c["t"].call(t))return!1;if(O&&"[object Object]"==u&&E(n)){if(!E(t))return!1;u=Z}switch(u){case"[object RegExp]":case"[object String]":return""+n===""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t;case"[object Symbol]":return c["d"].valueOf.call(n)===c["d"].valueOf.call(t);case"[object ArrayBuffer]":case Z:return tn(Y(n),Y(t),r,e)}var i="[object Array]"===u;if(!i&&C(n)){var o=$(n);if(o!==$(t))return!1;if(n.buffer===t.buffer&&n.byteOffset===t.byteOffset)return!0;i=!0}if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var a=n.constructor,f=t.constructor;if(a!==f&&!(S(a)&&a instanceof a&&S(f)&&f instanceof f)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];var l=r.length;while(l--)if(r[l]===n)return e[l]===t;if(r.push(n),e.push(t),i){if(l=n.length,l!==t.length)return!1;while(l--)if(!nn(n[l],t[l],r,e))return!1}else{var s,d=G(n);if(l=d.length,G(t).length!==l)return!1;while(l--)if(s=d[l],!B(t,s)||!nn(n[s],t[s],r,e))return!1}return r.pop(),e.pop(),!0}function rn(n,t){return nn(n,t)}function en(n){if(!f(n))return[];var t=[];for(var r in n)t.push(r);return c["h"]&&K(n,t),t}function un(n){var t=L(n);return function(r){if(null==r)return!1;var e=en(r);if(L(e))return!1;for(var u=0;u<t;u++)if(!S(r[n[u]]))return!1;return n!==sn||!S(r[on])}}var on="forEach",cn="has",an=["clear","delete"],fn=["get",cn,"set"],ln=an.concat(on,fn),sn=an.concat(fn),dn=["add"].concat(an,on,cn),pn=A?un(ln):h("Map"),hn=A?un(sn):h("WeakMap"),vn=A?un(dn):h("Set"),gn=h("WeakSet");function yn(n){for(var t=G(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e}function bn(n){for(var t=G(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e}function mn(n){for(var t={},r=G(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t}function wn(n){var t=[];for(var r in n)S(n[r])&&t.push(r);return t.sort()}function _n(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),c=o.length,a=0;a<c;a++){var f=o[a];t&&void 0!==r[f]||(r[f]=i[f])}return r}}var jn=_n(en),xn=_n(G),Sn=_n(en,!0);function kn(){return function(){}}function On(n){if(!f(n))return{};if(c["j"])return Object(c["j"])(n);var t=kn();t.prototype=n;var r=new t;return t.prototype=null,r}function An(n,t){var r=On(n);return t&&xn(r,t),r}function Tn(n){return f(n)?M(n)?n.slice():jn({},n):n}function In(n,t){return t(n),n}function En(n){return M(n)?n:[n]}function Mn(n){return X.toPath(n)}function Bn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function Fn(n,t,r){var e=Bn(n,Mn(t));return s(e)?r:e}function Nn(n,t){t=Mn(t);for(var r=t.length,e=0;e<r;e++){var u=t[e];if(!B(n,u))return!1;n=n[u]}return!!r}function Rn(n){return n}function qn(n){return n=xn({},n),function(t){return Q(t,n)}}function Dn(n){return n=Mn(n),function(t){return Bn(t,n)}}function Vn(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}}function Pn(n,t,r){return null==n?Rn:S(n)?Vn(n,t,r):f(n)&&!M(n)?qn(n):Dn(n)}function $n(n,t){return Pn(n,t,1/0)}function zn(n,t,r){return X.iteratee!==$n?X.iteratee(n,t):Pn(n,t,r)}function Un(n,t,r){t=zn(t,r);for(var e=G(n),u=e.length,i={},o=0;o<u;o++){var c=e[o];i[c]=t(n[c],c,n)}return i}function Wn(){}function Cn(n){return null==n?Wn:function(t){return Fn(n,t)}}function Ln(n,t,r){var e=Array(Math.max(0,n));t=Vn(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e}function Jn(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}X.toPath=En,X.iteratee=$n;var Kn=Date.now||function(){return(new Date).getTime()};function Gn(n){var t=function(t){return n[t]},r="(?:"+G(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}}var Hn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Qn=Gn(Hn),Xn=mn(Hn),Yn=Gn(Xn),Zn=X.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},nt=/(.)^/,tt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},rt=/\\|'|\r|\n|\u2028|\u2029/g;function et(n){return"\\"+tt[n]}var ut=/^\s*(\w|\$)+\s*$/;function it(n,t,r){!t&&r&&(t=r),t=Sn({},t,X.templateSettings);var e=RegExp([(t.escape||nt).source,(t.interpolate||nt).source,(t.evaluate||nt).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,(function(t,r,e,o,c){return i+=n.slice(u,c).replace(rt,et),u=c+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t})),i+="';\n";var o,c=t.variable;if(c){if(!ut.test(c))throw new Error("variable is not a bare identifier: "+c)}else i="with(obj||{}){\n"+i+"}\n",c="obj";i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{o=new Function(c,"_",i)}catch(f){throw f.source=i,f}var a=function(n){return o.call(this,n,X)};return a.source="function("+c+"){\n"+i+"}",a}function ot(n,t,r){t=Mn(t);var e=t.length;if(!e)return S(r)?r.call(n):r;for(var u=0;u<e;u++){var i=null==n?void 0:n[t[u]];void 0===i&&(i=r,u=e),n=S(i)?i.call(n):i}return n}var ct=0;function at(n){var t=++ct+"";return n?n+t:t}function ft(n){var t=X(n);return t._chain=!0,t}function lt(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=On(n.prototype),o=n.apply(i,u);return f(o)?o:i}var st=a((function(n,t){var r=st.placeholder,e=function(){for(var u=0,i=t.length,o=Array(i),c=0;c<i;c++)o[c]=t[c]===r?arguments[u++]:t[c];while(u<arguments.length)o.push(arguments[u++]);return lt(n,e,this,this,o)};return e}));st.placeholder=X;var dt=st,pt=a((function(n,t,r){if(!S(n))throw new TypeError("Bind must be called on a function");var e=a((function(u){return lt(n,e,t,this,r.concat(u))}));return e})),ht=V(L);function vt(n,t,r,e){if(e=e||[],t||0===t){if(t<=0)return e.concat(n)}else t=1/0;for(var u=e.length,i=0,o=L(n);i<o;i++){var c=n[i];if(ht(c)&&(M(c)||N(c)))if(t>1)vt(c,t-1,r,e),u=e.length;else{var a=0,f=c.length;while(a<f)e[u++]=c[a++]}else r||(e[u++]=c)}return e}var gt=a((function(n,t){t=vt(t,!1,!1);var r=t.length;if(r<1)throw new Error("bindAll must be passed function names");while(r--){var e=t[r];n[e]=pt(n[e],n)}return n}));function yt(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return B(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r}var bt=a((function(n,t,r){return setTimeout((function(){return n.apply(null,r)}),t)})),mt=dt(bt,X,1);function wt(n,t,r){var e,u,i,o,c=0;r||(r={});var a=function(){c=!1===r.leading?0:Kn(),e=null,o=n.apply(u,i),e||(u=i=null)},f=function(){var f=Kn();c||!1!==r.leading||(c=f);var l=t-(f-c);return u=this,i=arguments,l<=0||l>t?(e&&(clearTimeout(e),e=null),c=f,o=n.apply(u,i),e||(u=i=null)):e||!1===r.trailing||(e=setTimeout(a,l)),o};return f.cancel=function(){clearTimeout(e),c=0,e=u=i=null},f}function _t(n,t,r){var e,u,i,o,c,f=function(){var a=Kn()-u;t>a?e=setTimeout(f,t-a):(e=null,r||(o=n.apply(c,i)),e||(i=c=null))},l=a((function(a){return c=this,i=a,u=Kn(),e||(e=setTimeout(f,t),r&&(o=n.apply(c,i))),o}));return l.cancel=function(){clearTimeout(e),e=i=c=null},l}function jt(n,t){return dt(t,n)}function xt(n){return function(){return!n.apply(this,arguments)}}function St(){var n=arguments,t=n.length-1;return function(){var r=t,e=n[t].apply(this,arguments);while(r--)e=n[r].call(this,e);return e}}function kt(n,t){return function(){if(--n<1)return t.apply(this,arguments)}}function Ot(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}var At=dt(Ot,2);function Tt(n,t,r){t=zn(t,r);for(var e,u=G(n),i=0,o=u.length;i<o;i++)if(e=u[i],t(n[e],e,n))return e}function It(n){return function(t,r,e){r=zn(r,e);for(var u=L(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}}var Et=It(1),Mt=It(-1);function Bt(n,t,r,e){r=zn(r,e,1);var u=r(t),i=0,o=L(n);while(i<o){var c=Math.floor((i+o)/2);r(n[c])<u?i=c+1:o=c}return i}function Ft(n,t,r){return function(e,u,i){var o=0,a=L(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(c["q"].call(e,o,a),q),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&i<a;i+=n)if(e[i]===u)return i;return-1}}var Nt=Ft(1,Et,Bt),Rt=Ft(-1,Mt);function qt(n,t,r){var e=ht(n)?Et:Tt,u=e(n,t,r);if(void 0!==u&&-1!==u)return n[u]}function Dt(n,t){return qt(n,qn(t))}function Vt(n,t,r){var e,u;if(t=Vn(t,r),ht(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=G(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n}function Pt(n,t,r){t=zn(t,r);for(var e=!ht(n)&&G(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var c=e?e[o]:o;i[o]=t(n[c],c,n)}return i}function $t(n){var t=function(t,r,e,u){var i=!ht(t)&&G(t),o=(i||t).length,c=n>0?0:o-1;for(u||(e=t[i?i[c]:c],c+=n);c>=0&&c<o;c+=n){var a=i?i[c]:c;e=r(e,t[a],a,t)}return e};return function(n,r,e,u){var i=arguments.length>=3;return t(n,Vn(r,u,4),e,i)}}var zt=$t(1),Ut=$t(-1);function Wt(n,t,r){var e=[];return t=zn(t,r),Vt(n,(function(n,r,u){t(n,r,u)&&e.push(n)})),e}function Ct(n,t,r){return Wt(n,xt(zn(t)),r)}function Lt(n,t,r){t=zn(t,r);for(var e=!ht(n)&&G(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0}function Jt(n,t,r){t=zn(t,r);for(var e=!ht(n)&&G(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1}function Kt(n,t,r,e){return ht(n)||(n=yn(n)),("number"!=typeof r||e)&&(r=0),Nt(n,t,r)>=0}var Gt=a((function(n,t,r){var e,u;return S(t)?u=t:(t=Mn(t),e=t.slice(0,-1),t=t[t.length-1]),Pt(n,(function(n){var i=u;if(!i){if(e&&e.length&&(n=Bn(n,e)),null==n)return;i=n[t]}return null==i?i:i.apply(n,r)}))}));function Ht(n,t){return Pt(n,Dn(t))}function Qt(n,t){return Wt(n,qn(t))}function Xt(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n){n=ht(n)?n:yn(n);for(var c=0,a=n.length;c<a;c++)e=n[c],null!=e&&e>i&&(i=e)}else t=zn(t,r),Vt(n,(function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)}));return i}function Yt(n,t,r){var e,u,i=1/0,o=1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n){n=ht(n)?n:yn(n);for(var c=0,a=n.length;c<a;c++)e=n[c],null!=e&&e<i&&(i=e)}else t=zn(t,r),Vt(n,(function(n,r,e){u=t(n,r,e),(u<o||u===1/0&&i===1/0)&&(i=n,o=u)}));return i}function Zt(n,t,r){if(null==t||r)return ht(n)||(n=yn(n)),n[Jn(n.length-1)];var e=ht(n)?Tn(n):yn(n),u=L(e);t=Math.max(Math.min(t,u),0);for(var i=u-1,o=0;o<t;o++){var c=Jn(o,i),a=e[o];e[o]=e[c],e[c]=a}return e.slice(0,t)}function nr(n){return Zt(n,1/0)}function tr(n,t,r){var e=0;return t=zn(t,r),Ht(Pt(n,(function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}})).sort((function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index})),"value")}function rr(n,t){return function(r,e,u){var i=t?[[],[]]:{};return e=zn(e,u),Vt(r,(function(t,u){var o=e(t,u,r);n(i,t,o)})),i}}var er=rr((function(n,t,r){B(n,r)?n[r].push(t):n[r]=[t]})),ur=rr((function(n,t,r){n[r]=t})),ir=rr((function(n,t,r){B(n,r)?n[r]++:n[r]=1})),or=rr((function(n,t,r){n[r?0:1].push(t)}),!0),cr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function ar(n){return n?M(n)?c["q"].call(n):v(n)?n.match(cr):ht(n)?Pt(n,Rn):yn(n):[]}function fr(n){return null==n?0:ht(n)?n.length:G(n).length}function lr(n,t,r){return t in r}var sr=a((function(n,t){var r={},e=t[0];if(null==n)return r;S(e)?(t.length>1&&(e=Vn(e,t[1])),t=en(n)):(e=lr,t=vt(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],c=n[o];e(c,o,n)&&(r[o]=c)}return r})),dr=a((function(n,t){var r,e=t[0];return S(e)?(e=xt(e),t.length>1&&(r=t[1])):(t=Pt(vt(t,!1,!1),String),e=function(n,r){return!Kt(t,r)}),sr(n,e,r)}));function pr(n,t,r){return c["q"].call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function hr(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:pr(n,n.length-t)}function vr(n,t,r){return c["q"].call(n,null==t||r?1:t)}function gr(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:vr(n,Math.max(0,n.length-t))}function yr(n){return Wt(n,Boolean)}function br(n,t){return vt(n,t,!1)}var mr=a((function(n,t){return t=vt(t,!0,!0),Wt(n,(function(n){return!Kt(t,n)}))})),wr=a((function(n,t){return mr(n,t)}));function _r(n,t,r,e){d(t)||(e=r,r=t,t=!1),null!=r&&(r=zn(r,e));for(var u=[],i=[],o=0,c=L(n);o<c;o++){var a=n[o],f=r?r(a,o,n):a;t&&!r?(o&&i===f||u.push(a),i=f):r?Kt(i,f)||(i.push(f),u.push(a)):Kt(u,a)||u.push(a)}return u}var jr=a((function(n){return _r(vt(n,!0,!0))}));function xr(n){for(var t=[],r=arguments.length,e=0,u=L(n);e<u;e++){var i=n[e];if(!Kt(t,i)){var o;for(o=1;o<r;o++)if(!Kt(arguments[o],i))break;o===r&&t.push(i)}}return t}function Sr(n){for(var t=n&&Xt(n,L).length||0,r=Array(t),e=0;e<t;e++)r[e]=Ht(n,e);return r}var kr=a(Sr);function Or(n,t){for(var r={},e=0,u=L(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r}function Ar(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u}function Tr(n,t){if(null==t||t<1)return[];var r=[],e=0,u=n.length;while(e<u)r.push(c["q"].call(n,e,e+=t));return r}function Ir(n,t){return n._chain?X(t).chain():t}function Er(n){return Vt(wn(n),(function(t){var r=X[t]=n[t];X.prototype[t]=function(){var n=[this._wrapped];return c["o"].apply(n,arguments),Ir(this,r.apply(X,n))}})),X}Vt(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var t=c["a"][n];X.prototype[n]=function(){var r=this._wrapped;return null!=r&&(t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0]),Ir(this,r)}})),Vt(["concat","join","slice"],(function(n){var t=c["a"][n];X.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=t.apply(n,arguments)),Ir(this,n)}}));var Mr=X,Br=Er(e);Br._=Br;var Fr=Br,Nr="https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json",Rr={name:"Tag",components:{VueBootstrapTypeahead:function(){return r.e("chunk-44767940").then(r.bind(null,"d45f"))},VocabSelector:function(){return r.e("chunk-7b17b2f9").then(r.bind(null,"a28c"))}},created:function(){this.language=navigator.language.split("-")[0]||"en"},data:function(){return{items:[],itemSearch:"",selectedItem:null,loading:!1,conceptUri:"",tags:[],privacy:"public"}},methods:{update:function(n){console.log(n),console.log(this.tags)},save:function(){console.log(this.tags),this.tagFile=this.pod.storage+this.privacy+"/tags.ttl";var n={tagFile:this.tagFile,tags:this.tags};this.$store.dispatch("solid/addTags",n)},getItems:function(n){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var e,u,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!(n.length>0)){r.next=20;break}return t.loading=!0,e=Nr+"&language="+t.language+"&search="+n,console.log(e),r.prev=4,r.next=7,fetch(e);case 7:return u=r.sent,r.next=10,u.json();case 10:i=r.sent,console.log(i),t.items=i.search,console.log(t.items),r.next=19;break;case 16:r.prev=16,r.t0=r["catch"](4),alert(r.t0);case 19:t.loading=!1;case 20:case"end":return r.stop()}}),r,null,[[4,16]])})))()}},watch:{itemSearch:Fr.debounce((function(n){this.getItems(n)}),500),selectedItem:function(){console.log("selected",this.selectedItem.conceptUri,this.selectedItem);var n={subject:this.resourceToTag,predicate:null,object:this.selectedItem};this.tags.push(n),this.itemSearch="",console.log(this.tags)},resourceToTag:function(){null!=this.resourceToTag&&this.$bvModal.show("bv-modal-tag"),this.tags=[]},privacy:function(){this.tagFile=this.pod.storage+this.privacy+"/tags.ttl"},pod:function(){this.tagFile=this.pod.storage+this.privacy+"/tags.ttl"}},computed:{resourceToTag:{get:function(){return this.$store.state.vatch.resourceToTag},set:function(){}},pod:{get:function(){return this.$store.state.solid.pod},set:function(){}}}},qr=Rr,Dr=r("2877"),Vr=Object(Dr["a"])(qr,u,i,!1,null,null,null);t["default"]=Vr.exports}}]);
//# sourceMappingURL=chunk-d8fe2374.7b02b7fd.js.map