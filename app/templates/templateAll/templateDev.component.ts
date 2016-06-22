import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TEMPLATES } from './templates';
import { JSONBuilder } from '../../home/services/JSONBuilder.service';

@Component({
    selector: "Temp",
    directives: [TEMPLATES],
    template: `     
        <div [ngSwitch]="Temp_name">
            <Temp-1 *ngSwitchWhen="'Temp-1'" 
                (default_Template)="bind_Template_Json($event)" 
                (selected_control)="jsonBuilderHelper.setSelectedControl($event)" 
                (selected_section)="jsonBuilderHelper.setSelectedSection($event)" 
                (selected_page)="jsonBuilderHelper.setSelectedPage($event)">
            </Temp-1>
            <Temp-2 *ngSwitchWhen="'Temp-2'" ></Temp-2>
        </div>
        
      `,
})

export class TemplateDev implements OnInit {
    @Input('TempName') Temp_name;

    @Output() default_Template = new EventEmitter();

    constructor(private jsonBuilderHelper: JSONBuilder) {

    }

    ngOnInit() {
    }

    // bind Template Json from template parent
    bind_Template_Json(template: any) {
        this.jsonBuilderHelper.setTemplate(template);
        this.default_Template.emit(template);
    }
}