import {Component, Input, Output} from '@angular/core';
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

    operators:string[] = ['+', '-', '/', '*', '^', 'log'];

    constructor(private jsonElementHandler:JSONElement, private jsonBuilderHelper:JSONBuilder) {
    }

    onChange($event) {
        let operator = $event.target.value;

        this.jsonBuilderHelper.getSelectedControl().props.formula={};
        this.jsonBuilderHelper.getSelectedControl().props.formula.operator = operator;

       // this.jsonBuilderHelper.getSelectedControl().props.formula.operVal = 50;
       //  this.jsonBuilderHelper.getSelectedControl().props.formula.isSelected = false;
        localStorage.setItem('template', JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
        // this.jsonBuilderHelper.getSelectedControl().props.formula.isSelected = true;
    }
}