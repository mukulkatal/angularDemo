import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'radio-button',
  directives: [],
  viewProviders: [],
  template: `
   <div> 
   <div> title : {{data.props.title}}  </div>
   <div> helptext : {{data.props.helpText}}  </div>
    <p *ngFor="let radio_item of data.options, let i = index">
        <input  
            [(ngModel)]="radio_item.value"
            type="radio"
            id="radio{{i}}"
            class="validate"
            name="group" 
            [required]="data.required"          
            [checked]="radio_item.selected"
          />         
      <label attr.for="radio{{i}}">{{radio_item.label}}</label>    
    </p>
  </div>
	`
})
export class RadioButton implements OnInit {
  @Input() data: any;
  value: string;

  ngOnInit() {
  }
 

}
