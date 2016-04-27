const common = require('./common');

const ROOT = `${common.BASE_PATH}/static/ts`;

module.exports = {

	devtool: 'inline-source-map',

	resolve: {
		root: ROOT,
		modulesDirectories: [`${common.BASE_PATH}/node_modules`],
		extensions: ['', '.ts', '.js'],
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
			{test: /\.ts$/, loader: 'ts-loader'},
			{test: /\.html$/, loader: 'raw-loader'},
			{test: /\.scss$/, loader: 'raw-loader!sass-loader'},
		],
		postLoaders: [
			{
				test: /\.(js|ts)$/,
				loader: 'istanbul-instrumenter-loader',
				include: `${ROOT}/src`,
				exclude: [
					/\.(e2e|spec)\.ts$/,
					/node_modules/
				]
			}
		]
	},

	sassLoader: {
		outputStyle: 'nested',
		includePaths: [
			`${ROOT}/src`,
			`${common.BASE_PATH}/node_modules/compass-mixins`,
		],
	},
};
