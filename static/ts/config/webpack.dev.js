const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const config = require('./webpack.common.js');
const common = require('./common');

const ROOT = `${common.BASE_PATH}/static/ts`;

module.exports = webpackMerge(config, {

	debug: true,

	devtool: 'source-map',

	output: {
		path: `${ROOT}/dist/todo`,
		filename: '[name].bundle.js',
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify('develop')
			}
		}),
	],
});
