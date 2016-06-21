import {Component, Input, Output, EventEmitter} from '@angular/core';
import {JSONBuilder} from '../services/JSONBuilder.service';
import {JSONElement} from '../services/JSONElement.service';

@Component({
    selector: 'formula-switch',
    providers: [JSONElement],
    template: `
		<select (change)="onChange($event)" class="display">

			<option *ngFor="let operator of operators" value="{{operator}}" >{{operator}}</option>

		</select>
	`,
    styles: ['.display{display:block}']
})

export class FormulaSwitch {
    elementValue:number = 50;
    operators:string[] = [
        '+', '-', '/', '*', '^', 'log'
    ];

    constructor(private jsonElementHandler:JSONElement, private jsonBuilderHelper:JSONBuilder) {
    }

    /*
     -- Change event function event for select
     */
    onChange($event) {
        let operator = $event.target.value;
        this.jsonBuilderHelper.getSelectedPage().finalFormula ?
            this.jsonBuilderHelper.getSelectedPage().finalFormula += operator + this.elementValue :
            this.jsonBuilderHelper.getSelectedPage().finalFormula = this.elementValue;
        this.jsonBuilderHelper.getSelectedControl().props.operator = operator + this.elementValue;
    }
}