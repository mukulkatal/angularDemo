import { Component,Input,Output,EventEmitter , OnInit } from '@angular/core';
//import {TextField,TextArea} from '../../templates/controls/controls';
import {Control} from '../../../templates/controls/control.component';

@Component({
    selector: 'Temp-1',
    directives: [Control],
    viewProviders: [],
    templateUrl: 'app/templates/templateAll/template1/templatesHtml/template1.template.html',
    //styleUrls: ['./stylesheets/template1.css'],
    styles: [

        `
    .m20{
      margin-top:20px;
    }
  `
    ]
})

export class Template1Component implements OnInit
{
    @Output() default_Template = new EventEmitter();
    @Output() selected_control = new EventEmitter();
    
      /*  ---
         default json of the template 
    */
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
        },
        {
            order: 2,
            type: "text-area",
            placeholder: 'This is a text field order 2',
            required: false
        }
    ];

    ngOnInit(){
    /*  ---
            Send json on init for initialize the json 
    */
      this.default_Template.emit({defaulttemp:this.defaultJson});
    }

  
    /*  ---
           when control is selected from particluar template then it pass to parent 
            template component (i.e Template.ts) and then parent template component pass to home component
    */
    selectControl(control) {
        this.selected_control.emit(control);
    }

}