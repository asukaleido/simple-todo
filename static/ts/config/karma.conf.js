module.exports = function(config) {
	var testWebpackConfig = require('./webpack.test.js');

	config.set({

		basePath: '',

		frameworks: ['jasmine'],

		files: [
			{pattern: './static/ts/config/spec-bundle.js', watched: false}
		],

		exclude: [],

		preprocessors: {'./static/ts/config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']},

		webpack: testWebpackConfig,

		coverageReporter: {
			dir : 'coverage/',
			subdir: '.',
			reporters: [
				{type: 'text-summary'},
				{type: 'json'},
				{type: 'html'}
			]
		},

		webpackServer: {
			noInfo: true
		},

		reporters: ['mocha', 'coverage'],

		port: 9876,

		colors: true,

		logLevel: config.LOG_INFO,

		autoWatch: false,

		browsers: [
			'PhantomJS'
		],

		singleRun: true
	});
};
