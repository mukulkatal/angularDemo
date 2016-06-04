import { Component,Input } from '@angular/core';
import {TextField,TextArea} from './controls';

@Component({
  selector: 'control',
  directives:[TextField,TextArea],
  template: `
			<textfield *ngIf="data.type=='textfield'" [data]="data"></textfield>
      		<text-area *ngIf="data.type=='text-area'" [data]="data" ></text-area>
      `,

})

export class Control { 
  @Input() data;
}
