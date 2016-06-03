import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'text-area',
  directives: [],
  viewProviders: [],
  template: `<div class="input-field">
                <textarea class="validate" [required]="data.required" [(ngModel)]="value" ></textarea>
                <label for="first_name">{{data.placeholder}}</label>
             </div>`
})
export class TextArea implements OnInit{
  @Input() data: any;
  value: string;

  defaultData = {
    placeholder: 'Text Area',
    required:false
  }

  ngOnInit(){
    this.data = this.defaultData;
    console.log('Done');
  }

}
