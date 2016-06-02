import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'textfield',
  directives: [],
  viewProviders: [],
  template: `
    <div class="input-field">
      <input type="text" class="validate" [required]="data.required" [(ngModel)]="value">
      <label for="first_name">{{data.placeholder}}</label>
    </div>
	`
})
export class TextField implements OnInit{
  @Input() data: any;
  value: string;
  
  ngOnInit(){
    console.log('Done');
  }

}
