<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				src: ''
			}
		},
		onLoad(option) {
			const { url } = option
			this.src = decodeURIComponent(url)
		}
	}
</script>

<style>
</style>
