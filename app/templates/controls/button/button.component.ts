import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
	selector: 'click-button',
	directives: [],
	viewProviders: [],
	template: `<div class="input-field">
					<a class="waves-effect waves-light btn">{{data.props.title}}</a>                  
             </div>`
})
export class Button implements OnInit {
	@Input() data: any;
	value: string;

	ngOnInit() {
		console.log('Done');
	}

}
