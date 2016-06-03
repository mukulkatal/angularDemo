import { Component, Input } from '@angular/core';

@Component({
selector: 'editor',
template: `
<input type="type" [(ngModel)]="value.placeholder" />
`
})

export class Editor {
@Input() value: any;
}