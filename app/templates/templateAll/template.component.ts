import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { TEMPLATES } from './templates';
import { JSONBuilder } from '../../home/services/JSONBuilder.service';

@Component({
selector :"Temp",
directives: [TEMPLATES],
template : `     
        <div [ngSwitch]="Temp_name">
            <Temp-1 *ngSwitchWhen="'Temp-1'" *ngSwitchDefault (default_Template)="bind_Template_Json($event)" (selected_control)="selectControl($event)" (selected_section)="selectSection($event)" (selected_page)="selectPage($event)" #template></Temp-1>
            <Temp-2 *ngSwitchWhen="'Temp-2'" ></Temp-2>
        </div>
        
      `,
})

export class Template implements OnInit
{
    @Input('TempName') Temp_name; 
    
    @Output() default_Template = new EventEmitter();

    constructor(private _routeParams: RouteParams, private jsonBuilderHelper: JSONBuilder) {

    }

    ngOnInit(){     
        let name: string = this._routeParams.get('name');
        if(name){
            //load template
            this.Temp_name = name;
        }
    }
    
    // bind Template Json from template parent
    bind_Template_Json(template: any)
    {
        this.jsonBuilderHelper.setTemplate(template);
        this.default_Template.emit({defaulttemp:template});
    }
 
    /*  ---
           this is passed from the particluar templat component (eg . Template1.component.ts) 
           and now we have to pass it to parent template component i.e home component
    */
    selectControl(control) {
        this.jsonBuilderHelper.setSelectedControl(control);
    }
    
     selectSection(section) {
        this.jsonBuilderHelper.setSelectedSection(section);
    }

     selectPage(page) {
         this.jsonBuilderHelper.setSelectedPage(page);
     }
}