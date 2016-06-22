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

    function

    eachRecursive(obj) {
        for (var k in obj) {
            if (typeof obj[k] == "object" && obj[k] !== null)
                this.eachRecursive(obj[k]);
            else {
                if (k == 'operator') {
                    this.finalFormula += obj[k].toString();
                }
            }
        }
    }

    onClick($event) {
        //  console.log(this.jsonBuilderHelper.getSelectedPage().finalFormula);

        //console.log(this.jsonBuilderHelper.getJSONBuilt());

        this.finalFormula = '';
        this.eachRecursive(this.jsonBuilderHelper.getJSONBuilt());
        this.finalFormula = this.finalFormula.substr(1, this.finalFormula.length);
        this.finalValue = math.eval(this.finalFormula);
        this.toggle.emit(this.finalValue);
    }
}