import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {JSONElement} from '../services/JSONElement.service';
import {JSONBuilder} from "../services/JSONBuilder.service";

declare var math:any;

@Component({
    selector: 'final-formula',
    providers: [JSONElement],
    template: `
	<p (click)="onClick()" >Formula : {{finalFormula}}</p>
	<h3 >Amount : {{finalValue}}</h3>
	`,
    styles: ['.display{display:block}']
})

export class FinalFormula implements  OnInit{
    ngOnInit():any {

    }

    finalFormula:any;
    finalValue:any;
    @Output() emit1 = new EventEmitter();
    @Output() emit2 = new EventEmitter();


    constructor(private _jsonBuilder:JSONBuilder) {
       // this._jsonBuilder.setTemplate( localStorage.getItem('template'));
    }

    reccusiveTraverse(obj) {
        for (var k in obj) {
            if (k == 'formula' && obj[k].isSelected) {
                this.finalFormula += obj[k].operator + obj[k].operVal;
            } else if (typeof obj[k] == "object" && obj[k] !== null)
                this.reccusiveTraverse(obj[k]);
        }
    }

    onClick() {
        this.finalFormula = '';
        this._jsonBuilder.setTemplate(this._jsonBuilder.getSelectedPage());
        this.reccusiveTraverse(this._jsonBuilder.getJSONBuilt());
        this.finalFormula = this.finalFormula.substr(1, this.finalFormula.length);
        this.finalValue = math.eval(this.finalFormula);
        this.emit1.emit(this.finalFormula);
        this.emit2.emit(this.finalValue);
    }
}