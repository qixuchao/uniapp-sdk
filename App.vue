<script>
	if (window && document) {
		if (!document.querySelector('meta[name="referrer"]')) {
				const meta = document.createElement('meta');
				meta.setAttribute('name', 'referrer');
				meta.setAttribute('content', 'never');
				meta.dataset['dynamic'] = true;
				document.head.appendChild(meta);
			}
	}
	export default {
		onLaunch: function() {
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
