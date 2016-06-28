import { Component, Input } from '@angular/core';
@Component({
	selector: 'editor-header',
	template:`
			 <div class="type-details">
                    <div class="col-xs-12 no-padding text-group">
                        <span class="col-md-4 no-padding form-label">Title :</span>
                        <div class="col-md-8">
                            <input type="text" class="form-text" [(ngModel)] = "control.props.title">
                        </div>
                    </div>
                    <div class="col-xs-12 no-padding text-group ">
                        <span class=" col-md-4 no-padding form-label">	Help Text :</span>
                        <div class="col-md-8">
                            <input type="text" class="form-text"  [(ngModel)] = "control.props.helpText">
                        </div>
                    </div>
                    <div class="col-xs-12 no-padding text-group ">
                        <span class="col-md-4 no-padding form-label">Show Description :</span>
                        <div class="col-md-8">
                            <input type="text" class="form-text" [(ngModel)]="control.config.showHelp">
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
// <div>
		// 	Title :<input type="text" [(ngModel)] = "control.props.title" />
		// 	Help Text : <input type="text" [(ngModel)] = "control.props.helpText" />			
		// 	Show Description : 
		// 	<p>
		//       <input name="group1" [(ngModel)]="control.config.showHelp" type="checkbox" id="test1" />
		//       <label for="test1">Show Description</label>
		//     </p>
		// </div>		
	

export class EditorHeader
{
	@Input() control: any;
}
