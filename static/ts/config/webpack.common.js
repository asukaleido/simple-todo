const webpack = require('webpack');
const common = require('./common');

const ROOT = `${common.BASE_PATH}/static/ts`;

module.exports = {

	entry: {
		polyfills: 'src/core/polyfills',
		main: 'src/todo/main',
	},

	resolve: {
		root: ROOT,
		modulesDirectories: [`${common.BASE_PATH}/node_modules`],
		extensions: ['', '.ts', '.js','.json', '.scss', '.html'],
	},

	module: {
		preLoaders: [
			{
				test: /\.ts$/,
				loader: 'tslint-loader',
				exclude: [
					`${ROOT}/node_modules`,
				]
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [
					`${common.BASE_PATH}/node_modules/rxjs`,
				],
			},
		],
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: [
					/spec/
				],
			},
			{test: /\.html$/, loader: 'raw-loader'},
			{test: /\.scss$/, loader: 'raw-loader!sass-loader'},
		]
	},

	sassLoader: {
		outputStyle: 'nested',
		includePaths: [
			`${ROOT}/src`,
			`${common.BASE_PATH}/node_modules/compass-mixins`,
		],
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(true),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'polyfills',
		}),
	],
};
