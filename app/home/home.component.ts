import { Component, OnInit, Output, EventEmitter,AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import {Control} from '../templates/controls/control.component';
import { TemplateDev } from '../templates/templateAll/templateDev.component';
import { Editor } from './components/editor.component';
import { Switch } from './components/switch.component';
import { JSONBuilder } from './services/JSONBuilder.service';
import { JSONElement } from './services/JSONElement.service';
import { ComponentManager } from './components/component_manager/component_manager.component';
import {App,Item,Section,Page} from './models/model';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    directives: [RouterLink, Control, Editor, TemplateDev, Switch, ComponentManager],
    providers: [JSONBuilder, JSONElement],
    viewProviders: [],
    templateUrl: 'home1.template.html',
    // styles : [
    // '.mt20{margin-top:20px}'
    // ],
   // styleUrls:  [
   //                  'assets/css/bootstrap.css',
   //                  'assets/css/bootstrap-switch.css',
   //                  'assets/css/bootstrap-select.css',
   //                  'assets/css/custom.css',
   //              ]
})

export class HomeComponent implements OnInit,AfterViewInit{
    controls: any;
    TempName : any = "Temp-1" ;
    elements: any[];
    ngOnInit(){
    }
    ngAfterViewInit()
    {
        /* On click outside the div hide sidebar container */
        jQuery(document).mouseup(function(e) {
            console.log('mouseup');
            var container = jQuery("#sidebar");
            if (!container.is(e.target) // if the target of the click isn't the container...
                && (container.has(e.target).length === 0)) // ... nor a descendant of the container
            {
                if (!jQuery('.ed-sidebar a').is(e.target)) {
                    container.hide('slide', {
                        direction: 'right',
                        easing: 'linear'
                    }, 400);
                } else {
                    container.show('slide', {
                        direction: 'right',
                        easing: 'linear'
                    }, 400);
                }
            }
        });
// /* End of funtion */
    }

    /*
    --  output from the templates for default json and handle selected control
    */

    bind_Template_Json(data: any){        
        this.controls = data;
               
        //drag and sort elements in a section
        let self = this;
        jQuery(".sortable").sortable({
            //connectWith:   '.sortable-section',
            cursor: "move",
            opacity: 0.5,
            revert: true,
            scroll: false,
            //cursorAt: { left: 250, top: 250 },
            update: function() {
                //get order from DOM
                let order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                //sort the array
                self.jsonBuilderHelper.sort(order);
            }
        }).disableSelection();
    }


    constructor(private jsonBuilderHelper: JSONBuilder, private jsonElementHandler: JSONElement) {
        this.elements = jsonElementHandler.allAvailableElements();
    }

    onClick(e){
        let item = new Item('textfield','','');
        this.jsonBuilderHelper.getSelectedSection().addItems(item);
    }

    onPreview(){
        localStorage.setItem('template',JSON.stringify(this.controls));
    }
}
