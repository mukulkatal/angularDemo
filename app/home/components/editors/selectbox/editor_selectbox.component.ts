import { Component, Input } from '@angular/core';
import { JSONElement } from '../../../services/JSONElement.service';

@Component({
	selector:'editor-selectbox',
	template:`
		<div class="type-details">
			<p class="type-head">Options:</p>
			<div class="col-xs-12 no-padding text-group" *ngFor="let option of control.options ; let i = index">
				<span class="no-padding form-label"><span class="default-label">{{i+1}}</span></span>
				<div class="col-md-5">
					<input type="text" class="form-text" placeholder="Label" [(ngModel)] = "option.label">
				</div>
				<div class="col-md-5">
					<input type="text" class="form-text" placeholder="Value" [(ngModel)] = "option.value">
				</div>
				<!-- More button -->
				<div class="btn-group  more-options">
					<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<i class="material-icons">more</i>
					</button>
					<ul class="dropdown-menu">
						<li><a href="javascript:void(0);" (click)="delete_Option_From_Items(control.options,i)">Delete</a></li>
						<li><a href="javascript:void(0);" >Set as Default</a></li>
					</ul>
				</div>
			</div>
			<div class="col-xs-12 no-padding text-group">
				<span class="no-padding form-label"></span>
				<div class="col-md-10">
					<a href="javascript:void(0);" (click)="add_Option_In_Dropdown()" class="default">Add Option</a>
				</div>
			</div>
		</div>
	`
})
/*Help Text : <input type="text" [(ngModel)] = "control.props.helpText" />
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
<a href="Javascript:void(0);" (click)="add_Option_In_Dropdown()">Add</a>*/
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
