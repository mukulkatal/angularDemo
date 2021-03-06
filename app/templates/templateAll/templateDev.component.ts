import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TEMPLATES } from './templates';
import { JSONBuilder } from '../../home/services/JSONBuilder.service';
import {App} from '../../home/models/model';

@Component({
    selector: "Temp",
    directives: [TEMPLATES],
    template: `
        <div [ngSwitch]="Temp_name">
            <Temp-1 *ngSwitchWhen="'Temp-1'"
               (default_Template)="bind_Template_Json($event)" 
               (selected_control)="jsonBuilderHelper.setSelectedControl($event)"
               (selected_section)="jsonBuilderHelper.setSelectedSection($event)"
               (selected_page)="jsonBuilderHelper.setSelectedPage($event)"
               [JSON_Template]="JSON_Template"
             >
            </Temp-1>
            <Temp-2 *ngSwitchWhen="'Temp-2'" ></Temp-2>
        </div>

      `,
})

export class TemplateDev implements OnInit {
    @Input('TempName') Temp_name;
    JSON_Template: App;
    @Output() default_Template = new EventEmitter();

   ngOnInit() {
        //get json from "server or local storage"
      let template = localStorage.getItem('template');
      if (template) {
         //if present then assign it.
         this.JSON_Template = new App().deserialize(JSON.parse(template));
      }
   }

   constructor(private jsonBuilderHelper: JSONBuilder){

   }

   // bind Template Json from template parent
   bind_Template_Json(template: any){
      this.jsonBuilderHelper.setTemplate(template);
      this.default_Template.emit(template);
   }
}