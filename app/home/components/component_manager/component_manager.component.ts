import { Component, Input, OnInit, AfterViewInit,Output,EventEmitter} from '@angular/core';
import {Control} from '../../../templates/controls/control.component';
import { JSONBuilder } from '../../services/JSONBuilder.service';

declare var jQuery: any;

@Component({
	selector: 'component-manager',
	directives: [Control],
	templateUrl: 'app/home/components/component_manager/component_manager.template.html',
	// <div class="a">
 //    <div  *ngFor="let page of templateJson.pages" (mousedown)="jsonBuilderHelper.setSelectedPage(page)" >
 //     <ul             
 //         *ngFor="let section of page.sections,let s=index"       
 //         [attr.data-section]="s+1"
 //         class="col s12 m12 sortable1 mt40 z-depth-3"
 //         (mousedown)="jsonBuilderHelper.setSelectedSection(section)"
 //     >
         
 //         <li class="child p20 " *ngFor="let control of section.items,let i=index" 
 //             [attr.data-order]="i+1"
 //             (mousedown)="selectControl(control)"                    
 //         >
 //             {{control.type}}
 //         </li>
        
 //     </ul>
 //    </div>   
 //    </div>

		
	
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
            stop: function() {                				
				jQuery(self.jsonBuilderHelper.getSelectedControl().type).click();			
            },
            out: function() {
                let order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                self.jsonBuilderHelper.sort(order);
            },
            receive:
            function(event, ui) {
                let order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                 console.log('recieve');
                self.jsonBuilderHelper.multiSectionSort(jQuery(this).attr("data-section"), ui.item.index(), order);
			},
        }).disableSelection();
    }

	selectControl(control) {			
        this.jsonBuilderHelper.setSelectedControl(control);
    }
}