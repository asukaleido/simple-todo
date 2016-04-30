import {Model} from 'src/core/models';

interface TodoModelParams {

	subject: string;
}

export class TodoModel extends Model implements TodoModelParams {

	subject: string;

	constructor(params?: TodoModelParams) {
		super(params);
	}
}
