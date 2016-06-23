import { Component, Input, OnInit, AfterViewInit,Output,EventEmitter} from '@angular/core';
import {Control} from '../../../templates/controls/control.component';
import { JSONBuilder } from '../../services/JSONBuilder.service';

declare var jQuery: any;

@Component({
	selector: 'component-manager',
	directives: [Control],
	template: `
	
	<div   *ngFor="let page of templateJson.app.pages" (mousedown)="jsonBuilderHelper.setSelectedPage(page)" >
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

export class ComponentManager implements AfterViewInit {
	templateJson: any;

	constructor(private jsonBuilderHelper: JSONBuilder){
		this.templateJson = jsonBuilderHelper.getJSONBuilt();
	}

	ngAfterViewInit(){
		let self = this;
        jQuery(".sortable1").sortable({
            connectWith: 'ul',
            //cursor: "move",
            cursor: "pointer",
            opacity: 0.5,
            revert: true,
            scroll: false,
            update: function() {
                //get order from DOM
                // let order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                // console.log(order);
                //sort the array
                //self.jsonBuilderHelper.sort(order);
            },
            out: function() {
                let order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                self.jsonBuilderHelper.sort(order);
            },
            receive:
            function(event, ui) {
                let order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                self.jsonBuilderHelper.multiSectionSort(jQuery(this).attr("data-section"), ui.item.index(), order);
			},
        }).disableSelection();
    }

}