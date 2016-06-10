import { Component, Input } from '@angular/core';
@Component({
	selector:'editor-selectbox',
	template:`
		<input type="text" [(ngModel)] = "control.config.placeholder" />
		<div *ngFor="let option of control.options ; #i = index">
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

	option : any ={
		"type": "toggel",
	        "lable": "OPTION 1",
				"value": "",
					"selected": false,
						"icon": "http://test.com/jd.png",
							"attr": {
			"class": "customeClass",
				"style": "height:100;color:red;"
		}
	}

	Add_Option_In_Dropdown()
	{
		this.control.options.push(this.option);
	}
}
