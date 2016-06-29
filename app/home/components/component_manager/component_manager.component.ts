import { Component, Input, OnInit, AfterViewInit,Output,EventEmitter} from '@angular/core';
import {Control} from '../../../templates/controls/control.component';
import { JSONBuilder } from '../../services/JSONBuilder.service';
// import {slimscroll} from '';
declare var jQuery: any;

@Component({
	selector: 'component-manager',
	directives: [Control],
	templateUrl: 'app/home/components/component_manager/component_manager.template.html',
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

        jQuery('.side-scroll').slimScroll({
            height: '94vh'
        });
        jQuery('.panel-scroll').slimScroll({
            height: '82vh'
        });
    }

	selectControl(control) {			
        this.jsonBuilderHelper.setSelectedControl(control);
    }

    selectModel(type)
    {
        event.stopPropagation();
        this.jsonBuilderHelper.setSelectedModel(type);
    }
}