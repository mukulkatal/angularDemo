import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'header',
  directives: [],
  viewProviders: [],
  template: `
    <div class="header">
      <h2>testing df df df </h2>
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
