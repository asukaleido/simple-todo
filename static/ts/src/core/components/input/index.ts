import {
	Component, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild
} from '@angular/core';
import {isBlank} from '@angular/common/src/facade/lang';
import {config} from 'src/core/config';

@Component({
	selector: 'ui-input',
	template: require<string>('./_input.html'),
	styles: [require<string>('./_input.scss')],
	encapsulation: config.encapsulation,
})
export class UiInput {

	@ViewChild('input')
	input: ElementRef;

	@Input('type')
	type: string;

	@Input('placeholder')
	placeholder: string;

	@Input('value')
	set value(value: string) {
		this._value = value;
		this.valueChangeEmitter.emit(this.value);
	}
	get value() {
		return !isBlank(this._value) ? this._value : '';
	}

	@Output('valueChange')
	valueChangeEmitter: EventEmitter<any> = new EventEmitter<any>();

	@Output('enter')
	enterEmitter: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

	@Output('focus')
	focusEmitter: EventEmitter<Event> = new EventEmitter<Event>();

	@Output('blur')
	blurEmitter: EventEmitter<Event> = new EventEmitter<Event>();

	private _value: string;

	constructor(
		public renderer: Renderer
	) {}

	keydown(e: KeyboardEvent) {
		if (e.keyCode === 13) {
			this.enterEmitter.emit(e);
		}
	}

	focus() {
		this.renderer.invokeElementMethod(this.input.nativeElement, 'focus', []);
	}

	blur() {
		this.renderer.invokeElementMethod(this.input.nativeElement, 'blur', []);
	}

	clear() {
		this.value = '';
	}

	private _onFocus(e: Event) {
		this.focusEmitter.emit(e);
	}

	private _onBlur(e: Event) {
		this.blurEmitter.emit(e);
	}
}
