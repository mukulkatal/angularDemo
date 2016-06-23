import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'header',
  directives: [],
  viewProviders: [],
  template: `
    <div class="header-field">
      <h3 >{{data.props.title}}</h3>
      <p *ngIf="data.config.showHelp==1">{{data.props.helpText}}</p>
    </div>
	`
})
export class Header implements OnInit{
  @Input() data: any;
  value: string;
  
  ngOnInit(){
  }

}
