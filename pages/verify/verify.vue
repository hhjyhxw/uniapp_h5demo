<template>
	<view>
		<view class="text-area">
			<text class="title">Hello:{{code}}</text>
			<text class="title">奖品列表</text>
			
		</view>
		<view class="successmessage">
			<text class="title">{{successmessage}}</text>
		</view>
		<view class="successmessage">
			<button @click="doverify">确定核销</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
				code:'',//核销员核销码加密临时编号
				prizelistL:[],//奖品列表
				successmessage:''
			}
		},
		onLoad(option) {
			console.log("verifyonload_opiton=="+JSON.stringify(option))
			this.code = option.code;
			
		},
		methods: {
			//加载我的未核销奖品列表
			getMyPrizeList(){
				
			},
			//去核销
			doverify(){
				this.$api.doverify({activityId:uni.getStorageInfoSync("activityId"),prizeids:'id1@@@id2@@@id3'}).then(res =>
						{
							console.log("res==="+JSON.stringify(res)); //h5token 、accetoken
							if(res.code==0){
								this.successmessage = '核销成功==:'+res.prizeids;
							}
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
	.successmessage{
		display: flex;
		justify-content: space-around;
		margin:2rem 1rem;
		text-align: center;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.qcode{
		width: 2rem;
		height: 2rem;
		margin: 1rem auto;
	}
</style>
