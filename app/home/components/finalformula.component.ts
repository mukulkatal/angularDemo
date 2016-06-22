import {Component, Input, Output, EventEmitter} from '@angular/core';
import {JSONElement} from '../services/JSONElement.service';

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

export class FinalFormula {
    finalFormula:any;
    finalValue:any;
    @Output() emit1 = new EventEmitter();
    @Output() emit2 = new EventEmitter();


    reccusiveTraverse(obj) {
        for (var k in obj) {
            if (k == 'formula' && obj[k].isSelected)
                this.finalFormula += obj[k].operator + obj[k].operVal;
            else if (typeof obj[k] == "object" && obj[k] !== null)
                this.reccusiveTraverse(obj[k]);
        }
    }

    onClick() {
        this.finalFormula = '';
        this.reccusiveTraverse(JSON.parse(localStorage.getItem('template')));
        this.finalFormula = this.finalFormula.substr(1, this.finalFormula.length);
        this.finalValue = math.eval(this.finalFormula);
        this.emit1.emit(this.finalFormula);
        this.emit2.emit(this.finalValue);
    }
}