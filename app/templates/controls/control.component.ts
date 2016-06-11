import { Component,Input } from '@angular/core';
import {TextField,TextArea,SelectBox,RadioButton} from './controls';

@Component({
  selector: 'control',
  directives: [TextField, TextArea, SelectBox, RadioButton],
  template: `
			    <textfield *ngIf="data.type=='textfield'" [data]="data"></textfield>
      			<text-area *ngIf="data.type=='text-area'" [data]="data" ></text-area>
      			<selectbox *ngIf="data.type=='selectbox'" [data]="data" ></selectbox>
      			<radio-button *ngIf="data.type=='radio-button'" [data]="data" ></radio-button>
      `,

})

export class Control { 
  @Input() data;
}
