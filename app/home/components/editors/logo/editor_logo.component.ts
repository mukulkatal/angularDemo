import { Component, Input } from '@angular/core';
@Component({
	selector: 'editor-logo',
	template:`
		 <div class="logo-details">
			<span>{{control.type}}:</span>
			<div class="desc-switch">
				<input type="checkbox" name="properties-checkbox" checked data-size="mini" [(ngModel)] = "control.config.showControl">
			</div>
			<div class="landing-inputfile">
				<div class="col-xs-12 no-padding">
					<div class="input-group">
						<input type="text" class="file-input" placeholder="No file" readonly [(ngModel)] = "control.props.currentValue">
						<label class="input-group-btn">
							<span class="btn btn-default btn-flat btn-basic2">
							Upload <input type="file" style="display: none;">
						</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	`

})
/*<input type="text" [(ngModel)] = "control.config.placeholder" />
<div>
	URL :<input type="text" [(ngModel)] = "control.props.title" />
	Help Text : <input type="text" [(ngModel)] = "control.props.helpText" />
	
	Alter Text : <input type="text" [(ngModel)] = "control.config.placeholder" />
	Width:<input type="text" [(ngModel)] = "control.config.attr.width" />
	Height:<input type="text" [(ngModel)] = "control.config.attr.height" />
</div>*/

export class EditorLogo
{
	@Input() control: any;
}
