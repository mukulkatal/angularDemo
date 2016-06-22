import {Component, Input, Output} from '@angular/core';
import {JSONBuilder} from '../services/JSONBuilder.service';
import {JSONElement} from '../services/JSONElement.service';
import {OnInit} from "@angular/core";

@Component({
    selector: 'formula-switch',
    providers: [JSONElement],
    template: `
		<select (change)="onChange($event)" class="display">
			<option *ngFor="let operator of operators" value="{{operator}}"  [selected]="(jsonBuilderHelper.getSelectedControl().props.operator==operator)">{{operator}}</option>
		</select>
	`,
    styles: ['.display{display:block}']
})

export class FormulaSwitch {

    operators:string[] = [ '+', '-', '/', '*', '^', 'log' ];

    constructor(private jsonElementHandler:JSONElement, private jsonBuilderHelper:JSONBuilder) {
    }
   onChange($event) {
        let operator = $event.target.value;
        this.jsonBuilderHelper.getSelectedControl().props.operator = operator;
        this.jsonBuilderHelper.getSelectedControl().props.operVal = 50;
        console.log("elemenati" + this.jsonBuilderHelper.getSelectedControl().props.operator +" "+ operator+ " " + (this.jsonBuilderHelper.getSelectedControl().props.operator==operator)+ " "+ this.jsonBuilderHelper.getSelectedControl().props.hasOwnProperty('operator'));
    }
}