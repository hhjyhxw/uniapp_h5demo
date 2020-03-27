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
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
				hhh:'aaa',
				configId:'',
				user:null,
				cacuRecord:'',
				verifyUser:'',
				accessToken:'',
				latitude:12,
				longitude:23
				
			}
		},
		onLoad(option) {
			this.getssdk();
			console.log("id==="+option.id); //h5token 、accetoken
			console.log("activityId=="+option.activityId); //活动id
			this.configId = option.activityId;//
			this.accessToken =  option.id;
			if(option.id!=null && option.id!=''){
				uni.setStorageSync('accessToken',  option.id);
				this.getScanindexInfo();
			}
			
			
		},
		onShow:function(){
			this.getssdk();
		},
		methods: {
			//获取主题信息
			getScanindexInfo(){
				this.$api.scanIndex({configId:this.configId}).then(res =>
						{
							console.log("res==="+JSON.stringify(res)); //h5token 、accetoken
							if(res.code==0){
								this.configId = res.configId;
								this.user = res.user;
								this.cacuRecord = res.cacuRecord;
								this.verifyUser = res.verifyUser;
							}
						}); 
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
								'chooseImage'
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
							 })
							
						});
						this.$wx.error(function(res){
							console.log("验证失败")
						});
					},
					
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
</style>
