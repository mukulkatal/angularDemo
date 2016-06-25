import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { TEMPLATES } from './templates';

@Component({
selector :"Temp",
directives: [TEMPLATES],
template : `     
        <div [ngSwitch]="Temp_name">
            <Temp-1 *ngSwitchWhen="'Temp-1'"
            [JSON_Template]="JSON_Template"
            >
            </Temp-1>
            <Temp-2 *ngSwitchWhen="'Temp-2'"></Temp-2>
        </div>
        
      `,
})

export class Template implements OnInit
{
    @Input('TempName') Temp_name;
    private JSON_Template;

    constructor(private _routeParams: RouteParams) {

    }

    ngOnInit(){     
        let name: string = this._routeParams.get('name');
        if(name){
            //get json from "server or local storage"
            let template = localStorage.getItem('template');
            if(template){
                this.JSON_Template = JSON.parse(template);
            }
            else{
                //get json from server
            }

            //load template
            this.Temp_name = name;
        }
    }
}