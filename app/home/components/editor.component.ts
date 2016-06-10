import { Component, Input } from '@angular/core';
import { EditorSelectBox,EditorTextField} from './editor';

@Component({
	selector: 'editor',
	directives: [EditorSelectBox, EditorTextField],
	template: `
		<editor-textfield *ngIf="editor_control.type=='textfield'" [control]="editor_control"></editor-textfield>
		<editor-selectbox *ngIf="editor_control.type=='selectbox'" [control]="editor_control"></editor-selectbox>
		
	`
})

export class Editor {
	@Input() editor_control: any;
}