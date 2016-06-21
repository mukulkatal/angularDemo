import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { TEMPLATES } from './templates';

@Component({
selector :"Temp",
directives: [TEMPLATES],
template : `     
        <div [ngSwitch]="Temp_name">
            <Temp-1 *ngSwitchWhen="'Temp-1'"></Temp-1>
            <Temp-2 *ngSwitchWhen="'Temp-2'"></Temp-2>
        </div>
        
      `,
})

export class Template implements OnInit
{
    @Input('TempName') Temp_name;

    constructor(private _routeParams: RouteParams) {

    }

    ngOnInit(){     
        let name: string = this._routeParams.get('name');
        if(name){
            //load template
            this.Temp_name = name;
        }
    }
}