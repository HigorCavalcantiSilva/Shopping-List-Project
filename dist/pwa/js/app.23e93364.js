(function(e){function n(n){for(var r,u,i=n[0],c=n[1],s=n[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(n);while(p.length)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={1:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{2:"00db16ae",3:"8ea2f12a",4:"8ff8df68",5:"79dba527",6:"2cd3db2a",7:"3f3d941f"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(n){c.onerror=c.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var f=0;f<c.length;f++)n(c[f]);var l=s;a.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("a34a"),o=t.n(r),a=(t("96cf"),t("c973")),u=t.n(a),i=(t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("2b0e")),c=t("1f91"),s=t("42d2"),f=t("b05d");i["a"].use(f["a"],{config:{},lang:c["a"],iconSet:s["a"]});var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},p=[],d={name:"App"},h=d,b=t("2877"),v=Object(b["a"])(h,l,p,!1,null,null,null),m=v.exports,y=t("2f62");i["a"].use(y["a"]);var w=function(){var e=new y["a"].Store({modules:{},strict:!1});return e},g=t("8c4f"),P=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"713b"))},children:[{path:"/",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"8b24"))},meta:"Shopping List"},{path:"list",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"e00c"))},meta:"Seções"},{path:"cart",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"f68e"))},meta:"Carrinho"},{path:"products",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"6eb0"))},meta:"Produtos"}]}];P.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"e51e"))}});var x=P;i["a"].use(g["a"]);var j=function(){var e=new g["a"]({history:!0,scrollBehavior:function(){return{x:0,y:0}},routes:x,mode:"hash",base:""});return e},O=function(){return k.apply(this,arguments)};function k(){return k=u()(o.a.mark((function e(){var n,t,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof w){e.next=6;break}return e.next=3,w({Vue:i["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=w;case 7:if(n=e.t0,"function"!==typeof j){e.next=14;break}return e.next=11,j({Vue:i["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=j;case 15:return t=e.t1,n.$router=t,r={router:t,store:n,render:function(e){return e(m)}},r.el="#q-app",e.abrupt("return",{app:r,store:n,router:t});case 20:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}var S=t("9483");function _(){return M.apply(this,arguments)}function M(){return M=u()(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:n=e.sent,t=n.app,n.store,n.router,new i["a"](t);case 7:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}Object(S["a"])("service-worker.js",{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e(0).then(t.t.bind(null,"a0db",7)),_()},"31cd":function(e,n,t){}});