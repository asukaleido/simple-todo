export interface ModelParams {
	[key: string]: any;
}

export class Model {

	constructor(params?: ModelParams) {
		if (params) {
			Object.assign(this, params);
		}
	}
}
