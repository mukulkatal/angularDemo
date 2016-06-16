import { Component,Input } from '@angular/core';
import {CONTROLS} from './controls';

@Component({
  selector: 'control',
  directives: [CONTROLS],
  template: `
          <textfield *ngIf="data.type=='textfield'" [data]="data"></textfield>
          <text-area *ngIf="data.type=='text-area'" [data]="data" ></text-area>
          <selectbox *ngIf="data.type=='selectbox'" [data]="data" ></selectbox>
          <radio-button *ngIf="data.type=='radio-button'" [data]="data" ></radio-button>
          <header *ngIf="data.type=='header'" [data]="data" ></header>
          <click-button *ngIf="data.type=='click-button'" [data]="data" ></click-button>
      		<logo *ngIf="data.type=='logo'" [data]="data" ></logo>
          <slider *ngIf="data.type=='slider'" [data]="data" ></slider>
      `,

})

export class Control { 
  @Input() data;
}
