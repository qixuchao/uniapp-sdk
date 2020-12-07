/**
 * @param {
	 style: Object, 广告的样式
	 onClose: Function, 关闭广告时的回调(开屏，插屏)
	 onComplete: Function, 广告渲染完成的回调，成功/失败
	 duration: Number, 广告持续的时间（开屏）
 }
 */
export const loadAd = function(params) {
	const style = Object.assign({
		plusrequire: "none",
		'uni-app': 'none'
	})
		
	let mv = plus.webview.create("", +new Date(), style)
	let duration = params.duration
	let currentWebview = getCurrentPages()[0].$getAppWebview()
		
	mv.loadURL('http://me34.cn?slotId=' + params.id)
	mv.addEventListener('titleUpdate', (e) => {
		let adContainer = null
			
		try {
			adContainer = JSON.parse(e.title)
			if (adContainer.hasOwnProperty('status')) {
				params.onComplete && this.$emit("onComplete", adContainer.status)
				if (!adContainer.status) {
					params.onFallback && this.$emit("onFallback", adContainer.status)
					return
				}
			}
			if (adContainer.type === 'resize') {
				mv.setStyle({
					width: adContainer.w,
					height: adContainer.h,
					...params.style
				});
				
			} else if (adContainer.type === 'adClick' && adContainer.clickUrl) {
				uni.navigateTo({
					url: '../../components/mp-ad/displayAd?url=' + adContainer.clickUrl,
				})
			} else if (adContainer.type === 'adClose') {
				params.onClose && this.$emit("onClose")
				mv.close()
			}
		} catch(e){};
		
	})

	currentWebview.append(mv)
	
	duration && setTimeout(() => {
		console.log(params)
		uni.redirectTo({
			url: "pages/index/index"
		})
		params.onClose && this.$emit("onClose")
		mv.close()
	}, duration)
}
