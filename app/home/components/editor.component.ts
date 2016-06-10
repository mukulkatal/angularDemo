import { Component, Input } from '@angular/core';

@Component({
	selector: 'editor',
	directives: [],
	template: `
		<input type="type" [(ngModel)]="control.config.placeholder" />

	`
})

export class Editor {
	@Input() control: any;
}