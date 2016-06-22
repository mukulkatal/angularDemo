import {Component, Input} from '@angular/core';
import {EDITORS} from './editor';
import {JSONBuilder} from '../services/JSONBuilder.service';

@Component({
    selector: 'editor',
    directives: [EDITORS],
    template: `
		<editor-textfield *ngIf="jsonBuilderHelper.getSelectedControl().type=='textfield'" [control]="jsonBuilderHelper.getSelectedControl()"></editor-textfield>
		<editor-textfield *ngIf="jsonBuilderHelper.getSelectedControl().type=='text-area'" [control]="jsonBuilderHelper.getSelectedControl()"></editor-textfield>
		<editor-selectbox *ngIf="jsonBuilderHelper.getSelectedControl().type=='selectbox'" [control]="jsonBuilderHelper.getSelectedControl()"></editor-selectbox>
		<editor-selectbox *ngIf="jsonBuilderHelper.getSelectedControl().type=='radio-button'" [control]="jsonBuilderHelper.getSelectedControl()"></editor-selectbox>
		<editor-header *ngIf="jsonBuilderHelper.getSelectedControl().type=='header'" [control]="jsonBuilderHelper.getSelectedControl()"></editor-header>
		<editor-button *ngIf="jsonBuilderHelper.getSelectedControl().type=='click-button'" [control]="jsonBuilderHelper.getSelectedControl()"></editor-button>
		<editor-logo *ngIf="jsonBuilderHelper.getSelectedControl().type=='logo'" [control]="jsonBuilderHelper.getSelectedControl()"></editor-logo>
		<editor-slider *ngIf="jsonBuilderHelper.getSelectedControl().type=='slider'" [control]="jsonBuilderHelper.getSelectedControl()"></editor-slider>
	`
})

export class Editor {

    constructor(private jsonBuilderHelper:JSONBuilder) {
    }
}