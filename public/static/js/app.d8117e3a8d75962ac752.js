webpackJsonp([1],{FhoZ:function(e,t,n){"use strict";(function(t){const r=n("o/zv");e.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},host:"localhost",port:8081,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,useEslint:!1,showEslintErrorsInOverlay:!1,devtool:"cheap-module-eval-source-map",cacheBusting:!0,cssSourceMap:!0},build:{index:r.resolve(t,"../dist/index.html"),assetsRoot:r.resolve(t,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report},API_ENDPOINT:"https://scavenger-hunt-webapp.azurewebsites.net/"}}).call(t,"/")},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"app",data:function(){return{captures:[]}}},i,!1,function(e){n("ekzv")},null,null).exports,s=n("/ocq"),o=n("Xxa5"),c=n.n(o),u=n("BO1k"),d=n.n(u),p=n("exGp"),m=n.n(p),v={name:"ItemView",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{captures:[],currentItem:this.$store.state.items[this.item.name]}},mounted:function(){var e=this;return m()(c.a.mark(function t(){var n,r,i,a,s,o,u,p,m;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.video=e.$refs.video,t.next=3,navigator.mediaDevices.enumerateDevices();case 3:for(n=t.sent,console.log(n[0].kind),r=[],i=!0,a=!1,s=void 0,t.prev=9,o=d()(n);!(i=(u=o.next()).done);i=!0)"videoinput"===(p=u.value).kind&&r.push(p.kind);t.next=17;break;case 13:t.prev=13,t.t0=t.catch(9),a=!0,s=t.t0;case 17:t.prev=17,t.prev=18,!i&&o.return&&o.return();case 20:if(t.prev=20,!a){t.next=23;break}throw s;case 23:return t.finish(20);case 24:return t.finish(17);case 25:if(m="environment",1==r.length&&(m="user"),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t.next=30;break}return t.next=30,navigator.mediaDevices.getUserMedia({video:{facingMode:m}}).then(function(t){e.video.srcObject=t,e.video.play()}).catch(function(e){return console.debug(e)});case 30:case"end":return t.stop()}},t,e,[[9,13,17,25],[18,,20,24]])}))()},methods:{capture:function(){var e=this.$refs.canvas,t=this.$refs.video;e.getContext("2d").drawImage(t,0,0,640,480);this.captures.push(e.toDataURL("image/png"));var n={};n.captures=this.captures,n.name=this.currentItem.name,this.$store.dispatch("newImage",n)},returnToList:function(){this.$router.push({name:"list"})}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("h1",[e._v(e._s(e.item.name)+" Check")]),e._v(" "),n("div",[n("video",{ref:"video",attrs:{id:"video",width:"640",height:"480",autoplay:"",muted:"muted"},domProps:{muted:!0}})]),e._v(" "),n("div",[n("button",{attrs:{id:"snap",disabled:e.currentItem.checked},on:{click:function(t){return e.capture()}}},[e._v("Snap Photo")])]),e._v(" "),n("div",{class:{hidden:!e.currentItem.checked},attrs:{id:"finish"},on:{click:function(t){return e.returnToList()}}},[n("p",[e._v("Great!! Image has been recognized.")]),e._v(" "),n("p",[e._v("Return to List.")])]),e._v(" "),n("ul",e._l(e.captures,function(e){return n("li",{key:e.id},[n("img",{attrs:{src:e,height:"50"}})])}),0),e._v(" "),n("canvas",{ref:"canvas",attrs:{id:"canvas",width:"640",height:"480"}})])},staticRenderFns:[]};var l=n("VU/8")(v,h,!1,function(e){n("uccz")},null,null).exports,f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"list"}},e._l(e.items,function(t){return n("li",[n("button",{staticClass:"block",class:{checked:t.checked},attrs:{disabled:t.checked},on:{click:function(n){return n.preventDefault(),e.Item1(t)}}},[e._v(e._s(t.name))])])}),0)},staticRenderFns:[]};var b=n("VU/8")({name:"ListView",data:function(){return{items:this.$store.state.items,isItem2:!0}},mounted:function(){var e=this;this.$store.state.init&&this.$store.dispatch("getList").then(function(t){e.items=e.$store.state.items,e.$store.state.init=!1})},methods:{Item1:function(e){var t={name:e.name};this.$router.push({name:"item1",params:{item:t}})}}},f,!1,function(e){n("zB9q")},null,null).exports;r.a.use(s.a);var _=new s.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",name:"list",component:b},{path:"/item1",name:"item1",props:!0,component:l}]}),g=n("NYxO"),k=n("mtWM"),I=n.n(k),w=n("FhoZ");r.a.use(g.a);var x=new g.a.Store({state:{items:{},basicToken:!1,init:!0},mutations:{submitBasicToken:function(e,t){e.basicToken="basic "+t},updateList:function(e,t){var n={},r=!0,i=!1,a=void 0;try{for(var s,o=d()(t);!(r=(s=o.next()).done);r=!0){var c=s.value;n[c]={},n[c].name=c,n[c].checked=!1}}catch(e){i=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(i)throw a}}e.items=n},updateIsItem:function(e,t){e.items[t.name].checked=t.isChecked}},actions:{newImage:function(e,t){var n=e.commit;e.state;return I()({method:"POST",url:w.API_ENDPOINT+"/api/send",data:{data:[t.captures,t.name]}}).then(function(e){var r={};r.isChecked=e.data,r.name=t.name,n("updateIsItem",r)}).catch(function(e){console.log(e)})},getList:function(e){var t=e.commit,n=e.state;return I()({method:"GET",url:w.API_ENDPOINT+"/api/getList",headers:{authorization:n.basicToken}}).then(function(e){t("updateList",e.data)})}}}),y=n("IZMb"),E=n.n(y);r.a.use(E.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:_,store:x,components:{App:a},template:"<App/>"})},ekzv:function(e,t){},uccz:function(e,t){},zB9q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d8117e3a8d75962ac752.js.map