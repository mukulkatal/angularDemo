import { Component, Input } from '@angular/core';
import { Switch } from './switch.component';

@Component({
	selector: 'editor',
	directives: [Switch],
	template: `
		<switch [control]="control"></switch>
		<input type="type" [(ngModel)]="control.order" />
		<input type="type" [(ngModel)]="control.props" />
		<input type="type" [(ngModel)]="control.type" />
		<input type="type" [(ngModel)]="control.required" />
	`
})

export class Editor {
	@Input() control: any;
}