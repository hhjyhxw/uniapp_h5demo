(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0231":function(t,e,i){"use strict";i.r(e);var a=i("bc60"),n=i("6afa");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("77b1");var c,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"62f90388",null,!1,a["a"],c);e["default"]=r.exports},4317:function(t,e,i){var a=i("6ea1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("55732d7e",a,!0,{sourceMap:!1,shadowMode:!1})},"6afa":function(t,e,i){"use strict";i.r(e);var a=i("d2e4"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"6ea1":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-62f90388]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.logo[data-v-62f90388]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-62f90388]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-62f90388]{font-size:%?36?%;color:#8f8f94}.qcode[data-v-62f90388]{width:5rem;height:5rem;margin:1rem auto}",""])},"77b1":function(t,e,i){"use strict";var a=i("4317"),n=i.n(a);n.a},bc60:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),i("v-uni-view",{staticClass:"text-area"},[i("v-uni-text",{staticClass:"title"},[t._v("Hello:"+t._s(t.user.nickname))]),i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.hhh))])],1),i("v-uni-view",{staticClass:"text-area"},[i("v-uni-text",{staticClass:"title"},[t._v("latitude:"+t._s(t.latitude))])],1),i("v-uni-view",{staticClass:"text-area"},[i("v-uni-text",{staticClass:"title"},[t._v("longitude:"+t._s(t.longitude))])],1),i("v-uni-view",{staticClass:"text-area"},[i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sharetoWx.apply(void 0,arguments)}}},[t._v("分享")])],1),i("v-uni-view",{staticClass:"text-area"},[i("v-uni-image",{staticClass:"qcode",attrs:{src:"/static/logoss.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goqcode.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"text-area"},[i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saoyisao.apply(void 0,arguments)}}},[t._v("扫一扫")])],1)],1)},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},d2e4:function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5");var n=a(i("f499")),s={data:function(){return{title:"Hello",hhh:"aaa",activityId:"",user:{nickname:""},cacuRecord:"",verifyUser:"",accessToken:"",latitude:12,longitude:23,qcode:""}},onLoad:function(e){t.log("index_optio==="+(0,n.default)(e)),null!=e.id&&""!=e.id?(uni.setStorageSync("accessToken",e.id),uni.setStorageSync("activityId",e.activityId),this.activityId=e.activityId,this.accessToken=e.id,void 0!=e.code&&null!=e.code&&""!=e.code&&"null"!=e.code&&uni.redirectTo({url:"/pages/verify/verify?code="+e.code+"&activityId="+e.activityId})):this.activityId=uni.getStorageSync("activityId")},onShow:function(){this.getssdk(),""!=this.activityId?this.getScanindexInfo():(this.activityId=uni.getStorageSync("activityId"),this.getScanindexInfo())},methods:{getScanindexInfo:function(){var e=this;this.$api.scanIndex({activityId:this.activityId}).then(function(i){t.log("res==="+(0,n.default)(i)),0==i.code&&(e.activityId=i.activityId,e.user=i.user,e.cacuRecord=i.cacuRecord,e.verifyUser=i.verifyUser)})},goqcode:function(){var e=this;t.log("this.activityId==="+(0,n.default)(this.activityId)),this.$api.getVerifyUserCode({activityId:this.activityId}).then(function(i){t.log("getVerifyUserCode_res==="+(0,n.default)(i)),0==i.code&&uni.redirectTo({url:"/pages/websockettest/websockettest?userId="+e.user.id+"&code="+i.usercode})})},getssdk:function(){var e=this,i=window.location.href;this.$api.getjssdk({url:i}).then(function(i){t.log("res==="+(0,n.default)(i)),e.init(i,"扫码活动","扫码有机会中奖，领取后可以到指定零售店兑换奖品","http://ld.haiyunzy.com/zlbean/frontpage/activity/index","http://ld.haiyunzy.com/zlbean/htgc/images/userEnter.png")})},init:function(e,i,a,n,s){var c=this;this.$wx.config({debug:!1,appId:e.appid,timestamp:e.timeStamp,nonceStr:e.nonceStr,signature:e.sign,jsApiList:["checkJsApi","updateAppMessageShareData","updateTimelineShareData","onMenuShareQQ","onMenuShareQZone","chooseImage","scanQRCode"]}),this.$wx.ready(function(){t.log("验证通过"),c.$wx.checkJsApi({jsApiList:["chooseImage"],success:function(e){t.log("res: "+e)}}),c.$wx.updateAppMessageShareData({title:i,desc:a,link:n,imgUrl:s,success:function(t){}})}),this.$wx.error(function(e){t.log("验证失败")})},saoyisao:function(){this.$wx.scanQRCode({needResult:0,scanType:["qrCode","barCode"],success:function(t){var e=t.resultStr;this.$msg("scancode_result=="+e);var i=e.split("@@@");uni.navigateTo({url:"/pages/verify/verify?consumerId="+i[0]+"&verifyuserId="+i[1]+"&code="+i[2]})}})}}};e.default=s}).call(this,i("5a52")["default"])}}]);