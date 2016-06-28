import { Component, Input } from '@angular/core';
@Component({
	selector: 'editor-button',
	template: `
		<div class="butn-details">
			<span>{{control.type}}:</span>
			<div class="desc-switch">
				<input type="checkbox" name="properties-checkbox" checked data-size="mini" [(ngModel)] = "control.props.currentValue">
			</div>
		</div>
	`
})
/*<input type="text" [(ngModel)] = "control.config.placeholder" />
<input type="text" [(ngModel)] = "control.props.title" />
<input type="text" [(ngModel)] = "control.props.helpText" />
<input type="text" [(ngModel)] = "control.config.type" />*/

export class EditorButton {
	@Input() control: any;
}