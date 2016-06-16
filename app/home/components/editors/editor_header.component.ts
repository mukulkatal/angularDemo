import { Component, Input } from '@angular/core';
@Component({
	selector: 'editor-header',
	template:`
		<div>
			Title :<input type="text" [(ngModel)] = "control.props.title" />
			Help Text : <input type="text" [(ngModel)] = "control.props.helpText" />
			
			Show Description : <input type="text" [(ngModel)] = "control.config.showHelp" />
		</div>		
	`

})//<input type="text" [(ngModel)] = "control.config.placeholder" />
	

export class EditorHeader
{
	@Input() control: any;
}
