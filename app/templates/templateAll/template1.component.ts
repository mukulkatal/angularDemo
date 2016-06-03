import { Component,Input,Output,EventEmitter , OnInit } from '@angular/core';
import {TextField,TextArea} from '../../templates/controls/controls';
import {Control} from '../../templates/controls/control.component';
// import { JSONBuilder } from '../../home/services/JSONBuilder.service';
// import { JSONElement } from '../../home/services/JSONElement.service';

// declare var jQuery: any;
// declare var interact: any;
// declare var window: any;

@Component({
  selector: 'Template-1',
  directives: [Control, TextField,TextArea],
  viewProviders: [],
  templateUrl: 'app/templates/templateAll/templatesHtml/template1.template.html',
  //styleUrls: ['./stylesheets/template1.css'],
})

export class Template1Component implements OnInit
{
    @Output() defaultTemplate = new EventEmitter();
    defaultJson = [
    {
      order: 1,
      type: "textfield",
      placeholder: 'This is a text field order 1',
      required: false
    },
    {
      order: 3,
      type: "textfield",
      placeholder: 'This is a text field order 3',
      required: false
    },
    {
      order: 2,
      type: "text-area",
      placeholder: 'This is a text field order 2',
      required: false
    }
  ];
  
  
  // jsondefault() {
   
  // }
  
  // elements : any[];
  // constructor(private jsonBuilderHelper: JSONBuilder,private jsonElementHandler:JSONElement) {    
  //   this.elements = jsonElementHandler.allAvailableElements();   
  //   jsonBuilderHelper.setTemplate(this.controls);
  // }
  
    ngOnInit(){
      this.defaultTemplate.emit({defaulttemp:this.defaultJson});
  }

}