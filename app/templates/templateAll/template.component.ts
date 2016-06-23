import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {TEMPLATES} from './templates';
import {JSONBuilder} from "../../home/services/JSONBuilder.service";

@Component({
    selector: "Temp",
    directives: [TEMPLATES],
    template: `     
     
        <div [ngSwitch]="Temp_name">
        <div> 
            <Temp-1 *ngSwitchWhen="'Temp-1'"
                (selected_control)="jsonBuilderHelper.setSelectedControl($event)" 
                (selected_section)="jsonBuilderHelper.setSelectedSection($event)" 
                (selected_page)="jsonBuilderHelper.setSelectedPage($event)"
            
            ></Temp-1>
            <Temp-2 *ngSwitchWhen="'Temp-2'"></Temp-2>
        </div>
      </div>  
      `,
    providers: [JSONBuilder]
})

export class Template implements OnInit {
    @Input('TempName') Temp_name;

    constructor(private _routeParams:RouteParams, private  jsonBuilderHelper:JSONBuilder) {

    }

    ngOnInit() {
        // console.log(this.jsonBuilderHelper.getSelectedControl());
        let name:string = this._routeParams.get('name');
        if (name) {
            //load template
            this.Temp_name = name;
        }
    }
}