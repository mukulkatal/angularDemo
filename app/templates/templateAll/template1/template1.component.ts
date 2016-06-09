import { Component,Input,Output,EventEmitter , OnInit } from '@angular/core';
//import {TextField,TextArea} from '../../templates/controls/controls';
import {Control} from '../../../templates/controls/control.component';

@Component({
    selector: 'Temp-1',
    directives: [Control],
    viewProviders: [],
    templateUrl: 'app/templates/templateAll/template1/templatesHtml/template1.template.html',
    //styleUrls: ['./stylesheets/template1.css'],
})

export class Template1Component implements OnInit
{
    @Output() default_Template = new EventEmitter();
    @Output() selected_control = new EventEmitter();
    
      /*  ---
         default json of the template 
    */
    defaultJson = [
       
                // Json conditions
                /*
                   ---  Field : textfield    ----            
                   
                */ 
                textfield : {
                                order: 1,
                                type: "textfield",
                                props: {
                                        "title": "This is text field control",
                                        helpText: "SOME HELPER TEXT"
                                       },
                                config: {
                                            type: "text",
                                            attr: [{
                                                    class: "customeClass",
                                                    style: "heightcolorred"
                                                   }],
                                            validations: [  
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error"
                                                            },
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error",
                                                                min: "0",
                                                                max: "100"
                                                            }
                                                        ],
                                            maxSelections: 1,
                                            direction: "horizontal",
                                            placeholder: "this willgo in placeholder",
                                            defaultvalue: "Default Value"
                                        },
                                options: [
                                            {
                                                type: "toggel",
                                                lable: "OPTION 1",
                                                value: "10",
                                                selected: false,
                                                icon: "http://test.com/jd.png",
                                                attr: {
                                                        class: "customeClass",
                                                        style: "height:100;color:red;"
                                                      }
                                            }
                                        ]
                },

                // Json conditions
                /*
                   ---  Field : textArea   ----            
                   
                */    
                text-area : {
                                
                                order: 1,
                                type: "text-area",
                                props: {
                                        title: "This is text area control",
                                        helpText: "SOME HELPER TEXT"
                                       },
                                config: {
                                            type: "text",
                                            attr: [{
                                                    class: "customeClass",
                                                    style: "heightcolorred"
                                                   }],
                                            validations: [  
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error"
                                                            },
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error",
                                                                min: "0",
                                                                max: "100"
                                                            }
                                                        ],
                                            maxSelections: 1,
                                            direction: "horizontal",
                                            placeholder: "this willgo in placeholder",
                                            defaultvalue: "Default Value"
                                        },
                                options: [
                                            {
                                                type: "toggel",
                                                lable: "OPTION 1",
                                                value: "10",
                                                selected: false,
                                                icon: "http://test.com/jd.png",
                                                attr: {
                                                        class: "customeClass",
                                                        style: "height:100;color:red;"
                                                      }
                                            }
                                        ]
                    
                },
                  
                 /*  required control*/
                select-box : {
                                order: 1,
                                type: "select-box",
                                props: {
                                        title: "this is drop down control",
                                        helpText: "SOME HELPER TEXT"
                                       },
                                config: {
                                            type: "text",
                                            attr: [{
                                                    class: "customeClass",
                                                    style: "heightcolorred"
                                                   }],
                                            validations: [  
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error"
                                                            },
                                                            {
                                                                required: true,
                                                                message: "This field is required",
                                                                errorClass: "error",
                                                                min: "0",
                                                                max: "100"
                                                            }
                                                        ],
                                            maxSelections: 1,
                                            direction: "horizontal",
                                            placeholder: "this willgo in placeholder",
                                            defaultvalue: "Default Value"
                                        },
                                options: [
                                            {
                                                type: "toggel",
                                                lable: "OPTION 1",
                                                value: "10",
                                                selected: false,
                                                icon: "http://test.com/jd.png",
                                                attr: {
                                                        class: "customeClass",
                                                        style: "height:100;color:red;"
                                                      }
                                            }
                                        ]
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