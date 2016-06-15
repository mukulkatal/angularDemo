import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'header',
  directives: [],
  viewProviders: [],
  template: `
    <div class="header-field">
      <h3 >{{data.config.placeholder}}</h3>
    </div>
	`
})
export class Header implements OnInit{
  @Input() data: any;
  value: string;
  
  ngOnInit(){
    console.log('Done');
  }

}
