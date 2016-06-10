import { Component,Input,Output,EventEmitter , OnInit } from '@angular/core';
import {SectionComponent} from './components/sections.component';
import {Control} from '../../../templates/controls/control.component';

@Component({
    selector: 'Temp-1',
    directives: [Control,SectionComponent],
    viewProviders: [],
    templateUrl: 'app/templates/templateAll/template1/templatesHtml/template1.template.html',
    styleUrls: ['node_modules/materialize-css/dist/css/materialize.min.css'],
    styles: [
        `
            .p20{
              padding-bottom:20px;
            }
            .mt40
            {
              margin-top: 40px;
            }
        `
    ]
})

export class Template1Component implements OnInit
{
    @Output() default_Template = new EventEmitter();
    @Output() selected_control = new EventEmitter();
    @Output() selected_section = new EventEmitter();
    /*  ---
        default json of the template 
    */
    defaultJson = {
    "app": {
        "pages": [{
            "sections": [{
                "order":1,
                "items": [
                {
                    "order": 1,
                    "type": "textfield",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "text",
                        "attr": [{
                            "class": "customeClass",
                            "style": "heightcolorred"
                        }],
                        "validations": [{
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error"
                        }, {
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error",
                            "min": "0",
                            "max": "100"
                        }],
                        "maxSelections": 1,
                        "direction": "horizontal",
                        "placeholder": "this textfield in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [{
                        "type": "toggel",
                        "lable": "OPTION 1",
                        "value": "10",
                        "selected": false,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    }]
                },
                {
                    "order": 2,
                    "type": "text-area",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "text",
                        "attr": [{
                            "class": "customeClass",
                            "style": "heightcolorred"
                        }],
                        "validations": [{
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error"
                        }, {
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error",
                            "min": "0",
                            "max": "100"
                        }],
                        "maxSelections": 1,
                        "direction": "horizontal",
                        "placeholder": "this text area in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [{
                        "type": "toggel",
                        "lable": "OPTION 1",
                        "value": "10",
                        "selected": false,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    }]
                }




                ]
            },
            {
                "order":2,
                "items": [
                {
                    "order": 1,
                    "type": "text-area",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "text",
                        "attr": [{
                            "class": "customeClass",
                            "style": "heightcolorred"
                        }],
                        "validations": [{
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error"
                        }, {
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error",
                            "min": "0",
                            "max": "100"
                        }],
                        "maxSelections": 1,
                        "direction": "horizontal",
                        "placeholder": "this text areea in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [{
                        "type": "toggel",
                        "lable": "OPTION 1",
                        "value": "10",
                        "selected": false,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    }]
                },
                {
                     "order": 2,
                    "type": "textfield",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "text",
                        "attr": [{
                            "class": "customeClass",
                            "style": "heightcolorred"
                        }],
                        "validations": [{
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error"
                        }, {
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error",
                            "min": "0",
                            "max": "100"
                        }],
                        "maxSelections": 1,
                        "direction": "horizontal",
                        "placeholder": "this textfield in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [{
                        "type": "toggel",
                        "lable": "OPTION 1",
                        "value": "10",
                        "selected": false,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    }]
                }
                ]
            },
            ]
        },

        {
            "sections": [{
                "order":1,
                "items": [
                {
                    "order": 1,
                    "type": "textfield",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "text",
                        "attr": [{
                            "class": "customeClass",
                            "style": "heightcolorred"
                        }],
                        "validations": [{
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error"
                        }, {
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error",
                            "min": "0",
                            "max": "100"
                        }],
                        "maxSelections": 1,
                        "direction": "horizontal",
                        "placeholder": "this textfield in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [{
                        "type": "toggel",
                        "lable": "OPTION 1",
                        "value": "10",
                        "selected": false,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    }]
                },
                {
                    "order": 2,
                    "type": "text-area",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "text",
                        "attr": [{
                            "class": "customeClass",
                            "style": "heightcolorred"
                        }],
                        "validations": [{
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error"
                        }, {
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error",
                            "min": "0",
                            "max": "100"
                        }],
                        "maxSelections": 1,
                        "direction": "horizontal",
                        "placeholder": "this text area in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [{
                        "type": "toggel",
                        "lable": "OPTION 1",
                        "value": "10",
                        "selected": false,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    }]
                }




                ]
            },
            {
                "order":2,
                "items": [
                {
                    "order": 1,
                    "type": "text-area",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "text",
                        "attr": [{
                            "class": "customeClass",
                            "style": "heightcolorred"
                        }],
                        "validations": [{
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error"
                        }, {
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error",
                            "min": "0",
                            "max": "100"
                        }],
                        "maxSelections": 1,
                        "direction": "horizontal",
                        "placeholder": "this text areea in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [{
                        "type": "toggel",
                        "lable": "OPTION 1",
                        "value": "10",
                        "selected": false,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    }]
                },
                {
                     "order": 2,
                    "type": "textfield",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "text",
                        "attr": [{
                            "class": "customeClass",
                            "style": "heightcolorred"
                        }],
                        "validations": [{
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error"
                        }, {
                            "required": "true",
                            "message": "This field is required",
                            "errorClass": "error",
                            "min": "0",
                            "max": "100"
                        }],
                        "maxSelections": 1,
                        "direction": "horizontal",
                        "placeholder": "this textfield in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [{
                        "type": "toggel",
                        "lable": "OPTION 1",
                        "value": "10",
                        "selected": false,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    }]
                }
                ]
            },
            ]
        }

        ]
    }
};
    
    
    
    
    
    //[

    //     {
    //         order: 1,
    //         type: "textfield",
    //         placeholder: 'This is a text field order 1',
    //         required: false
    //     },
    //     {
    //         order: 2,
    //         type: "text-area",
    //         placeholder: 'This is a text field order 2',
    //         required: false
    //     },
    //     {
    //         order: 3,
    //         type: "textfield",
    //         placeholder: 'This is a text field order 3',
    //         required: false
    //     },
    //     {
    //         order: 4,
    //         type: "text-area",
    //         placeholder: 'This is a text field order 4',
    //         required: false
    //     }
    // ];

    ngOnInit(){
    /*  ---
        end json on init for initialize the json 
    */
      this.default_Template.emit({defaulttemp:this.defaultJson});
      console.log(this.defaultJson.app.pages[0].sections[0].items);
    }

  
    /*  ---
        when control is selected from particluar template then it pass to parent 
        template component (i.e Template.ts) and then parent template component pass to home component
    */
    selectControl(control) {
        this.selected_control.emit(control);
    }
    
    selectSection(section){
       this.selected_section.emit(section);
    }

}