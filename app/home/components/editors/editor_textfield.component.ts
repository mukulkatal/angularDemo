import { Component, Input } from '@angular/core';
@Component({
	selector: 'editor-textfield',
	template:`
		<input type="text" [(ngModel)] = "control.config.placeholder" />
		<input type="text" [(ngModel)] = "control.config.value" />
		<input type="text" [(ngModel)] = "control.config.type" />
	`

})//<input type="text" [(ngModel)] = "control.config.placeholder" />
	

export class EditorTextField
{
	@Input() control: any;
}
