<template>
	
</template>

<script>
	import {
		loadAd
	} from './loadAd.js'
	export default {
		props: {
			options: Object,
		},
		data() {
			return {

			}
		},
		mounted() {
			loadAd.call(this, {
				id: this.options.id,
				type: this.options.type,
				style: this.options.adStyle,
				onClose: this.callHook('onClose'),
				onComplete: this.callHook('onComplete'),
				onFallback: this.callHook('onFallback'),
				duration: this.duration, //开屏广告持续的时长
			}, this.callHook('onComplete'))
		},
		methods: {
			doJump() {
				this.callHook("onClose")()
			},
			callHook(name){
				let _this = this
				return () => {
					this.$emit(name)
				}
			}
		}
	}
</script>

<style>
</style>
