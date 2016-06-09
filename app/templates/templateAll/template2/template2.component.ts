import { Component,Input,Output,EventEmitter , OnInit } from '@angular/core';
//import {TextField,TextArea} from '../../templates/controls/controls';
import {Control} from '../../../templates/controls/control.component';
// import { JSONBuilder } from '../../home/services/JSONBuilder.service';
// import { JSONElement } from '../../home/services/JSONElement.service';

// declare var jQuery: any;
// declare var interact: any;
// declare var window: any;

@Component({
    selector: 'Temp-2',
    directives: [Control],
    viewProviders: [],
    templateUrl: 'app/templates/templateAll/template2/templatesHtml/template2.template.html',
    //styleUrls: ['./stylesheets/template1.css'],
})

export class Template2Component implements OnInit
{
    @Output() defaultTemplate = new EventEmitter();
    @Output() controlSelected = new EventEmitter();

    defaultJson = [
        
                // Json conditions
                /*
                   ---  Field : textfield    ----            
                   
                */ 
                "textfield" : {
                                order: 1,
                                type: "textfield",
                                "props": {
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
                "text-area" : {
                                
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
                 "select-box" : {
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
      this.defaultTemplate.emit({defaulttemp:this.defaultJson});
    }

 
    selectControl(control) {
        this.controlSelected.emit(control);
    }

}