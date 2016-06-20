import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import {Control} from '../templates/controls/control.component';
import { Template } from '../templates/templateAll/Template.component';
import { Editor } from './components/editor.component';
import { Switch } from './components/switch.component';
import { JSONBuilder } from './services/JSONBuilder.service';
import { JSONElement } from './services/JSONElement.service';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    directives: [RouterLink, Control, Editor, Template, Switch],
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
    selectedComponent: any; 
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

    onComponentSelect(component){
        this.selectedComponent = component;
        this.jsonBuilderHelper.setTemplate(this.selectedComponent.section.items);
    }

    changeControl(control){
        this.selectedComponent.control = control;
    }

    onClick(e){
        var jsonElement = this.jsonElementHandler.getJsonOfElem('textfield');
        this.jsonBuilderHelper.addNewChild(jsonElement);
    }

    // delete item from section
    removeControl(){
        JSONBuilder.deleteControl(this.selectedComponent.control, this.selectedComponent.section);
        // choose the next selected element from template section    
        if (this.selectedComponent.section.items.length > 0)
            this.selectedComponent.control = this.selectedComponent.section.items[0];
        else
            this.selectedComponent.control = ''; 
    }

    onPreview(){
        localStorage.setItem('template',JSON.stringify(this.controls));
    }
}
