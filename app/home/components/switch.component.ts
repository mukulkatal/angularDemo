import { Component, Input,Output , EventEmitter } from '@angular/core';
import { JSONBuilder } from '../services/JSONBuilder.service';
import { JSONElement } from '../services/JSONElement.service';

@Component({
	selector: 'switch',
	providers: [JSONBuilder,JSONElement],
	template: `
		<select (change)="onChange($event)" class="display">
			<option value="text-area" [selected]="selectedComponent.control.type=='text-area'">Text Area</option>
			<option value="textfield" [selected]="selectedComponent.control.type=='textfield'">Text Field</option>
			<option value="selectbox" [selected]="selectedComponent.control.type=='selectbox'">DropDown</option>
			<option value="radio-button" [selected]="selectedComponent.control.type=='radio-button'">Radio Button</option>
			<option value="header" [selected]="selectedComponent.control.type=='header'">Header</option>
			<option value="click-button" [selected]="selectedComponent.control.type=='click-button'">Button</option>
		</select>
	`,
	styles: ['.display{display:block}']
})

export class Switch {
	@Input('component_selected') selectedComponent: any;
    @Output() control_selected = new EventEmitter();

	constructor(private jsonElementHandler: JSONElement ,private jsonBuilderHelper : JSONBuilder ) { 		
	}

	/*
		-- Change event function event for select
	 */
	onChange($event){
		let control = this.jsonElementHandler.getJsonOfElem($event.target.value);
		//set order of new control same as of old control
		control.order = this.selectedComponent.control.order;
		//relace control in jsonTemplate
		JSONBuilder.changeControl(this.selectedComponent.control, control, this.selectedComponent.section);
		//update current control
		this.selectedComponent.control = control;
		// emit output param of switched control for updating editor		
		this.control_selected.emit(control);		
	}
}