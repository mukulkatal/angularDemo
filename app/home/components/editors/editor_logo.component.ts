import { Component, Input } from '@angular/core';
@Component({
	selector: 'editor-logo',
	template:`
		<div>
			URL :<input type="text" [(ngModel)] = "control.props.title" />
			Help Text : <input type="text" [(ngModel)] = "control.props.helpText" />
			
			Alter Text : <input type="text" [(ngModel)] = "control.config.placeholder" />
			Width:<input type="text" [(ngModel)] = "control.config.attr.width" />
			Height:<input type="text" [(ngModel)] = "control.config.attr.height" />
		</div>		
	`

})//<input type="text" [(ngModel)] = "control.config.placeholder" />
	

export class EditorLogo
{
	@Input() control: any;
}
