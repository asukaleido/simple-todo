import {ViewEncapsulation} from '@angular/core';

class Config {

	encapsulation: ViewEncapsulation = ViewEncapsulation.Native;
}

let config = new Config;

export {config};
