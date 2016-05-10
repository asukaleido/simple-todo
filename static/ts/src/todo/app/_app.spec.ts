import {
	async,
	beforeEach,
	expect,
	inject,
	it,
} from '@angular/core/testing';
import {
	ComponentFixture,
	TestComponentBuilder
} from '@angular/compiler/testing';

import {App} from '../app';

describe('todo.App', () => {

	let builder: TestComponentBuilder;

	beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		builder = tcb;
	}));

	it('can be an instance', async(() => {
		builder.createAsync(App)
			.then((fixture: ComponentFixture<App>) => {
				fixture.detectChanges();
				expect(fixture.componentInstance).toBeAnInstanceOf(App);
			});
	}));
});
