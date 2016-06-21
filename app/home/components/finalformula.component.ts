import {Component, Input, Output, EventEmitter} from '@angular/core';
import {JSONBuilder} from '../services/JSONBuilder.service';
import {JSONElement} from '../services/JSONElement.service';

declare var math:any;

@Component({
    selector: 'final-formula',
    providers: [JSONElement],
    template: `
	<p (click)="onClick(event)" >Formula : {{finalFormula}}</p>
	<h3 >Amount : {{finalValue}}</h3>
	`,
    styles: ['.display{display:block}']
})

export class FinalFormula {
    finalFormula = "0";

    @Output()
    toggle = new EventEmitter<Object>();

    finalValue = math.eval(this.finalFormula);
    controls:string[] = [
        'text-area', 'textfield', 'selectbox', 'radio-button', 'header', 'logo', 'click-button', 'slider'
    ];

    constructor(private jsonElementHandler:JSONElement, private jsonBuilderHelper:JSONBuilder) {
    }

    onClick($event) {
        console.log(this.jsonBuilderHelper.getSelectedPage().finalFormula);
        //    let operator = $event.target.value;
        //   if (this.jsonBuilderHelper.getSelectedPage().finalFormula)
        this.finalFormula = this.jsonBuilderHelper.getSelectedPage().finalFormula;
        this.finalValue = math.eval(this.finalFormula);
        this.toggle.emit(this.finalValue    );
        // this.jsonBuilderHelper.getSelectedControl().props.operator = operator + this.elementValue;
    }
}