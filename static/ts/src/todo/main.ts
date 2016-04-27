import {enableProdMode, provide} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS}    from 'angular2/platform/browser';
import {APP_BASE_HREF} from 'angular2/platform/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

const ENV_PROVIDERS: Array<any> = [];

declare var process: any;

if ('product' === process.env.ENV) {
	enableProdMode();
}

if ('develop' === process.env.ENV) {
	ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

import {App} from 'src/todo/app';

bootstrap(App, [
	...ENV_PROVIDERS,
	...HTTP_PROVIDERS,
	...ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, {useValue : '/'}),
]);
