import { Component, Input } from '@angular/core';
import { JSONElement } from '../services/JSONElement.service';

@Component({
	selector: 'switch',
	providers: [JSONElement],
	template: `
		<select (change)="onChange($event)">
			<option value="text-area" [selected]="control.type=='text-area'">Text Area</option>
			<option value="textfield" [selected]="control.type=='textfield'">Text Field</option>
		</select>
	`
})

export class Switch {
	@Input() control: any;

	constructor(private jsonElementHandler: JSONElement) { 

	}

	onChange($event){
		let control = this.jsonElementHandler.getJsonOfElem($event.target.value);
		
		this.control = control;

		console.log(this.control);
	}
}