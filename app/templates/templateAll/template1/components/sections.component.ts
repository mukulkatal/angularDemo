import { Component,Input,Output,EventEmitter , OnInit } from '@angular/core';
import {Control} from '../../../controls/control.component';

@Component({
    selector:'section',
     directives: [Control],
    template:`
        <ng-content></ng-content>
    `
})

export class SectionComponent{
   
}