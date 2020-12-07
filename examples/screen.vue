<template>
	<view>
		<view>
			<mp-ad :options="options" @onClose="onClose" @onComplete="onComplete" @onFallback="onFallback"></mp-ad>
		</view>
		<view>
			<view class="status-bar">
				<button type="default" @click="doJump">跳过{{duration / 1000}}s</button>
			</view>
			<view id="logo">
				<image class="logo-img" src="http://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp4@2x.png" mode="aspectFit" ></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const height = uni.getSystemInfoSync().screenHeight - 80
			return {
				duration: 6000,
				options: {
					adStyle: {
						position: "static",
						top: -20,
						height: height,
						// width: height / (16/9),
						width:'100%'
					},
					duration: 6000,
					type: "screen",
					id: "2020111908",
				}
			}
		},
		methods: {
			onClose: () => {
				uni.redirectTo({
					url: "../index/index"
				})
			},
			onComplete: (status) => {
				console.log('广告' + status)
			},
			onFallback: () => {
				console.log('广告渲染失败')
			},
			doJump: () => {
				this.onClose()
			}
		}
	}
</script>
<style>
	.status-bar {
		width: 100%;
		height: 40px;
		top: 20px;
		position: absolute;
		
	}
	
	.status-bar button {
		top: 40px;
		width: 100px;
		margin-right: 0;
		border: none;
		background: none;
	}
	#logo {
		position: absolute;
		width: 100%;
		bottom: 0;
		height: 80px;
		text-align: center;
	}
	
	#logo .logo-img {
		width: 50%;
		height: 100%;
		display: inline-block;
		vertical-align: middle;
	}
</style>
