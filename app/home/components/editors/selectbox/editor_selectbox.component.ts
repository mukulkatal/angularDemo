import { Component, Input } from '@angular/core';
import { JSONElement } from '../../../services/JSONElement.service';

@Component({
	selector:'editor-selectbox',
	template:`
		Help Text : <input type="text" [(ngModel)] = "control.props.helpText" />
		Title :<input type="text" [(ngModel)] = "control.props.title" />
		PlaceHolder : <input type="text" [(ngModel)] = "control.config.placeholder" />
		<div *ngFor="let option of control.options ; let i = index">
			<a (click)="delete_Option_From_Items(control.options,i)" class="" href="javascript:void(0);">delete</a>
			<div class="" >
				<div>Option {{i+1}}</div>
				<label>Label</label>: <input type="text" [(ngModel)] = "option.label" />
				<label>Value</label> : <input type="text" [(ngModel)] = "option.value" />
			</div>			
		</div>
		<a href="Javascript:void(0);" (click)="add_Option_In_Dropdown()">Add</a>
	`
})

export class EditorSelectBox
{
	@Input() control: any;

	constructor(private jsonElementHandler: JSONElement) {

	}

	add_Option_In_Dropdown()
	{
		let control = this.jsonElementHandler.getJsonOfElem('selectbox');
		this.control.options.push(control.options);
	}

	delete_Option_From_Items(options,index)
	{		
		options.splice(index, 1);		
	}
}
