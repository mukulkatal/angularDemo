import { Component, Input } from '@angular/core';
import { JSONBuilder } from '../services/JSONBuilder.service';
import { JSONElement } from '../services/JSONElement.service';

@Component({
	selector: 'switch',
	providers: [JSONBuilder,JSONElement],
	template: `
		<select (change)="onChange($event)" class="display">
			<option value="text-area" [selected]="control.type=='text-area'">Text Area</option>
			<option value="textfield" [selected]="control.type=='textfield'">Text Field</option>
		</select>
	`,
	styles:['.display{display:block}']
})

export class Switch {
	@Input() control: any;
	@Input() jsonTemplate: Array<Object>;
	constructor(private jsonElementHandler: JSONElement ,private jsonBuilderHelper : JSONBuilder ) { 		
	}

	/*
		-- Change event function event for select
	 */
	onChange($event){			
		let control = this.jsonElementHandler.getJsonOfElem($event.target.value);
		//set order of new control same as of old control
		control.order = this.control.order;
		//relace control in jsonTemplate
		JSONBuilder.changeControl(this.control, control, this.jsonTemplate.items);
		//update current control
		this.control = control;
	}
}