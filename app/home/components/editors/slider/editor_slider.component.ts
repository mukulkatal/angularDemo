import { Component, Input } from '@angular/core';
import { JSONElement } from '../../../services/JSONElement.service';

@Component({
	selector:'editor-slider',
	template:`
		<div class="type-details">
                    <div class="col-xs-12 no-padding text-group">
                        <span class="col-md-4 no-padding form-label">Title :</span>
                        <div class="col-md-8">
                            <input type="text" class="form-text" [(ngModel)] = "control.props.title" >
                        </div>
                    </div>
                    <div class="col-xs-12 no-padding text-group ">
                        <span class=" col-md-4 no-padding form-label">	Help Text :</span>
                        <div class="col-md-8">
                            <input type="text" class="form-text"  [(ngModel)] = "control.props.helpText">
                        </div>
                    </div>
                    <div class="col-xs-12 no-padding text-group ">
                        <span class="col-md-4 no-padding form-label">PlaceHolder :</span>
                        <div class="col-md-8">
                            <input type="text" class="form-text" [(ngModel)]="control.config.placeholder">
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
	// Help Text : <input type="text" [(ngModel)] = "control.props.helpText" />
	// 	Title :<input type="text" [(ngModel)] = "control.props.title" />
	// 	PlaceHolder : <input type="text" [(ngModel)] = "control.config.placeholder" />
})

export class EditorSlider
{
	@Input() control: any;

	constructor(private jsonElementHandler: JSONElement) {

	}
}
