import {enableProdMode} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';

const ENV_PROVIDERS: Array<any> = [];

declare var process: any;

if ('product' === process.env.ENV) {
	enableProdMode();
}

if ('develop' === process.env.ENV) {
	// develop
}

import {App} from 'src/todo/app';

bootstrap(App, [
	...ENV_PROVIDERS,
]);
