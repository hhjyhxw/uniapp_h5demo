<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">Hello:{{user.nickname}}</text>
			<text class="title">{{hhh}}</text>
		</view>
		<view class="text-area">
			<text class="title">latitude:{{latitude}}</text>
		</view>
		<view class="text-area">
			<text class="title">longitude:{{longitude}}</text>
		</view>
		<view class="text-area">
			<button @click="sharetoWx">分享</button>
		</view>
		<view class="text-area">
			<image :src="qcode" class="qcode" @click="goqcode"></image>
		</view>
		<view class="text-area">
			<button @click="saoyisao">扫一扫</button>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				hhh:'aaa',
				activityId:'',
				user:null,
				cacuRecord:'',
				verifyUser:'',
				accessToken:'',
				latitude:12,
				longitude:23,
				qcode:'',//核销二维码，核销员标识、扫码者标识
			
			}
		},
		onLoad(option) {
			//this.getssdk();
			console.log("index_optio==="+JSON.stringify(option)); //h5token 、accetoken
			this.activityId = option.activityId;//
			this.accessToken =  option.id;
			if(option.id!=null && option.id!=''){//从活动中登陆进入
				uni.setStorageSync('accessToken',  option.id);
				uni.setStorageSync('activityId',  option.activityId);
				if(option.code!=undefined && option.code!=null && option.code!='' && option.code!='null'){
					uni.navigateTo({
						url:'/pages/verify/verify?code='+option.code
					})
				}
				//获取用户相关信息
				this.getScanindexInfo();
			}else{
				this.activityId = uni.getStorageSync("activityId");
				this.getScanindexInfo();
			}
			
			
		},
		onShow:function(){
			this.getssdk();
		},
		methods: {
			//获取主题信息
			getScanindexInfo(){
				this.$api.scanIndex({configId:this.activityId}).then(res =>
						{
							console.log("res==="+JSON.stringify(res)); //h5token 、accetoken
							if(res.code==0){
								this.activityId = res.activityId;
								this.user = res.user;
								this.cacuRecord = res.cacuRecord;
								this.verifyUser = res.verifyUser;
							}
						}); 
			},
			async goqcode(){
				 let result = await this.$api.getVerifyUserCode({activityId:this.activityId});
				 console.log("goqcode_result==="+JSON.stringify(result)); //h5token 、accetoken
				 if(result.code==0){
					 uni.navigateTo({
					 	url:'/pages/websockettest/websockettest?userId='+this.user.id+'&code='+result.code
					 })
				 }
				
			},
			//获取jssdk
			getssdk(){
				var url = window.location.href;
				this.$api.getjssdk({url:url}).then(res =>
				{
					console.log("res==="+JSON.stringify(res)); //h5token 、accetoken
					//this.$msg(JSON.stringify(res))
					this.init(res
					,'扫码活动'
					,'扫码有机会中奖，领取后可以到指定零售店兑换奖品'
					,'http://ld.haiyunzy.com/zlbean/frontpage/activity/index'
					,'http://ld.haiyunzy.com/zlbean/htgc/images/userEnter.png');
				}); 
			},
		
				init(jssdk,title,desc,link,imgUrl){
						let _this = this;
						this.$wx.config({
							debug: false, 
						   appId: jssdk.appid, // 必填，公众号的唯一标识
						   timestamp: jssdk.timeStamp, // 必填，生成签名的时间戳
						   nonceStr: jssdk.nonceStr, // 必填，生成签名的随机串
						   signature: jssdk.sign,// 必填，签名
						   jsApiList: [
							   'checkJsApi',  
							   'updateAppMessageShareData',  
							   'updateTimelineShareData',
								'onMenuShareQQ',
								'onMenuShareQZone',
								'chooseImage',
								'scanQRCode'
						   ]   // 必填，需要使用的JS接口列表
						 });
						this.$wx.ready(function(){
							console.log("验证通过")
						  _this.$wx.checkJsApi({
							  jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
							  success: function(res) {
								console.log("res: " + res);
							  }
							});
							_this.$wx.updateAppMessageShareData({
									title: title, // 分享标题
									desc: desc, // 分享描述
									link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
									imgUrl: imgUrl, // 分享图标
									success: function (res) {
										//_this.$msg("sharesuccess==="+JSON.stringify(res))
									}
							 });
							 
							
						});
						this.$wx.error(function(res){
							console.log("验证失败")
						});
					},
					
					//调起扫一扫功能
					saoyisao(){
						this.$wx.scanQRCode({
							  needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
							  scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
							  success: function (res) {
								var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
								 this.$msg("scancode_result=="+result);
								 var arry = result.split("@@@");
								 uni.navigateTo({
									url:'/pages/verify/verify?consumerId='+arry[0]+'&verifyuserId='+arry[1]+'&code='+arry[2]
								 })
							  }
							});
					}
					
		}
		
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.qcode{
		width: 5rem;
		height: 5rem;
		margin: 1rem auto;
	}
</style>
