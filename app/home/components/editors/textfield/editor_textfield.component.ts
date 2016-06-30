import { Component, Input } from '@angular/core';
import { CommonEditor  } from '../common/common_properties.component';

@Component({
	selector: 'editor-textfield',
    directives: [CommonEditor],
	template:`
    <!-- Common Component -->
        <common-editor
            [control]="control"
        >
        </common-editor>
    <!-- Common Component-->	
         <div class="type-details">
            <div class="col-xs-12 no-padding text-group">
                <span class="col-md-3 no-padding form-label">Placeholder:</span>
                <div class="col-md-5">
                    <input type="text" class="form-text" [(ngModel)] = "control.config.placeholder">
                </div>
            </div>
            <div class="col-xs-12 no-padding text-group ">
                <span class=" col-md-3 no-padding form-label">Min Value:</span>
                <div class="col-md-5">
                    <input type="text" class="form-text">
                </div>
            </div>
            <div class="col-xs-12 no-padding text-group ">
                <span class="col-md-3 no-padding form-label">Max Value:</span>
                <div class="col-md-5">
                    <input type="text" class="form-text">
                </div>
            </div>
        </div>
        <div class="type-details">
            <label class="check">
                <input type="checkbox" value="Value1 " name="checkbox1" id="check1">
                <label for="check1"> </label>
                Mark as Mandatory
            </label>
        </div>
    `

})//<input type="text" [(ngModel)] = "control.config.placeholder" />
	// <input type="text" [(ngModel)] = "control.config.placeholder" />
	// 	<input type="text" [(ngModel)] = "control.config.value" />
	// 	<input type="text" [(ngModel)] = "control.config.showHelp" />

export class EditorTextField
{
	@Input() control: any;
}
