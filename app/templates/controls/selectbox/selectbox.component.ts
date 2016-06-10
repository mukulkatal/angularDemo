import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'selectbox',
  directives: [],
  viewProviders: [],
  template: `
    <div class="">     
        <select class="validate" [required]="data.required" class="display">
         <option  *ngFor="let option of data.options" value="{{option.value}}" [selected]="option.selected" >{{option.label}}</option>
        </select>
    </div>
	`,
  styles: ['.display{display:block}']
  //        <option  *ngFor="let option of data.options" value="{{option.value}}" [selected]="{{option.selected}}" >{{option.label}}</option>      
})
export class SelectBox implements OnInit{
  @Input() data: any;
  value: string;
  
  ngOnInit(){
    console.log('Done');
  }

}
