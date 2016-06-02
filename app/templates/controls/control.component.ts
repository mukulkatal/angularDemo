import { Component,Input } from '@angular/core';
import {TextField} from './controls';



@Component({
  selector: 'control',
  directives:[TextField],
  template: `
			<textfield *ngIf="data.type=='textfield'" [data]="data"></textfield>
 	`,
})

export class Control { 
  @Input() data;
}
