import { Component, Input } from '@angular/core';
@Component({
	selector: 'editor-logo',
	template:`
		<div><span>URL:</span><input type="text" [(ngModel)] = "control.props.url" /></div>
		Width:<input type="text" [(ngModel)] = "control.props.width" />
		Height:<input type="text" [(ngModel)] = "control.config.height" />
	`

})//<input type="text" [(ngModel)] = "control.config.placeholder" />
	

export class EditorLogo
{
	@Input() control: any;
}
