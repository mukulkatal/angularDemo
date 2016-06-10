import { Component,Input,Output,EventEmitter , OnInit } from '@angular/core';
import {Control} from '../../../controls/control.component';

@Component({
    selector:'section',
     directives: [Control],
    template:`
    <div class="sortable">
        <ng-content></ng-content>
    </div>
    `
})

export class SectionComponent{
   
}