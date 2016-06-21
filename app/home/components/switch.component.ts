import { Component, Input,Output , EventEmitter } from '@angular/core';
import { JSONBuilder } from '../services/JSONBuilder.service';
import { JSONElement } from '../services/JSONElement.service';

@Component({
	selector: 'switch',
	providers: [JSONElement],
	template: `
		<select (change)="onChange($event)" class="display">

			<option *ngFor="let control of controls" value="{{control}}" [selected]="jsonBuilderHelper.getSelectedControl().type==control">{{control}}</option>

		</select>
	`,
	styles: ['.display{display:block}']
})

export class Switch {

    controls: string[] = [
		'text-area', 'textfield', 'selectbox', 'radio-button', 'header', 'logo', 'click-button'
    ];
	constructor(private jsonElementHandler: JSONElement ,private jsonBuilderHelper : JSONBuilder ) { 		
	}

	/*
		-- Change event function event for select
	 */
	onChange($event){
		let control = $event.target.value;
		this.jsonBuilderHelper.changeControl(control);	
	}
}