import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    selector: 'slider',
    directives: [],
    viewProviders: [],
    template: `<div class="range-field" (change)="onChange($event.target.value)">
     	 			<input type="range" id="test5" min="0" max="100" />
    		   </div>`
})
export class Slider implements OnInit {
    @Input() data:any;
    value:string;

    ngOnInit() {
    }

    onChange(value) {
        this.data.props.formula.operVal = value;
        this.data.props.formula.isSelected = true;
    }
}
