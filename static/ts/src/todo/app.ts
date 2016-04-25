import {
	Component, ElementRef, HostListener, Injectable, Renderer, ViewEncapsulation,
} from 'angular2/core';

@Component({
	selector: 'app',
	template: require<string>('./app/_app.html'),
	styles: [require<string>('./app/_app.scss')],
	encapsulation: ViewEncapsulation.None,
})
@Injectable()
export class App {

	constructor(
		public element: ElementRef,
		public renderer: Renderer
	) {}

	ngOnInit(): void {
		this.resize(window);
	}

	@HostListener('window:resize', ['$event.target'])
	resize(w: Window): void {
		this.renderer.setElementStyle(this.element.nativeElement, 'height', w.innerHeight + 'px');
	}
}
