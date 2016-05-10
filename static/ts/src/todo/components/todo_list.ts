import {
	Component, ViewChild,
} from '@angular/core';
import {config} from 'src/core/config';
import {UiInput} from 'src/core/components';
import {TodoModel} from 'src/todo/models';
import {TodoItem} from './todo_list/todo_item';

@Component({
	selector: 'todo-list',
	template: require<string>('./todo_list/_todo_list.html'),
	styles: [require<string>('./todo_list/_todo_list.scss')],
	directives: [TodoItem, UiInput],
	encapsulation: config.encapsulation,
})
export class TodoList {

	@ViewChild(UiInput)
	input: UiInput;

	todos: TodoModel[] = [];

	inputEnter(e: Event) {
		if (!this.input.value) {
			return;
		}
		this.create(new TodoModel({
			subject: this.input.value
		}));
		this.input.clear();
	}

	create(todo: TodoModel) {
		this.todos.push(todo);
	}

	delete(todo: TodoModel) {
		this.todos.splice(this.todos.indexOf(todo), 1);
	}
}
