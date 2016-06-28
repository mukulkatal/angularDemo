import { Component, Input,Output , EventEmitter } from '@angular/core';
import { JSONBuilder } from '../services/JSONBuilder.service';
import { JSONElement } from '../services/JSONElement.service';

@Component({
	selector: 'switch',
	providers: [JSONElement],
	template: `
				<select 
					class="select-default" 
					(change)="onChange($event)" 
					data-width="fit"
				>
			        <option *ngFor="let control of controls" value="{{control}}" [selected]="jsonBuilderHelper.getSelectedControl().type==control">{{control}}</option>
			    </select>
	`,
	//styles: ['.display{display:block}']
})
//<select (change)="onChange($event)" class="display">

		// 	<option *ngFor="let control of controls" value="{{control}}" [selected]="jsonBuilderHelper.getSelectedControl().type==control">{{control}}</option>

		// </select>
export class Switch {

    controls: string[] = [
		'text-area', 'textfield', 'selectbox', 'radio-button', 'header', 'logo', 'click-button','slider'
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