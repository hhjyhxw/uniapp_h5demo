(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0231":function(t,e,n){"use strict";n.r(e);var r=n("d88c"),i=n("6afa");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("4845");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"65fddfb2",null,!1,r["a"],a);e["default"]=s.exports},2153:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-65fddfb2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.logo[data-v-65fddfb2]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-65fddfb2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-65fddfb2]{font-size:%?36?%;color:#8f8f94}.qcode[data-v-65fddfb2]{width:5rem;height:5rem;margin:1rem auto}",""])},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var r=n("795b"),i=n.n(r);function o(t,e,n,r,o,a,c){try{var s=t[a](c),u=s.value}catch(l){return void n(l)}s.done?e(u):i.a.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new i.a(function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,s,"next",t)}function s(t){o(a,r,i,c,s,"throw",t)}c(void 0)})}}},4845:function(t,e,n){"use strict";var r=n("4b63"),i=n.n(r);i.a},"4b63":function(t,e,n){var r=n("2153");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("e8e3c58a",r,!0,{sourceMap:!1,shadowMode:!1})},"6afa":function(t,e,n){"use strict";n.r(e);var r=n("d2e4"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=x;var f="suspendedStart",d="suspendedYield",h="executing",v="completed",p={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(T([])));w&&w!==r&&i.call(w,a)&&(y=w);var m=L.prototype=k.prototype=Object.create(y);_.prototype=m.constructor=L,L.constructor=_,L[s]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},E(I.prototype),I.prototype[c]=function(){return this},l.AsyncIterator=I,l.async=function(t,e,n,r){var i=new I(x(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(m),m[s]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function x(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=S(t,n,a),o}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function _(){}function L(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function I(t){function e(n,r,o,a){var c=b(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,a)})}a(c.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function S(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return R()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=b(t,e,n);if("normal"===s.type){if(r=n.done?v:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},d2e4:function(t,e,n){"use strict";(function(t){var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("28a5"),n("96cf");var i=r(n("3b8d")),o=r(n("f499")),a={data:function(){return{title:"Hello",hhh:"aaa",activityId:"",user:null,cacuRecord:"",verifyUser:"",accessToken:"",latitude:12,longitude:23,qcode:""}},onLoad:function(e){t.log("index_optio==="+(0,o.default)(e)),this.activityId=e.activityId,this.accessToken=e.id,null!=e.id&&""!=e.id?(uni.setStorageSync("accessToken",e.id),uni.setStorageSync("activityId",e.activityId),void 0!=e.code&&null!=e.code&&""!=e.code&&"null"!=e.code&&uni.navigateTo({url:"/pages/verify/verify?code="+e.code}),this.getScanindexInfo()):(this.activityId=uni.getStorageSync("activityId"),this.getScanindexInfo())},onShow:function(){this.getssdk()},methods:{getScanindexInfo:function(){var e=this;this.$api.scanIndex({configId:this.activityId}).then(function(n){t.log("res==="+(0,o.default)(n)),0==n.code&&(e.activityId=n.activityId,e.user=n.user,e.cacuRecord=n.cacuRecord,e.verifyUser=n.verifyUser)})},goqcode:function(){var e=(0,i.default)(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.getVerifyUserCode({activityId:this.activityId});case 2:n=e.sent,t.log("goqcode_result==="+(0,o.default)(n)),0==n.code&&uni.navigateTo({url:"/pages/websockettest/websockettest?userId="+this.user.id+"&code="+n.code});case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getssdk:function(){var e=this,n=window.location.href;this.$api.getjssdk({url:n}).then(function(n){t.log("res==="+(0,o.default)(n)),e.init(n,"扫码活动","扫码有机会中奖，领取后可以到指定零售店兑换奖品","http://ld.haiyunzy.com/zlbean/frontpage/activity/index","http://ld.haiyunzy.com/zlbean/htgc/images/userEnter.png")})},init:function(e,n,r,i,o){var a=this;this.$wx.config({debug:!1,appId:e.appid,timestamp:e.timeStamp,nonceStr:e.nonceStr,signature:e.sign,jsApiList:["checkJsApi","updateAppMessageShareData","updateTimelineShareData","onMenuShareQQ","onMenuShareQZone","chooseImage","scanQRCode"]}),this.$wx.ready(function(){t.log("验证通过"),a.$wx.checkJsApi({jsApiList:["chooseImage"],success:function(e){t.log("res: "+e)}}),a.$wx.updateAppMessageShareData({title:n,desc:r,link:i,imgUrl:o,success:function(t){}})}),this.$wx.error(function(e){t.log("验证失败")})},saoyisao:function(){this.$wx.scanQRCode({needResult:0,scanType:["qrCode","barCode"],success:function(t){var e=t.resultStr;this.$msg("scancode_result=="+e);var n=e.split("@@@");uni.navigateTo({url:"/pages/verify/verify?consumerId="+n[0]+"&verifyuserId="+n[1]+"&code="+n[2]})}})}}};e.default=a}).call(this,n("5a52")["default"])},d88c:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-text",{staticClass:"title"},[t._v("Hello:"+t._s(t.user.nickname))]),n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.hhh))])],1),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-text",{staticClass:"title"},[t._v("latitude:"+t._s(t.latitude))])],1),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-text",{staticClass:"title"},[t._v("longitude:"+t._s(t.longitude))])],1),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sharetoWx.apply(void 0,arguments)}}},[t._v("分享")])],1),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-image",{staticClass:"qcode",attrs:{src:t.qcode},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goqcode.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saoyisao.apply(void 0,arguments)}}},[t._v("扫一扫")])],1)],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r})}}]);