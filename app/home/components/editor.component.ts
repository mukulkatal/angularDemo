import { Component, Input } from '@angular/core';
import { Switch } from './switch.component';

@Component({
	selector: 'editor',
	directives: [Switch],
	template: `

		<switch [control]="control" [jsonTemplate] = "jsonTemplate"></switch>
		<input type="type" [(ngModel)]="control.placeholder" />

	`
})

export class Editor {
	@Input() control: any;
	@Input() jsonTemplate: any;
}