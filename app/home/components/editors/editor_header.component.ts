import { Component, Input } from '@angular/core';
@Component({
	selector: 'editor-header',
	template:`
		<input type="text" [(ngModel)] = "control.props.title" />
		<input type="text" [(ngModel)] = "control.props.helpText" />
		<input type="text" [(ngModel)] = "control.config.type" />
	`

})//<input type="text" [(ngModel)] = "control.config.placeholder" />
	

export class EditorHeader
{
	@Input() control: any;
}
