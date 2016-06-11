import { Component, Input } from '@angular/core';
import { JSONElement } from '../../services/JSONElement.service';

@Component({
	selector:'editor-selectbox',
	template:`
		<input type="text" [(ngModel)] = "control.config.placeholder" />
		<div *ngFor="let option of control.options ; let i = index">
			<div class="options">
				<div>Option {{i+1}}</div>
				<label>Label</label>: <input type="text" [(ngModel)] = "option.label" />
				<label>Value</label> : <input type="text" [(ngModel)] = "option.value" />
			</div>			
		</div>
		<a href="Javascript:void(0);" (click)="Add_Option_In_Dropdown()">Add</a>
	`
})

export class EditorSelectBox
{
	@Input() control: any;

	constructor(private jsonElementHandler: JSONElement) {

	}

	Add_Option_In_Dropdown()
	{
		let control = this.jsonElementHandler.getJsonOfElem('selectbox');
		this.control.options.push(control.options);
	}
}
