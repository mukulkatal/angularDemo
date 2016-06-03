import { Component, Input } from '@angular/core';

@Component({
	selector: 'editor',
	template: `
		<div>
		<div>
		<lable>order</lable><input type="text" [(ngModel)]="value.order" />
		</div>
		<div>
		<lable>type</lable><input type="type" [(ngModel)]="value.type" />
		</div>
		<div>
		<lable>Placeholder</lable><input type="type" [(ngModel)]="value.placeholder" />
		</div>
		<div>
		<lable>required</lable><input type="type" [(ngModel)]="value.required" />
		</div>	
		<div>
	`
})

export class Editor {
	@Input() value: any;
}
