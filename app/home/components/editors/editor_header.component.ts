import { Component, Input } from '@angular/core';
@Component({
	selector: 'editor-header',
	template:`
		<div>
			Title :<input type="text" [(ngModel)] = "control.props.title" />
			Help Text : <input type="text" [(ngModel)] = "control.props.helpText" />			
			Show Description : 
			<p>
		      <input name="group1" [(ngModel)]="control.config.showHelp" type="checkbox" id="test1" />
		      <label for="test1">Show Description</label>
		    </p>


		</div>			
	`

})//<input type="text" [(ngModel)] = "control.config.placeholder" />
	

export class EditorHeader
{
	@Input() control: any;
}
