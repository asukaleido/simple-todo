import 'core-js';

import 'rxjs';

import 'hammerjs';

interface ErrorConstructor {
	stackTraceLimit: any;
}
declare var Error: ErrorConstructor;

declare var process: any;

if ('product' === process.env.ENV) {
	require('zone.js/dist/zone');
}

if ('develop' === process.env.ENV) {
	Error.stackTraceLimit = Infinity;
	require('zone.js/dist/zone');
	require('zone.js/dist/long-stack-trace-zone');
}

import {ViewEncapsulation} from 'angular2/core';
import {config} from 'src/core/config';

config.encapsulation = ViewEncapsulation.Emulated;
