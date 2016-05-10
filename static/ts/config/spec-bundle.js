Error.stackTraceLimit = Infinity;

require('core-js');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');

require('rxjs/Rx');

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.setBaseTestProviders(
	browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
	browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

Object.assign(global, testing);

var config = require('src/core/config').config;
var ViewEncapsulation = require('@angular/core').ViewEncapsulation;
config.encapsulation = ViewEncapsulation.Emulated;

var testContext = require.context('../src', true, /\.spec\.ts/);

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);
