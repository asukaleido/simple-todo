const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.common.js');
const common = require('./common');

const ROOT = `${common.BASE_PATH}/static/ts`;

module.exports = webpackMerge(config, {

	debug: false,

	devtool: 'source-map',

	output: {
		path: `${ROOT}/dist/todo`,
		filename: '[name].bundle.js',
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify('product')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8 : true,
				keep_fnames: true
			},
			compress : {
				screw_ie8 : true,
			},
			comments: false,
		}),
	],
});
