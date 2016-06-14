import { Component, Input } from '@angular/core';
import { EditorSelectBox,EditorTextField} from './editor';

@Component({
	selector: 'editor',
	directives: [EditorSelectBox, EditorTextField],
	template: `
		<editor-textfield *ngIf="selectedComponent.control.type=='textfield'" [control]="selectedComponent.control"></editor-textfield>
		<editor-textfield *ngIf="selectedComponent.control.type=='text-area'" [control]="selectedComponent.control"></editor-textfield>
		<editor-selectbox *ngIf="selectedComponent.control.type=='selectbox'" [control]="selectedComponent.control"></editor-selectbox>
		<editor-selectbox *ngIf="selectedComponent.control.type=='radio-button'" [control]="selectedComponent.control"></editor-selectbox>
	`
})

export class Editor {
	@Input('component_selected') selectedComponent: any;
	
}