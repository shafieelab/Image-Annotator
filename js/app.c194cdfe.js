(function(e){function t(t){for(var o,i,n=t[0],l=t[1],c=t[2],m=0,u=[];m<n.length;m++)i=n[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},s={app:0},r=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0106":function(e,t,a){},"034f":function(e,t,a){"use strict";var o=a("85ec"),s=a.n(o);s.a},"0f7a":function(e,t,a){},"24cf":function(e,t,a){"use strict";var o=a("0f7a"),s=a.n(o);s.a},"2cc1":function(e,t,a){"use strict";var o=a("f5ba"),s=a.n(o);s.a},"40b5":function(e,t,a){},"428c":function(e,t,a){e.exports=a.p+"img/logo_white.2f1bcc8d.png"},4625:function(e,t,a){e.exports=a.p+"img/slide_completed.652875e4.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{light:""}},[e.logged?a("v-navigation-drawer",{attrs:{app:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("div",{staticClass:"pa-2"},[a("v-btn",e._b({attrs:{block:""},on:{click:e.logout}},"v-btn",e.size,!1),[a("v-icon",e._b({attrs:{left:""}},"v-icon",e.size,!1),[e._v("mdi-export")]),e._v(" Logout ")],1)],1)]},proxy:!0}],null,!1,2736747245),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",[a("v-list-item",{attrs:{link:""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[e._v(" "+e._s(e.username)+" ")]),a("v-list-item-subtitle",[e._v("UserID : "+e._s(e.userid))])],1),a("v-list-item-action",[a("v-icon",[e._v("mdi-menu-down")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{color:"primary"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}},e._l(e.items,(function(t,o){return a("v-list-item",{key:o,attrs:{to:t.to}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)],1)],1):e._e(),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("v-btn",{attrs:{icon:"","x-large":""},on:{click:e.home}},[a("v-icon",[e._v("mdi-home")])],1),a("v-toolbar-title",[e._v(e._s(e.getTitle()))]),a("v-spacer"),null!=e.get_user?a("v-btn",e._b({on:{click:e.logout}},"v-btn",e.size,!1),[a("v-icon",e._b({attrs:{left:""}},"v-icon",e.size,!1),[e._v("mdi-export")]),e._v(" Logout ")],1):e._e()],1),a("v-main",{staticClass:"section-wrapper"},[a("transition",{attrs:{name:"router-anim"}},[a("router-view")],1)],1),a("AppFooter")],1)},r=[],i=(a("b0c0"),a("ac1f"),a("1276"),a("ade3")),n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("footer",{staticClass:"Footer",attrs:{id:"contact"}},[o("div",{staticClass:"Container Footer-container"},[o("div",{staticClass:"Container--default"},[o("a",{staticClass:"footer__logo",attrs:{"aria-label":"",href:"http://shafieelab.bwh.harvard.edu",target:"_blank"}},[o("img",{attrs:{alt:"logo",height:"39",src:a("428c"),width:"200"}})]),o("div",{staticClass:"Footer-top",attrs:{itemscope:"",itemtype:"http://schema.org/Organization"}}),o("div",{staticClass:"Footer-information"},[o("div",{staticClass:"Footer-information-left"},[o("div",{staticClass:"Footer-copyright"},[e._v(" Copyright © 2023 Shafiee Laboratory | All rights reserved ")])]),o("div",{staticClass:"Footer-information-right"})])])])])])}],c={name:"AppFooter"},d=c,m=(a("24cf"),a("2877")),u=Object(m["a"])(d,n,l,!1,null,"79047b76",null),p=u.exports,g=a("2f62");o["a"].use(g["a"]);var h=new g["a"].Store({state:{userid:null,username:null,current_slide:null,logged_in:!1},mutations:{store_user:function(e,t){e.username=t},store_userid:function(e,t){e.userid=t},store_current_slide:function(e,t){e.current_slide=t},logged_in:function(e,t){e.logged_in=t}},actions:{},getters:{},modules:{}}),v=a("a78e"),_=a.n(v),f={name:"App",components:{AppFooter:p},computed:{get_user:function(){return[h.state.userid,h.state.username]},size:function(){var e={xs:"small",sm:"small",lg:"large",xl:"x-large"}[this.$vuetify.breakpoint.name];return e?Object(i["a"])({},e,!0):{}}},created:function(){console.log("App Created"),this.username=h.state.username,this.userid=h.state.userid,this.$router.push({path:"/login"})},data:function(){return{username:null,userid:null,logged:!1,item:0,items:[{text:"Grade",icon:"mdi-folder",to:"/grade"}],clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!0,rightDrawer:!1,title:"Image Annotator",subtitle:"Home",transitionName:"slide-left"}},methods:{logout:function(){_.a.remove("logged_in"),_.a.remove("username"),_.a.remove("userid"),h.commit("store_user",null),h.commit("store_userid",null),this.$router.push({path:"/login"})},home:function(){this.$router.push({path:"/login"})},getTitle:function(){return"/grade"===this.$route.path?h.state.current_slide:this.title}},watch:{$route:function(e,t){var a=e.path.split("/").length,o=t.path.split("/").length;this.transitionName=a<o?"slide-right":"slide-left"},get_user:function(e){this.userid=e[0],this.username=e[1],null!=e&&(this.logged=!0)}}},b=f,C=(a("034f"),a("6544")),k=a.n(C),y=a("7496"),x=a("40dc"),w=a("5bc1"),A=a("8336"),T=a("ce7e"),V=a("132d"),S=a("8860"),I=a("da13"),M=a("1800"),O=a("5d23"),$=a("1baa"),j=a("34c3"),L=a("f6c4"),E=a("f774"),P=a("2fa4"),D=a("2a7f"),H=Object(m["a"])(b,s,r,!1,null,null,null),N=H.exports;k()(H,{VApp:y["a"],VAppBar:x["a"],VAppBarNavIcon:w["a"],VBtn:A["a"],VDivider:T["a"],VIcon:V["a"],VList:S["a"],VListItem:I["a"],VListItemAction:M["a"],VListItemContent:O["a"],VListItemGroup:$["a"],VListItemIcon:j["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VMain:L["a"],VNavigationDrawer:E["a"],VSpacer:P["a"],VToolbarTitle:D["a"]});var F=a("8c4f"),G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-main",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[e._v("Login form")]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""}},[a("span",[e._v("Source")])])],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"User ID",type:"text",hint:"Please note this is not User Name"},model:{value:e.userid,callback:function(t){e.userid=t},expression:"userid"}}),a("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"password",label:"Password",type:"password","persistent-hint":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:e.postPost}},[e._v("Login")]),a("v-btn",{attrs:{color:"primary"},on:{click:e.postPost1}},[e._v("Go to signup page")])],1)],1)],1)],1)],1),a("v-snackbar",{attrs:{bottom:"bottom"===e.y,left:"left"===e.x,"multi-line":"multi-line"===e.mode,right:"right"===e.x,timeout:e.timeout,top:"top"===e.y,vertical:"vertical"===e.mode},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" "),a("v-btn",{attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v(" Close ")])],1)],1),e.loading?e._e():a("span",{staticClass:"Button__Content"},[e._t("default")],2)],1)},R=[],B=a("bc3a"),q={data:function(){return{drawer:null,userid:"",password:"",loading:{type:Boolean,default:!1},snackbar:!1,y:"top",x:null,mode:"",timeout:6e3,text:"UserID or Password is Invalid, Please try again."}},props:{source:String},created:function(){var e=_.a.get("logged_in");if(e&&JSON.parse(e)){h.commit("logged_in",!0);var t=_.a.get("username"),a=_.a.get("userid");h.commit("store_user",t),h.commit("store_userid",a)}else h.commit("logged_in",!1);this.username=h.state.username,this.userid=h.state.userid,null!=this.userid&&this.$router.push({path:"/modules"})},methods:{postPost1:function(){this.$router.push({path:"/signup"})},postPost:function(){var e=this;this.loading=!0,console.log("Loading state"),console.log(this.loading);var t={username:this.userid,password:this.password};B.post(this.$backendhostname+"/login",t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(t){console.log(t.data),e.loading=!1,console.log("Loading state"),"success"===t.data.response?(console.log(e.loading),_.a.set("logged_in",!0,{expires:1}),_.a.set("userid",t.data.user,{expires:1}),_.a.set("username",t.data.usernameact,{expires:1}),h.commit("store_user",t.data.user),h.commit("store_userid",t.data.userid),e.$router.push({path:"/modules/"})):(e.text=t.data.error,e.snackbar=!0)})).catch((function(t){e.resp=t,console.error(t)}))}}},W=q,X=a("b0af"),U=a("99d9"),z=a("a523"),J=a("0e8f"),Y=a("4bd4"),K=a("a722"),Q=a("2db4"),Z=a("8654"),ee=a("71d9"),te=a("3a2f"),ae=Object(m["a"])(W,G,R,!1,null,null,null),oe=ae.exports;k()(ae,{VApp:y["a"],VBtn:A["a"],VCard:X["a"],VCardActions:U["a"],VCardText:U["b"],VContainer:z["a"],VFlex:J["a"],VForm:Y["a"],VLayout:K["a"],VMain:L["a"],VSnackbar:Q["a"],VSpacer:P["a"],VTextField:Z["a"],VToolbar:ee["a"],VToolbarTitle:D["a"],VTooltip:te["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[e._v("Signup form")]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""}},[a("span",[e._v("Source")])])],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"User Name",type:"text",hint:"Your Name","persistent-hint":"",outlined:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"User ID",type:"text",hint:"You will use to login. Please save this!","persistent-hint":"",outlined:""},model:{value:e.userid,callback:function(t){e.userid=t},expression:"userid"}}),a("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"password",label:"Password",type:"password",hint:"You will use to login. Please save this!","persistent-hint":"",outlined:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:e.postPost}},[e._v("Signup")]),a("v-btn",{attrs:{color:"primary"},on:{click:e.postPost1}},[e._v("Go to login page")])],1)],1)],1)],1)],1),a("v-snackbar",{attrs:{bottom:"bottom"===e.y,left:"left"===e.x,"multi-line":"multi-line"===e.mode,right:"right"===e.x,timeout:e.timeout,top:"top"===e.y,vertical:"vertical"===e.mode},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" "),a("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v(" Close ")])],1)],1)],1)},re=[],ie=a("bc3a"),ne={data:function(){return{drawer:null,username:"",userid:"",password:"",resp:"",loading:{type:Boolean,default:!1},snackbar:!1,y:"top",x:null,mode:"",timeout:6e3,text:"Username or Password is Invalid, Please try again."}},props:{source:String},methods:{postPost1:function(){this.$router.push({path:"/login"})},postPost:function(){var e=this,t={usernameact:this.username,username:this.userid,password:this.password};ie.post(this.$backendhostname+"/register",t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(t){e.resp=t.data.user,console.log(t.data),e.loading=!1,console.log("Loading state"),"success"===t.data.response?(console.log(e.loading),e.$router.push({path:"/login"})):(e.text=t.data.error,e.snackbar=!0)})).catch((function(t){e.resp=t,console.error(t)}))}}},le=ne,ce=a("a75b"),de=Object(m["a"])(le,se,re,!1,null,null,null),me=de.exports;k()(de,{VApp:y["a"],VBtn:A["a"],VCard:X["a"],VCardActions:U["a"],VCardText:U["b"],VContainer:z["a"],VContent:ce["a"],VFlex:J["a"],VForm:Y["a"],VLayout:K["a"],VSnackbar:Q["a"],VSpacer:P["a"],VTextField:Z["a"],VToolbar:ee["a"],VToolbarTitle:D["a"],VTooltip:te["a"]});var ue=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-container-grade"},[o("v-container",[o("v-row",[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("table",{staticStyle:{border:"1px solid black",width:"100%"}},[o("tr",[o("td",{staticStyle:{border:"1px solid black"}},[o("span",{class:e.textHeadClass},[e._v(" Module ")])]),o("td",{staticStyle:{border:"1px solid black"}},[o("span",{class:e.textHeadClass},[e._v(" EmbryoStage ")])]),o("td",{staticStyle:{border:"1px solid black"}},[o("span",{class:e.textHeadClass},[e._v(" ICM ")])]),o("td",{staticStyle:{border:"1px solid black"}},[o("span",{class:e.textHeadClass},[e._v(" Trophectoderm ")])])]),o("tr",[o("td",{staticStyle:{border:"1px solid black"}},[o("span",{class:e.textHeadClass},[e._v(" SetNo, ImageNo ")])]),o("td",{staticStyle:{border:"1px solid black"}},[o("span",{class:e.textHeadClass},[e._v(" "+e._s(e.computeSetNo(e.EmbryoStageImageCount))+", "+e._s(e.computeLocalImageNumber(e.EmbryoStageImageCount))+"/500 ")])]),o("td",{staticStyle:{border:"1px solid black"}},[o("span",{class:e.textHeadClass},[e._v(" "+e._s(e.computeSetNo(e.ICMGradeImageCount))+", "+e._s(e.computeLocalImageNumber(e.ICMGradeImageCount))+"/500 ")])]),o("td",{staticStyle:{border:"1px solid black"}},[o("span",{class:e.textHeadClass},[e._v(" "+e._s(e.computeSetNo(e.TrophectodermImageCount))+", "+e._s(e.computeLocalImageNumber(e.TrophectodermImageCount))+"/500 ")])])])])]),o("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"12"}},[o("span",{class:e.textHeadClass},[e._v(" Current Set No: "+e._s(e.computeSetNo(e.image_number))+", Image: "+e._s(e.computeLocalImageNumber(e.image_number))+"/500, Total Embryos annotated: "+e._s(e.totalAnnotated)+" ")])])],1),o("v-row",[o("v-col",{attrs:{cols:"12",md:"6",sm:"12",xs:"12"}},[o("div",{staticClass:"image-container"},[o("v-btn",{attrs:{color:"primary",icon:"","x-large":""},on:{click:function(t){return e.getPrevious()}}},[o("v-icon",{attrs:{left:""}},[e._v(" mdi-arrow-left ")])],1),e.imageLoading?o("img",{staticClass:"image-rotate",attrs:{src:a("f204"),alt:"Completed Slide"}}):e._e(),e.everything_completed?o("img",{staticClass:"image-rotate",attrs:{src:a("a767"),alt:"Completed Slide"}}):e.not_completed&&!e.imageLoading?o("img",{staticClass:"image-rotate",style:{transform:"rotate("+e.rotation+"deg)"},attrs:{src:e.raw_image,alt:"Image"}}):e._e(),e.label?o("v-btn",{attrs:{color:"primary",icon:"","x-large":""},on:{click:function(t){return e.getNext()}}},[o("v-icon",{attrs:{right:""}},[e._v(" mdi-arrow-right ")])],1):e._e()],1)]),o("v-col",{attrs:{cols:"12",md:"6",sm:"12",xs:"12"}},[o("v-card",{staticClass:"side-panel"},[o("v-row",[o("v-col",{attrs:{cols:"6",md:"6",sm:"6",xs:"6"}},[o("div",{class:e.textHeadClass},[e.EmbryoStageModule?o("span",[e._v(" Embryo Stage ")]):e._e(),e.ICMModule?o("span",[e._v(" ICM Grade ")]):e._e(),e.TrophectodermModule?o("span",[e._v(" Trophectoderm Grade ")]):e._e()])]),o("v-col",{attrs:{cols:"6"}},[o("v-card-actions",{staticClass:"justify-center"},[o("v-btn",{attrs:{color:"-1"===e.label?"primary":"error"},on:{click:e.flag}},[o("v-icon",{attrs:{left:""}},[e._v("mdi-flag")]),e._v(" Flag ")],1)],1)],1)],1),e.EmbryoStageModule?o("v-item-group",{attrs:{"selected-class":"bg-primary"}},[o("v-container",[o("v-row",e._l(e.EmbryoStageOptions,(function(t){return o("v-col",{key:t,attrs:{cols:"4",md:"4",xs:"4",sm:"4",lg:"4"}},[o("v-item",[o("v-card",{class:["d-flex align-center",{primary:e.cardClicked===t}],attrs:{dark:""},on:{click:function(a){return e.submit(t)},touchstart:function(a){return e.startTouch(t)},touchend:e.endTouch}},[o("div",{staticClass:"flex-grow-1 text-center",class:e.textClass},[e._v(" "+e._s(t)+" ")])])],1)],1)})),1)],1)],1):e._e(),e.EmbryoStageModule?o("v-divider"):e._e(),e.ICMModule?o("v-item-group",{attrs:{"selected-class":"bg-primary"}},[o("v-container",[o("v-row",e._l(e.ICMGradeOptions,(function(t){return o("v-col",{key:t,attrs:{cols:"6",md:"6",xs:"6",sm:"6",lg:"6"}},[o("v-item",[o("v-card",{class:["d-flex align-center",{primary:e.cardClicked===t}],attrs:{dark:""},on:{click:function(a){return e.submit(t)},touchstart:function(a){return e.startTouch(t)},touchend:e.endTouch}},[o("div",{staticClass:"flex-grow-1 text-center",class:e.textClass},[e._v(" "+e._s(t)+" ")])])],1)],1)})),1)],1)],1):e._e(),e.TrophectodermModule?o("v-item-group",{attrs:{"selected-class":"bg-primary"}},[o("v-container",[o("v-row",e._l(e.TrophectodermGradeOptions,(function(t){return o("v-col",{key:t,attrs:{cols:"6",md:"6",xs:"6",sm:"6",lg:"6"}},[o("v-item",[o("v-card",{class:["d-flex align-center",{primary:e.cardClicked===t}],attrs:{dark:""},on:{click:function(a){return e.submit(t)},touchstart:function(a){return e.startTouch(t)},touchend:e.endTouch}},[o("div",{staticClass:"flex-grow-1 text-center",class:e.textClass},[e._v(" "+e._s(t)+" ")])])],1)],1)})),1)],1)],1):e._e(),o("v-divider")],1)],1)],1)],1)],1)},pe=[],ge=(a("13d5"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("bc3a")),he={data:function(){return{ICMGradeOptions:["A","B","C","D","noICM"],TrophectodermGradeOptions:["A","B","C","D","noTroph"],EmbryoStageOptions:["1","2","3","4","5","6","M-A","M-B","A/D"],ICMGradeColors:{A:"dark",B:"dark",C:"dark",D:"dark",noICM:"dark"},TrophectodermGradeColors:{A:"dark",B:"dark",C:"dark",D:"dark",noTroph:"dark"},EmbryoStageColors:{1:"dark",2:"dark",3:"dark",4:"dark",5:"dark",6:"dark","M-A":"dark","M-B":"dark","A/D":"dark"},flagColor:"error",selectedICMGrade:null,selectedTrophectodermGrade:null,selectedEmbryoStage:null,loader:null,loading:!1,submit_button_disable:!0,cors:"https://cors-anywhere.herokuapp.com/",raw_image:null,label:null,imageno:"",image_name:"",image_number:"",number_of_images:"",user_id:"",everything_completed:!1,not_completed:!1,rotation:0,flag_val:!0,imageLoading:!1,EmbryoStageModule:!1,ICMModule:!1,TrophectodermModule:!1,cardClicked:null,cardClicked2:null,enableRightArrow:!1,annotation_status:null,EmbryoStageImageCount:0,ICMGradeImageCount:0,TrophectodermImageCount:0}},watch:{image_name:function(){this.image_name&&this.get_image()},loader:function(){var e=this,t=this.loader;this[t]=!this[t],setTimeout((function(){return e[t]=!1}),1e3),this.loader=null}},computed:{textClass:function(){return{"text-h4":this.$vuetify.breakpoint.smAndUp,"text-h6":this.$vuetify.breakpoint.xsOnly}},textHeadClass:function(){return{"text-h5":this.$vuetify.breakpoint.smAndUp,"text-h6":this.$vuetify.breakpoint.xsOnly}},computeSetNo:function(){return function(e){return Math.round(e/500)+1}},computeLocalImageNumber:function(){return function(e){return e%500}},totalAnnotated:function(){return Math.min(this.EmbryoStageImageCount,this.ICMGradeImageCount,this.TrophectodermImageCount)},get_user:function(){return h.state.userid},size:function(){var e={xs:"small",sm:"small",lg:"large",xl:"x-large"}[this.$vuetify.breakpoint.name];return e?Object(i["a"])({},e,!0):{}}},created:function(){this.clearForm(),this.userid=h.state.userid,this.slide_id=h.state.current_slide,this.setModules(),null==this.userid&&this.$router.push({path:"/login"}),this.username=h.state.username,this.getimagenumber(),"xs"!==this.$vuetify.breakpoint.name&&"sm"!==this.$vuetify.breakpoint.name||(this.rotation-=0)},rotateRight:function(){},methods:{getButtonColor:function(){return-1===this.label?"primary":"error"},startTouch:function(e){this.cardClicked=e},endTouch:function(){this.cardClicked=null},clearForm:function(){this.selectedICMGrade=null,this.selectedTrophectodermGrade=null,this.selectedEmbryoStage=null,this.submit_button_disable=!0,this.flag_val=!1,this.label=null},setModules:function(){this.slide_id=h.state.current_slide,"EmbryoStage"===this.slide_id?(this.EmbryoStageModule=!0,this.ICMModule=!1,this.TrophectodermModule=!1):"ICM"===this.slide_id?(this.EmbryoStageModule=!1,this.ICMModule=!0,this.TrophectodermModule=!1):"Trophectoderm"===this.slide_id?(this.EmbryoStageModule=!1,this.ICMModule=!1,this.TrophectodermModule=!0):(this.EmbryoStageModule=!1,this.ICMModule=!1,this.TrophectodermModule=!1)},flag:function(){this.flag_val=!0,this.submit("-1")},submit:function(e){var t=this;this.loader="loading",this.loading=!this.submit_button_disable;var a="";this.flag_val&&(e="-1",a="unable to annotate"),console.log(e);var o={username:this.userid,modulename:this.slide_id,image_name:this.image_name,label:e,comment:a},s=this.$backendhostname+"/give_label";ge.post(s,o,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){e.data.response&&(t.raw_image="",t.getimagenumber(),t.clearForm())})).catch((function(e){t.resp=e,console.error(e),t.clearForm()}))},getPrevious:function(){var e=this,t={username:this.userid,modulename:this.slide_id,image_name:this.image_name},a=this.$backendhostname+"/get_previous";ge.post(a,t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(t){"success"===t.data.response&&(e.label=t.data.label,e.cardClicked=e.label,"-1"===e.label&&(e.flagColor="primary"),e.image_name=t.data.image_name,e.image_number=t.data.image_number,e.number_of_images=t.data.number_of_images)})).catch((function(t){e.resp=t,console.error(t),e.clearForm()}))},getNext:function(){var e=this,t={username:this.userid,modulename:this.slide_id,image_name:this.image_name},a=this.$backendhostname+"/get_next";ge.post(a,t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(t){"success"===t.data.response&&(e.label=t.data.label,e.cardClicked=e.label,"-1"===e.label&&(e.flagColor="primary"),e.image_name=t.data.image_name,e.image_number=t.data.image_number,e.number_of_images=t.data.number_of_images)})).catch((function(t){e.resp=t,console.error(t),e.clearForm()}))},getimagenumber:function(){var e=this;this.imageLoading=!0;var t={username:this.userid,modulename:this.slide_id},a=this.$backendhostname+"/get_image_number";ge.post(a,t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(t){if("success"===t.data.response){if(e.not_completed=!0,e.batch_completed=!1,e.everything_completed=!1,e.image_name=t.data.image_name,e.image_number=t.data.image_number,e.number_of_images=t.data.number_of_images,e.imageLoading=!1,e.annotation_status=t.data.annotation_status,e.annotation_status)for(var a in e.annotation_status){var o=e.annotation_status[a];"EmbryoStage"===a?e.EmbryoStageImageCount=o:"ICM"===a?e.ICMGradeImageCount=o:"Trophectoderm"===a&&(e.TrophectodermImageCount=o)}return t.data.image_name}"completed"===t.data.response&&(e.batch_completed=!1,e.not_completed=!1,e.everything_completed=!0)})).catch((function(t){e.resp=t,console.error(t),e.imageLoading=!1}))},get_image:function(){var e=this;this.imageLoading=!0;var t={image_name:this.image_name},a=this.$backendhostname+"/get_image";ge.post(a,t,{responseType:"arraybuffer",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(t){e.raw_image=e._imageEncode(t.data),e.imageLoading=!1})).catch((function(t){e.resp=t,console.error(t),e.imageLoading=!1}))},_imageEncode:function(e){var t=btoa([].reduce.call(new Uint8Array(e),(function(e,t){return e+String.fromCharCode(t)}),"")),a="image/png";return"data:"+a+";base64,"+t}}},ve=he,_e=(a("2cc1"),a("62ad")),fe=a("d903"),be=a("604c"),Ce=a("0fd9"),ke=Object(m["a"])(ve,ue,pe,!1,null,"033b55e0",null),ye=ke.exports;k()(ke,{VBtn:A["a"],VCard:X["a"],VCardActions:U["a"],VCol:_e["a"],VContainer:z["a"],VDivider:T["a"],VIcon:V["a"],VItem:fe["a"],VItemGroup:be["b"],VRow:Ce["a"]});var xe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-layout",{staticClass:"temp",attrs:{row:""}},[o("v-flex",{attrs:{md6:"",sm6:"",xs12:""}},[e.batch_completed?o("img",{staticClass:"image",attrs:{src:a("4625"),"aspect-ratio":1,alt:""}}):e._e(),e.everything_completed?o("img",{staticClass:"image",staticStyle:{width:"100%"},attrs:{src:a("4625"),"aspect-ratio":1,alt:""}}):e._e(),e.not_completed?o("img",{staticClass:"image",style:"transform: rotate("+e.rotation+"deg);",attrs:{src:e.sperm_image,alt:"",contain:""}}):e._e(),e._v(" "+e._s(e.slide_id)+" "+e._s(e.user_id)+" ")]),o("v-flex",{staticClass:"ann_class",attrs:{md6:"",sm6:"",xs12:""}},[o("v-container",{staticClass:"grey lighten-5 pa-3 "},[o("v-divider"),o("v-divider"),o("v-row",{staticClass:"pa-1",attrs:{"align-content":"center",align:"center"}},[o("v-col",{staticClass:"pa-1",attrs:{align:"center","offset-md":"4"}},[o("v-checkbox",{staticClass:"justify-center grey lighten-5",attrs:{label:"Normal Sperm",value:e.models["Normal Sperm"]},model:{value:e.toggle_normal_sperm,callback:function(t){e.toggle_normal_sperm=t},expression:"toggle_normal_sperm"}})],1)],1),o("v-divider"),o("v-divider"),o("v-row",{staticClass:"pa-0"},[o("v-col",{staticClass:"pa-0",attrs:{"offset-md":"1"}},[o("v-checkbox",{attrs:{label:"Proximal Droplets",value:e.models["Proximal Droplets"]},model:{value:e.check_model,callback:function(t){e.check_model=t},expression:"check_model"}})],1),o("v-col",{staticClass:"pa-0"},[o("v-checkbox",{attrs:{label:"Distal Droplets",value:e.models["Distal Droplets"]},model:{value:e.check_model,callback:function(t){e.check_model=t},expression:"check_model"}})],1)],1),o("v-row",{staticClass:"pa-0"},[o("v-col",{staticClass:"pa-0 ",attrs:{"offset-md":"1"}},[o("v-checkbox",{attrs:{label:"Distal Mid-Piece Reflex",value:e.models["Distal Mid-Piece Reflex"]},model:{value:e.check_model,callback:function(t){e.check_model=t},expression:"check_model"}})],1),o("v-col",{staticClass:"pa-0"},[o("v-checkbox",{attrs:{label:"Clumped Sperm",value:e.models["Clumped Sperm"]},model:{value:e.check_model,callback:function(t){e.check_model=t},expression:"check_model"}})],1)],1),o("v-divider"),o("v-divider"),o("v-row",{staticClass:"pa-0"},[o("v-col",{staticClass:"pa-0",attrs:{"offset-md":"1"}},e._l(e.Headitems,(function(t){return o("v-list",{key:t.title,staticClass:"justify-center grey lighten-5",attrs:{align:"center"}},[o("v-list-item-content",{staticClass:"justify-center"},[o("b",[e._v(e._s(t.title))])]),e._l(t.items,(function(t){return o("v-list-item",{key:t.title},[o("v-checkbox",{staticClass:"pa-0",attrs:{label:t.title,value:e.models[t.title]},model:{value:e.check_model,callback:function(t){e.check_model=t},expression:"check_model"}})],1)}))],2)})),1),o("v-divider",{attrs:{vertical:""}}),o("v-divider",{attrs:{vertical:""}}),o("v-col",{attrs:{align:"center"}},e._l(e.Tailitems,(function(t){return o("v-list",{key:t.title,staticClass:"justify-center grey lighten-5"},[o("v-list-item-content",{staticClass:"justify-center"},[o("b",[e._v(e._s(t.title))])]),e._l(t.items,(function(t){return o("v-list-item",{key:t.title,attrs:{align:"center"}},[o("v-checkbox",{attrs:{align:"center",label:t.title,value:e.models[t.title]},model:{value:e.check_model,callback:function(t){e.check_model=t},expression:"check_model"}})],1)}))],2)})),1)],1),o("v-divider"),o("v-divider"),o("v-row",{staticClass:"pa-1"},[o("v-col",{staticClass:"pa-1",attrs:{"offset-md":"4"}},[o("v-checkbox",{staticClass:"pa-1",attrs:{label:"Other Abnormalities",value:e.models["Other Abnormalities"]},model:{value:e.check_model,callback:function(t){e.check_model=t},expression:"check_model"}})],1)],1),o("v-divider"),o("v-divider"),o("v-row",[o("v-col",{attrs:{align:"center"}},[o("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",loading:e.loading,disabled:e.submit_button_disable,color:"primary"},on:{click:function(t){return e.submit()}},scopedSlots:e._u([{key:"loader",fn:function(){return[o("span",{staticClass:"custom-loader"},[o("v-icon",{attrs:{light:""}},[e._v("mdi-cached")])],1)]},proxy:!0}])},[e._v(" SUBMIT ")])],1)],1)],1)],1)],1)],1)},we=[],Ae=(a("25f0"),a("5319"),a("bc3a")),Te={data:function(){return{loader:null,loading:!1,toggle_normal_sperm:null,submit_button_disable:!0,toggle_sperm:!1,cors:"https://cors-anywhere.herokuapp.com/",sperm_image:null,models:{"Head Abnormalities":"head_abnormalities","Normal Sperm":"normal_sperm","Abnormal Sperm":"abnormal_sperm","Proximal Droplets":"proximal_droplets","Distal Droplets":"distal_droplets","Distal Mid-Piece Reflex":"distal_mid_piece_reflex","Head abnormalities":"head_abnormalities",Macrohead:"macrohead",Microhead:"microhead","Missing head":"missing_head","Double head":"double_head","Tail Abnormalities":"tail_abnormalities","Coiled tail":"coiled_tail","Missing tail":"missing_tail","Bent tail":"bent_tail","Clumped Sperm":"clumped_sperm","Other Abnormalities":"other_abnormalities"},check_model:[],Active:["chuck","Normal Sperm","Head Defect","Neck Defect","Tail Defect","Other Defects","Other cells","Not sperm/cannot label"],label:"",imageno:"",image_name:"",slide_id:"",user_id:"",batch_completed:!1,everything_completed:!1,not_completed:!1,rotation:0,Headitems:[{action:"mdi-ticket",items:[{title:"Macrohead"},{title:"Microhead"},{title:"Missing head"},{title:"Double head"}],title:"Head Abnormalities"}],Tailitems:[{action:"mdi-ticket",items:[{title:"Coiled tail"},{title:"Missing tail"},{title:"Bent tail"}],title:"Tail Abnormalities"}]}},watch:{toggle_normal_sperm:function(){"normal_sperm"===this.toggle_normal_sperm&&(this.check_model=[]),this.submit_button_disable=null===this.toggle_normal_sperm&&0===this.check_model.length},image_name:function(){this.image_name&&this.get_image()},check_model:function(){0!==this.check_model.length&&(this.toggle_normal_sperm=null),this.submit_button_disable=null===this.toggle_normal_sperm&&0===this.check_model.length},loader:function(){var e=this,t=this.loader;this[t]=!this[t],setTimeout((function(){return e[t]=!1}),3e3),this.loader=null}},computed:{get_user:function(){return h.state.userid},size:function(){var e={xs:"small",sm:"small",lg:"large",xl:"x-large"}[this.$vuetify.breakpoint.name];return e?Object(i["a"])({},e,!0):{}}},created:function(){this.slide_id=h.state.current_slide,this.userid=h.state.userid,this.username=h.state.username,this.getimagenumber(),"xs"!==this.$vuetify.breakpoint.name&&"sm"!==this.$vuetify.breakpoint.name||(this.rotation-=0),this.submit_button_disable=null===this.toggle_normal_sperm&&0===this.check_model.length},rotateRight:function(){},methods:{get_model:function(e){return e.toLowerCase().replace(" ","_")},reset_ann:function(){this.toggle_normal_sperm=null,this.check_model=[]},submit:function(){var e,t=this;this.loader="loading",this.loading=!this.submit_button_disable,e="normal_sperm"===this.toggle_normal_sperm?"normal_sperm":this.check_model.toString();var a={username:this.userid,image_name:this.image_name,label:e,comment:""},o=this.$backendhostname+"/give_label";Ae.post(o,a,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){e.data.response&&(t.sperm_image="",t.image_name=t.getimagenumber(),t.reset_ann())})).catch((function(e){t.resp=e,console.error(e)}))},give_label:function(e){var t=this,a={username:this.userid,image_name:this.image_name,label:e-1,comment:""},o=this.$backendhostname+"/give_label";Ae.post(o,a,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(e){e.data.response&&(t.sperm_image="",t.image_name=t.getimagenumber())})).catch((function(e){t.resp=e,console.error(e)}))},getimagenumber:function(){var e=this,t={username:this.userid,modulename:this.slide_id},a=this.$backendhostname+"/get_image_number";Ae.post(a,t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(t){if("success"===t.data.response)return e.not_completed=!0,e.batch_completed=!1,e.everything_completed=!1,e.image_name=t.data.image_name,t.data.image_name;"slide_completed"===t.data.response?(e.not_completed=!1,e.batch_completed=!0,e.everything_completed=!1):"completed"===t.data.response&&(e.batch_completed=!1,e.not_completed=!1,e.everything_completed=!0)})).catch((function(t){e.resp=t,console.error(t)}))},get_image:function(){var e=this,t={image_name:this.image_name},a=this.$backendhostname+"/get_image";Ae.post(a,t,{responseType:"arraybuffer",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(t){e.sperm_image=e._imageEncode(t.data)})).catch((function(t){e.resp=t,console.error(t)}))},_imageEncode:function(e){var t=btoa([].reduce.call(new Uint8Array(e),(function(e,t){return e+String.fromCharCode(t)}),"")),a="image/png";return"data:"+a+";base64,"+t}}},Ve=Te,Se=(a("5c04"),a("ac7c")),Ie=Object(m["a"])(Ve,xe,we,!1,null,null,null),Me=Ie.exports;k()(Ie,{VBtn:A["a"],VCheckbox:Se["a"],VCol:_e["a"],VContainer:z["a"],VDivider:T["a"],VFlex:J["a"],VIcon:V["a"],VLayout:K["a"],VList:S["a"],VListItem:I["a"],VListItemContent:O["a"],VRow:Ce["a"]});var Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},e._l(e.Active,(function(t){return a("v-flex",{key:t},[a("v-item",[a("v-hover",{attrs:{"open-delay":"200"}},[a("v-card",{staticClass:"d-flex align-center card-custom",attrs:{color:"primary",dark:""},on:{click:function(a){return e.give_label(t)}}},[a("v-card-title",[a("v-list-item",{staticClass:"grow"},[a("v-card-text",{staticClass:"text-center font-weight-bold"},[a("span",{staticClass:"headline font-weight-bold"},[e._v(e._s(t))])])],1)],1)],1)],1)],1)],1)})),1)],1)],1)},$e=[],je=a("bc3a"),Le={data:function(){return{cors:"https://cors-anywhere.herokuapp.com/",sperm_image:null,userid:"",Active:["EmbryoStage","ICM","Trophectoderm"],label:"",imageno:"",image_name:"",current_slide:""}},computed:{size:function(){var e={xs:"x-small",sm:"small",lg:"large",xl:"x-large"}[this.$vuetify.breakpoint.name];return e?Object(i["a"])({},e,!0):{}},get_user:function(){return h.state.userid}},watch:{},created:function(){this.userid=h.state.userid,null==this.userid&&this.$router.push({path:"/login"})},methods:{give_modules:function(){var e=this,t=this.$backendhostname+"/getmodules";je.post(t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}}).then((function(t){e.Active=t.data.modules.split(";")})).catch((function(t){e.resp=t,console.error(t)}))},give_label:function(e){this.current_slide=e,h.commit("store_current_slide",this.current_slide),this.$router.push({path:"/grade"})}}},Ee=Le,Pe=(a("b089"),a("75ae"),a("ce87")),De=Object(m["a"])(Ee,Oe,$e,!1,null,"5c28ab2d",null),He=De.exports;k()(De,{VCard:X["a"],VCardText:U["b"],VCardTitle:U["c"],VContainer:z["a"],VFlex:J["a"],VHover:Pe["a"],VItem:fe["a"],VLayout:K["a"],VListItem:I["a"]}),o["a"].use(F["a"]);var Ne=[{path:"/login",name:"Login",component:oe},{path:"/signup",name:"Signup",component:me},{path:"/grade",name:"Grade Image",component:ye},{path:"/modules",name:"Modules",component:He},{path:"/label",name:"Grade Image",component:Me}],Fe=new F["a"]({mode:"history",base:"/",routes:Ne}),Ge=Fe,Re=a("f309"),Be=a("c0a4"),qe=a.n(Be);o["a"].use(Re["a"],{theme:{primary:qe.a.blue.darken2,accent:qe.a.grey.darken3,secondary:qe.a.amber.darken3,info:qe.a.teal.lighten1,warning:qe.a.amber.base,error:qe.a.deepOrange.accent4,success:qe.a.green.accent3},icons:{iconfont:"md"}});var We=new Re["a"]({});a("d1e78");function Xe(){var e=_.a.get("logged_in");if(e&&JSON.parse(e)){h.commit("logged_in",!0);var t=_.a.get("username"),a=_.a.get("userid");h.commit("store_user",t),h.commit("store_userid",a)}else h.commit("logged_in",!1)}function Ue(){}var ze=a("bc3a"),Je=a.n(ze);Je.a.interceptors.response.use((function(e){return Xe(),e})),Ue(),o["a"].config.productionTip=!0,o["a"].prototype.$backendhostname=o["a"].config.productionTip?"https://backend.annotator.shafieelab.org":"http://127.0.0.1:8000",Je.a.get(o["a"].prototype.$backendhostname+"/index",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});var Ye=new o["a"]({store:h,router:Ge,vuetify:We,render:function(e){return e(N)}});Ye.$mount("#app")},"5c04":function(e,t,a){"use strict";var o=a("40b5"),s=a.n(o);s.a},"75ae":function(e,t,a){"use strict";var o=a("0106"),s=a.n(o);s.a},"85ec":function(e,t,a){},a767:function(e,t,a){e.exports=a.p+"img/completed_mark.652875e4.png"},b089:function(e,t,a){"use strict";var o=a("f427"),s=a.n(o);s.a},f204:function(e,t,a){e.exports=a.p+"img/placeholder.6c5ae416.gif"},f427:function(e,t,a){},f5ba:function(e,t,a){}});
//# sourceMappingURL=app.c194cdfe.js.map