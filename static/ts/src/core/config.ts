import {ViewEncapsulation} from 'angular2/core';

class Config {

	encapsulation: ViewEncapsulation = ViewEncapsulation.Native;
}

let config = new Config;

export {config};
