webpackJsonp([1],{FhoZ:function(t,e,n){"use strict";(function(e){const a=n("o/zv");t.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},host:"localhost",port:8080,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,useEslint:!1,showEslintErrorsInOverlay:!1,devtool:"cheap-module-eval-source-map",cacheBusting:!0,cssSourceMap:!0},build:{index:a.resolve(e,"../dist/index.html"),assetsRoot:a.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report},API_ENDPOINT:"https://scavenger-hunt-app.azurewebsites.net/"}}).call(e,"/")},M9pE:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"app",data:function(){return{captures:[]}}},s,!1,function(t){n("ekzv")},null,null).exports,r=n("/ocq"),o=n("Xxa5"),c=n.n(o),u=n("exGp"),d=n.n(u),m={name:"ItemView",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{captures:[],currentItem:this.$store.state.items[this.item.name]}},mounted:function(){var t=this;return d()(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.video=t.$refs.video,!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){e.next=4;break}return e.next=4,navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){t.video.srcObject=e,t.video.play()}).catch(function(t){return console.debug(t)});case 4:case"end":return e.stop()}},e,t)}))()},methods:{capture:function(){var t=this.$refs.canvas,e=this.$refs.video;t.getContext("2d").drawImage(e,0,0,640,480);this.captures.push(t.toDataURL("image/png"));var n={};n.captures=this.captures,n.name=this.currentItem.name,this.$store.dispatch("newImage",n)}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("h1",[t._v(t._s(t.item.name)+" Check")]),t._v(" "),n("div",[n("video",{ref:"video",attrs:{id:"video",width:"640",height:"480",autoplay:"",muted:"muted"},domProps:{muted:!0}})]),t._v(" "),n("div",[n("button",{attrs:{id:"snap"},on:{click:function(e){return t.capture()}}},[t._v("Snap Photo")])]),t._v(" "),n("div",{class:{hidden:!t.currentItem.checked},attrs:{id:"finish"}},[t._v("Great!! Image has been recognized")]),t._v(" "),n("ul",t._l(t.captures,function(t){return n("li",{key:t.id},[n("img",{attrs:{src:t,height:"50"}})])}),0),t._v(" "),n("canvas",{ref:"canvas",attrs:{id:"canvas",width:"640",height:"480"}})])},staticRenderFns:[]};var h=n("VU/8")(m,p,!1,function(t){n("M9pE")},null,null).exports,l={name:"ListView",data:function(){return{items:{},isItem2:!0}},mounted:function(){var t=this;this.$store.state.init&&this.$store.dispatch("getList").then(function(e){t.items=t.$store.state.items,t.$store.state.init=!1}),this.items=this.$store.state.items,console.log(this.items)},methods:{Item1:function(t){var e={name:t.name};this.$router.push({name:"item1",params:{item:e}})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},t._l(t.items,function(e){return n("li",[n("button",{staticClass:"block",class:{checked:e.checked},attrs:{disabled:e.checked},on:{click:function(n){return n.preventDefault(),t.Item1(e)}}},[t._v(t._s(e.name))])])}),0)},staticRenderFns:[]};var f=n("VU/8")(l,v,!1,function(t){n("ZmQs")},null,null).exports;a.a.use(r.a);var _=new r.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",name:"list",component:f},{path:"/item1",name:"item1",props:!0,component:h}]}),b=n("BO1k"),g=n.n(b),k=n("NYxO"),I=n("mtWM"),E=n.n(I),w=n("FhoZ");a.a.use(k.a);var y=new k.a.Store({state:{items:{},basicToken:!1,init:!0},mutations:{submitBasicToken:function(t,e){t.basicToken="basic "+e},updateList:function(t,e){var n={},a=!0,s=!1,i=void 0;try{for(var r,o=g()(e);!(a=(r=o.next()).done);a=!0){var c=r.value;n[c]={},n[c].name=c,n[c].checked=!1}}catch(t){s=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(s)throw i}}t.items=n},updateIsItem:function(t,e){t.items[e.name].checked=e.isChecked}},actions:{newImage:function(t,e){var n=t.commit;t.state;return E()({method:"POST",url:w.API_ENDPOINT+"/api/send",data:{data:[e.captures,e.name]}}).then(function(t){var a={};a.isChecked=t.data,a.name=e.name,n("updateIsItem",a)}).catch(function(t){console.log(t)})},getList:function(t){var e=t.commit,n=t.state;return E()({method:"GET",url:w.API_ENDPOINT+"/api/getList",headers:{authorization:n.basicToken}}).then(function(t){e("updateList",t.data)})}}}),O=n("IZMb"),x=n.n(O);a.a.use(x.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:_,store:y,components:{App:i},template:"<App/>"})},ZmQs:function(t,e){},ekzv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.58383314e8c914f49413.js.map