import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'logo',
  directives: [],
  viewProviders: [],
  template: `
    <div class="logo-field">
      <img src="{{data.props.title}}" alt="{{data.config.placeholder}}" width="{{data.config.attr.width}}" />
      <p>{{data.props.helpText}}</p>
    </div>
	`
})
export class Logo implements OnInit{
  @Input() data: any;
  value: string;
  
  ngOnInit(){
    console.log('Done');
  }

}
