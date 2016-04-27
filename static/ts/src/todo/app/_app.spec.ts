import {
	async,
	beforeEach,
	ComponentFixture,
	expect,
	inject,
	it,
	TestComponentBuilder
} from 'angular2/testing';

import {App} from '../App';

describe('todo.App', () => {

	let builder: TestComponentBuilder;

	beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		builder = tcb;
	}));

	it('can be an instance', async(() => {
		builder.createAsync(App)
			.then((fixture: ComponentFixture) => {
				fixture.detectChanges();
				expect(fixture.componentInstance).toBeAnInstanceOf(App);
			});
	}));
});
