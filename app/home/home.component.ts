import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import {Control} from '../templates/controls/control.component';
import { TemplateDev } from '../templates/templateAll/templateDev.component';
import { Editor } from './components/editor.component';
import { Switch } from './components/switch.component';
import { JSONBuilder } from './services/JSONBuilder.service';
import { JSONElement } from './services/JSONElement.service';
import { ComponentManager } from './components/component_manager/component_manager.component';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    directives: [RouterLink, Control, Editor, TemplateDev, Switch, ComponentManager],
    providers: [JSONBuilder, JSONElement],
    viewProviders: [],
    templateUrl: 'home.template.html',
    styles : [
    '.mt20{margin-top:20px}'
    ],
    styleUrls: ['../../node_modules/materialize-css/dist/css/materialize.min.css']
})

export class HomeComponent implements OnInit{
    controls: any[];
    TempName : any = "Temp-1" ;
    elements: any[];
    ngOnInit(){
    }

    /*
    --  output from the templates for default json and handle selected control
    */

    bind_Template_Json(data: any){
       
        this.controls = data.defaulttemp.defaulttemp;

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
                console.log(order);
                //sort the array
                self.jsonBuilderHelper.sort(order);
            }
        }).disableSelection();
    }


    constructor(private jsonBuilderHelper: JSONBuilder, private jsonElementHandler: JSONElement) {
        this.elements = jsonElementHandler.allAvailableElements();
    }

    onClick(e){
        var jsonElement = this.jsonElementHandler.getJsonOfElem('textfield');
        this.jsonBuilderHelper.addNewChild(jsonElement);
    }
    
    onPreview(){
        localStorage.setItem('template',JSON.stringify(this.controls));
    }

    loadTemplate() {
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
