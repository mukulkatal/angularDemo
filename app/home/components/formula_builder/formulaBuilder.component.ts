/**
 * Created by kay on 25-06-2016.
 */

import {Component, OnInit} from "@angular/core";
declare var math:any;

@Component({
    selector: 'formula-builder',
    template: `
        <textarea [(ngModel)]="finalFormula"  #formula placeholder="formula" (keyup)="onChange(value)" ></textarea>
        <p (click)="onClick(formula.value)" >Formula : {{finalFormula}}</p>
	    <h3 >Amount : {{finalValue}}</h3>
	    `,

})

export class FormulaBuilder implements OnInit {
    ngOnInit():any {
        return undefined;
    }

    constructor() {

    }

    finalFormula:any;
    finalValue:any;
    formula:any;

    onChange(formula) {
        // this.formula = formula;
        // this.finalFormula = this.formula;
        try {
            this.finalValue = math.eval(this.finalFormula);
        } catch (e) {
            console.log(e);
            this.finalValue=e;
        }
       // console.log(this.finalFormula);
       // console.log(this.finalValue);
    }

    onClick(formula) {
        this.finalFormula = formula;
        try {
            this.finalValue = math.eval(this.finalFormula);
        } catch (e) {
            console.log(e);
        }
        console.log(this.finalFormula);
        console.log(this.finalValue);
    }

}
