import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel'
import copyPlugin from 'rollup-plugin-copy';
import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator'

const pkg = require('../package.json')

export default {
	input: 'src/mp-ad/loadAd.js',
	output: {
		format: 'esm',
		banner: `/* loadAd.js v${pkg.version} */`,
		name: 'loadAd.js',
		file: 'dist/mp-ad/loadAd.js'
	},
	plugins: [
		babel({
			exclude: ['node_modules/**']
		}),
		copyPlugin({
			targets: [
				{
					src: 'src/mp-ad/*.vue',
					dest: 'dist/mp-ad'
				}
			]
		}),
		obfuscatorPlugin({
			compact: true,
			controlFlowFlattening: false,
			controlFlowFlatteningThreshold: 0.75,
			deadCodeInjection: false,
			deadCodeInjectionThreshold: 0.4,
			debugProtection: false,
			debugProtectionInterval: false,
			disableConsoleOutput: false,
			domainLock: [],
			forceTransformStrings: [],
			identifierNamesGenerator: 'hexadecimal',
			identifiersDictionary: [],
			identifiersPrefix: '',
			ignoreRequireImports: false,
			inputFileName: '',
			log: false,
			numbersToExpressions: false,
			optionsPreset: 'default',
			renameGlobals: false,
			renameProperties: false,
			reservedNames: [],
			reservedStrings: [],
			rotateStringArray: true,
			seed: 0,
			selfDefending: false,
			shuffleStringArray: true,
			simplify: true,
			sourceMap: false,
			sourceMapBaseUrl: '',
			sourceMapFileName: '',
			sourceMapMode: 'separate',
			splitStrings: false,
			splitStringsChunkLength: 10,
			stringArray: true,
			stringArrayCallsIndexType: [
				'hexadecimal-number'
			],
			stringArrayEncoding: [],
			stringArrayIndexShift: true,
			stringArrayWrappersCount: 1,
			stringArrayWrappersChainedCalls: true,
			stringArrayWrappersParametersMaxCount: 2,
			stringArrayWrappersType: 'variable',
			stringArrayThreshold: 0.75,
			target: 'browser',
			transformObjectKeys: false,
			unicodeEscapeSequence: false
		})
	]
}
