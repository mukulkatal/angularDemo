import { Component, Input,OnInit } from '@angular/core';
import {Control} from '../../../templates/controls/control.component';
import { JSONBuilder } from '../../services/JSONBuilder.service';

@Component({
	selector: 'component-manager',
	directives: [Control],
	template: `
	
	<div *ngFor="let page of TemplateJson.app.pages" (mousedown)="jsonBuilderHelper.setSelectedPage(page)" >
		<ul 
			*ngFor="let section of page.sections"		
			[attr.data-section]="section.order"
			class="col s12 m12 sortable1 mt40 z-depth-3"
			(mousedown)="jsonBuilderHelper.setSelectedSection(section)"
		>
		 
			<li class="child p20 " *ngFor="let control of section.items" 
				[attr.data-order]="control.order"
				(mousedown)="jsonBuilderHelper.setSelectedControl(control)"							
			>
				{{control.type}}
			</li>
		
		</ul>
	</div>	
	`
})

export class ComponentManager implements OnInit {
	@Input('TemplateJson') TemplateJson: any;
	controlJson: any;

	constructor(private jsonBuilderHelper: JSONBuilder)
	{
		console.log('cntrctor');
		console.log(this.TemplateJson);
	}

	ngOnInit() {
		console.log('test');
		console.log(this.TemplateJson);
    }




}