import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'logo',
  directives: [],
  viewProviders: [],
  template: `
    <div class="logo-field">
      <img src="{{data.props.url}}" altr="logo image" width="{{data.props.width}}" />
      
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
