import copyPlugin from 'rollup-plugin-copy';
import babel from 'rollup-plugin-babel'

export default {
	input: 'src/mp-ad/loadAd.js',
	output: {
		format: 'esm',
		name: 'loadAd.js',
		file: 'components/mp-ad/loadAd.js'
	},
	// watch: {
	// 	include: 'src/**'
	// },
	plugins: [
		babel({
			exclude: ['node_modules/**']
		}),
		copyPlugin({
			targets: [{
				src: 'src/mp-ad/*.vue',
				dest: 'components/mp-ad/'
			}]
		}),
	]
}
