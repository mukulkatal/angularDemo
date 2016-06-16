import { Component, Input } from '@angular/core';
import { EditorSelectBox,EditorTextField,EditorHeader,EditorLogo} from './editor';

@Component({
	selector: 'editor',
	directives: [EditorSelectBox, EditorTextField, EditorHeader,EditorLogo],
	template: `
		<editor-textfield *ngIf="selectedComponent.control.type=='textfield'" [control]="selectedComponent.control"></editor-textfield>
		<editor-textfield *ngIf="selectedComponent.control.type=='text-area'" [control]="selectedComponent.control"></editor-textfield>
		<editor-selectbox *ngIf="selectedComponent.control.type=='selectbox'" [control]="selectedComponent.control"></editor-selectbox>
		<editor-selectbox *ngIf="selectedComponent.control.type=='radio-button'" [control]="selectedComponent.control"></editor-selectbox>
		<editor-header *ngIf="selectedComponent.control.type=='header'" [control]="selectedComponent.control"></editor-header>
		<editor-logo *ngIf="selectedComponent.control.type=='logo'" [control]="selectedComponent.control"></editor-logo>
	`
})

export class Editor {
	@Input('component_selected') selectedComponent: any;
	
}