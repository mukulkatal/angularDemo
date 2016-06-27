import { Component, Input } from '@angular/core';
import { JSONElement } from '../../../services/JSONElement.service';

@Component({
	selector:'editor-slider',
	template:`
		Help Text : <input type="text" [(ngModel)] = "control.props.helpText" />
		Title :<input type="text" [(ngModel)] = "control.props.title" />
		PlaceHolder : <input type="text" [(ngModel)] = "control.config.placeholder" />
	`
})

export class EditorSlider
{
	@Input() control: any;

	constructor(private jsonElementHandler: JSONElement) {

	}
}
