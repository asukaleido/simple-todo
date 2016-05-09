import {
	Component, EventEmitter, HostListener, Input, Output, ViewChild,
} from '@angular/core';
import {config} from 'src/core/config';
import {UiInput} from 'src/core/components';
import {TodoModel} from 'src/todo/models';

@Component({
	selector: 'todo-item',
	template: require<string>('./todo_item/_todo_item.html'),
	styles: [require<string>('./todo_item/_todo_item.scss')],
	directives: [UiInput],
	encapsulation: config.encapsulation,
})
export class TodoItem {

	@ViewChild(UiInput)
	input: UiInput;

	@Input()
	todo: TodoModel;

	edit: boolean = false;

	@Output('blank')
	blankEmitter: EventEmitter<TodoModel> = new EventEmitter<TodoModel>();

	@HostListener('tap', ['$event'])
	tap(e: any) {
		if (e.tapCount === 2) {
			this.changeMode();
		}
	}

	changeMode(edit?: boolean) {
		this.edit = edit === void 0 ? !this.edit : edit;
		if (this.edit) {
			setTimeout(() => this.input.focus());
		} else {
			if (!this.todo.subject) {
				this.blankEmitter.emit(this.todo);
			}
		}
	}
}
