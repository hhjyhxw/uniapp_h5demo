<template>
	<view>
		<text>{{title}}</text>
		
		<view class="qrimg">
		   <tki-qrcode v-if="ifShow" cid="qrcode1" ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground" :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" />
		   </view>
		
		<view class="successmessage" v-if="showprize">
			<text class="title">{{successmessage}}</text>
		</view>
	</view>
	
</template>

<script>
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
	export default {
		components: {tkiQrcode},
		data() {
			return {
				showprize:false,
				userId:'',
				code:'',
				successmessage:'',
				/////uni-app-qrcode///////
				ifShow: true,
				val: 'http://ld.haiyunzy.com/zlbean/frontpage/activity/index?activityId=1&code=sfsfsfsafajljafl', // 要生成的二维码值
				size: 300, // 二维码大小
				unit: 'upx', // 单位
				background: 'white', // 背景色
				foreground: 'black', // 前景色
				pdground: '#32dbc6', // 角标色
				icon: '../../static/logoss.png', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '', // 二维码生成后的图片地址或base64
				title:'等待连接',
			}
		},
		onLoad(option) {
			console.log("websocket_optio==="+JSON.stringify(option)); //h5token 、accetoken
			this.userId = option.userId;//用户标识，用于连接websocket
			this.code = option.code;//用户标识，用于连接websocket
			this.val = this.$config.loginUrl+'?activityId='+uni.getStorageSync("activityId")+'&code='+option.code;//二维码url
			this.openConnect();
		},
		onUnload(){
			this.closeWebsocket();
		},
		onShow() {
			
		},
		methods: {
			
			//uni-app-qrcode生成二维码
			//creatQrcode() {
				//this.$refs.qrcode._makeCode()
			//},
			qrR(res) {
				this.src = res
			},
			//打开websocket
			openConnect(){
						var socketOpen = false;
						var that = this;
						uni.connectSocket({
						 url: this.$config.websocketUrl+'?id='+this.userId,
						 // url:'ws://192.168.110.1:8081/api/webscoket/2/'
						});
						uni.onSocketOpen(function (res) {
						  console.log('WebSocket连接已打开！');
						  that.title = 'WebSocket连接已打开=='+JSON.stringify(res);
						   socketOpen = true;
						});
						uni.onSocketError(function (res) {
						  console.log('WebSocket连接打开失败，请检查');
						  that.title = 'WebSocket连接已打开==='+JSON.stringify(res);
						});
						uni.onSocketMessage(function (res) {
						  console.log('收到服务器内容：' + res.data);
						  that.title = '收到服务器内容=='+JSON.stringify(res);
						  
						  if(res.code==0){
							  this.ifShow = false;
							  this.showprize = true;
							  this.successmessage = '核销成功==:'+res.prizeids;
						  }
						});
						
			},
			closeWebsocket(){
				uni.connectSocket({
				 url: this.$config.websocketUrl+'?id='+this.userId,
				});
				uni.onSocketClose(function (res) {
				  console.log('WebSocket 已关闭！');
				});
			}
		}
	}
</script>

<style>
.qrimg{
	display: flex;
	justify-content: space-around;
	margin: 5rem auto;
}
	.successmessage{
		display: flex;
		justify-content: space-around;
		margin:2rem 1rem;
		text-align: center;
	}
</style>
