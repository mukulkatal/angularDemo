import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'selectbox',
  directives: [],
  viewProviders: [],
  template: `
    <div class="input-field">
      <select class="validate" [required]="data.required" [(ngModel)]="value" >
        <option >name</option>
        <option >age</option>
        <option >class</option>
      </select>
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
