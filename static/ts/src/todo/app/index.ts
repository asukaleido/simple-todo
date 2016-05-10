import {
	Component, ElementRef, HostListener, Injectable, Renderer, ViewChild,
} from '@angular/core';
import {config} from 'src/core/config';
import {TodoList} from 'src/todo/components';

@Component({
	selector: 'app',
	template: require<string>('./_app.html'),
	styles: [require<string>('./_app.scss')],
	directives: [TodoList],
	encapsulation: config.encapsulation,
})
@Injectable()
export class App {

	@ViewChild('navi')
	navi: ElementRef;

	@ViewChild('contents')
	contents: ElementRef;

	constructor(
		public element: ElementRef,
		public renderer: Renderer
	) {}

	ngAfterViewInit(): void {
		this.resize(window);
	}

	@HostListener('window:resize', ['$event.target'])
	resize(w: Window): void {
		[this.navi, this.contents].forEach((element: ElementRef) => {
			this.renderer.setElementStyle(element.nativeElement, 'height', w.innerHeight + 'px');
		});
	}
}
