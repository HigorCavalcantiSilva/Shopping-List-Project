(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{f68e:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex flex-center"},[o("q-btn",{staticStyle:{width:"90%",height:"50px"},attrs:{color:"green"},on:{click:t.init_shop}},[t._v("INICIAR COMPRAS")]),o("table",{staticClass:"shadow-5",staticStyle:{width:"90%"}},[o("thead",[o("tr",[o("th",{staticStyle:{width:"5%"}},[t._v("Status")]),o("th",[t._v("Minha Lista")]),o("th")])]),o("tbody",t._l(t.list,(function(e,a){return o("tr",{key:a},[o("td",{staticStyle:{"text-align":"center"}},[o("q-btn",{attrs:{color:t.color[a],glossy:"","text-color":"white",push:"",icon:t.done[a]},on:{click:function(e){return t.stts(a)}}})],1),o("td",{staticStyle:{"text-align":"center"}},[o("q-btn",{staticStyle:{width:"100%"},attrs:{color:"blue"}},[t._v(t._s(e.name))])],1),o("td",{staticStyle:{width:"25%","text-align":"center"}},[o("q-btn",{attrs:{color:"red",glossy:"","text-color":"black",push:"",icon:"delete"},on:{click:function(o){return t.del_prod(e.id,a)}}})],1)])})),0)]),o("q-btn",{staticStyle:{width:"90%",height:"50px"},attrs:{color:"red"},on:{click:function(e){t.confirm=!0}}},[t._v("FINALIZAR COMPRA")]),o("q-dialog",{model:{value:t.icon,callback:function(e){t.icon=e},expression:"icon"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("div",{staticClass:"text-h6"},[t._v("NÃO É POSSÍVEL EFETUAR ESSA OPERAÇÃO!")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),o("q-card-section",[t._v("\n        Inicie a compra.\n      ")])],1)],1),o("q-dialog",{attrs:{persistent:""},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("q-avatar",{attrs:{icon:"shop",color:"primary","text-color":"white"}}),o("span",{staticClass:"q-ml-sm"},[t._v("Deseja Finalizar Sua Compra?")])],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Não",color:"primary"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Sim",color:"primary"},on:{click:t.finish_shop}})],1)],1)],1)],1)},r=[],c=localStorage.getItem("cart");""!==c&&null!==c&&void 0!==c||(c="[]",localStorage.setItem("cart",c));var l=localStorage.getItem("cart_color");""!==l&&null!==l&&void 0!==l||(l="[]",localStorage.setItem("cart_color",l));var s=localStorage.getItem("cart_done");""!==s&&null!==s&&void 0!==s||(s="[]",localStorage.setItem("cart_done",s));var i={name:"PageIndex",data:function(){return{color:JSON.parse(l),done:JSON.parse(s),list:JSON.parse(c),i:0,c:0,icon:!1,confirm:!1}},methods:{stts:function(t){var e,o;"1"===localStorage.getItem("init_shop")?("done"!==this.done[t]?(this.done[t]="done",this.color[t]="green",e=JSON.parse(localStorage.getItem("cart_color")),e[t]=this.color[t],localStorage.setItem("cart_color",JSON.stringify(e)),o=JSON.parse(localStorage.getItem("cart_done")),o[t]=this.done[t],localStorage.setItem("cart_done",JSON.stringify(o))):(this.done[t]="clear",this.color[t]="red",e=JSON.parse(localStorage.getItem("cart_color")),e[t]=this.color[t],localStorage.setItem("cart_color",JSON.stringify(e)),o=JSON.parse(localStorage.getItem("cart_done")),o[t]=this.done[t],localStorage.setItem("cart_done",JSON.stringify(o))),this.color=JSON.parse(localStorage.getItem("cart_color")),this.done=JSON.parse(localStorage.getItem("cart_done"))):this.icon=!0},init_shop:function(){localStorage.setItem("init_shop","1");for(var t=[],e=[],o=0;o<this.list.length;o++)t.push("red"),e.push("clear");localStorage.setItem("cart_color",JSON.stringify(t)),localStorage.setItem("cart_done",JSON.stringify(e)),this.color=JSON.parse(localStorage.getItem("cart_color")),this.done=JSON.parse(localStorage.getItem("cart_done"))},finish_shop:function(){"1"===localStorage.getItem("init_shop")?(localStorage.setItem("cart_color","[]"),localStorage.setItem("cart_done","[]"),this.color="",this.done="",localStorage.setItem("init_shop","0"),localStorage.setItem("cart",""),this.$router.go()):this.icon=!0},del_prod:function(t,e){for(this.c=0;this.c<this.list.length;this.c++)if(this.list[this.c].id===t)break;this.list.splice(this.c,1),this.done.splice(e,1),this.color.splice(e,1),localStorage.setItem("cart",JSON.stringify(this.list)),localStorage.setItem("cart_done",JSON.stringify(this.done)),localStorage.setItem("cart_color",JSON.stringify(this.color))}}},n=i,d=o("2877"),g=o("9989"),h=o("9c40"),p=o("24e8"),S=o("f09f"),m=o("a370"),u=o("2c91"),_=o("cb32"),f=o("4b7e"),I=o("7f67"),v=o("eebe"),N=o.n(v),O=Object(d["a"])(n,a,r,!1,null,null,null);e["default"]=O.exports;N()(O,"components",{QPage:g["a"],QBtn:h["a"],QDialog:p["a"],QCard:S["a"],QCardSection:m["a"],QSpace:u["a"],QAvatar:_["a"],QCardActions:f["a"]}),N()(O,"directives",{ClosePopup:I["a"]})}}]);