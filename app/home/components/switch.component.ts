import { Component, Input,Output , EventEmitter } from '@angular/core';
import { JSONBuilder } from '../services/JSONBuilder.service';
import { JSONElement } from '../services/JSONElement.service';

@Component({
	selector: 'switch',
	providers: [JSONBuilder,JSONElement],
	template: `
		<select (change)="onChange($event)" class="display">

			<option *ngFor="let control of controls" value="{{control}}" [selected]="selectedComponent.control.type==control">{{control}}</option>

		</select>
	`,
	styles: ['.display{display:block}']
})

export class Switch {
	@Input('component_selected') selectedComponent: any;
    @Output() control_selected = new EventEmitter();

    controls: string[] = [
		'text-area', 'textfield', 'selectbox', 'radio-button', 'header', 'logo', 'click-button','slider'
    ];
	constructor(private jsonElementHandler: JSONElement ,private jsonBuilderHelper : JSONBuilder ) { 		
	}

	/*
		-- Change event function event for select
	 */
	onChange($event){
		let control = $event.target.value;//this.jsonElementHandler.getJsonOfElem($event.target.value);
		//set order of new control same as of old control
		//control.order = this.selectedComponent.control.order;
		//relace control in jsonTemplate
		JSONBuilder.changeControl(this.selectedComponent.control, control, this.selectedComponent.section);
		//update current control
		//this.selectedComponent.control = control;
		// emit output param of switched control for updating editor		
		//this.control_selected.emit(control);		
	}
}