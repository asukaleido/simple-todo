import * as e from 'express';

export class App {

	app: e.Express;

	constructor() {
		this.app = e();
		this.initViewEngile();
		this.initStaticPath();
		this.dispatch();
	}

	listen() {
		this.app.listen(process.env.PORT || 3000);
	}

	initViewEngile() {
		this.app.set('view engine', 'pug');
		this.app.set('views', process.cwd());
	}

	initStaticPath() {
		this.app.use(e.static(`${process.cwd()}/static`));
	}

	dispatch() {
		this.app.get('/', (req: e.Request, res: e.Response) => {
			res.render('./templates/index', {
				title: 'simple todo'
			});
		});
	}
}
