import { Component,Input } from '@angular/core';
import {TextField,TextArea,SelectBox} from './controls';

@Component({
  selector: 'control',
  directives: [TextField, TextArea, SelectBox],
  template: `
			    <textfield *ngIf="data.type=='textfield'" [data]="data"></textfield>
      			<text-area *ngIf="data.type=='text-area'" [data]="data" ></text-area>
      			<selectbox *ngIf="data.type=='selectbox'" [data]="data" ></selectbox>
      `,

})

export class Control { 
  @Input() data;
}
