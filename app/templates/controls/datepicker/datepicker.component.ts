import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

declare var jQuery : any;
@Component({
	selector: 'date-picker',
	directives: [],
	viewProviders: [],
	template: `<div class="">
					<p>{{data.props.title}}<p>
					<input type="date" class="datepicker">                
             </div>`
})
export class DatePicker implements OnInit {
	@Input() data: any;
	value: string;

	ngOnInit() {
		jQuery('.datepicker').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 15 // Creates a dropdown of 15 years to control year
		});
	}

}
