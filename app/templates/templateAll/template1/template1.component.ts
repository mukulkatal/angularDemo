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
    @Output() selected_page = new EventEmitter();

    //@Input() jsonTemplate;
    /*  ---
        default json of the template 
    */
    defaultJson = {
    "app": {
        "pages": [{
            "description": "page 1",
            "order": 1,
            "sections": [
            {
                    "description": "registeration Page",
                    "order":1,
                    "items": [
                    {
                        "order": 1,
                        "type": "logo",
                        "props": {
                            "title": "http://pngimg.com/upload/car_logo_PNG1667.png",
                            "helpText": "testing",
                        },
                        "config": {
                            "type": "text",
                            "showHelp": "1",
                            "attr": {
                                "class": "customeClass",
                                "style": "heightcolorred",
                                "width":"100",
                                "height":"60",
                            },
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
                            "label": "OPTION 1",
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
                        "type": "header",
                        "props": {
                            "title": "this checkbox section question",
                            "helpText": "SOME HELPER TEXT"
                        },
                        "config": {
                            "type": "text",
                            "showHelp": "1",
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
                            "label": "OPTION 1",
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
                "description":"Login Page",
                "order":2,
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
                        "label": "OPTION 1",
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
                        "label": "OPTION 1",
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
                    "order": 3,
                    "type": "selectbox",
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
                        "placeholder": "this select in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [
                    {
                        "type": "toggel",
                        "label": "OPTION 1",
                        "value": "10",
                        "selected": false,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    },
                    {
                        "type": "toggel",
                        "label": "OPTION 2",
                        "value": "10",
                        "selected": true,
                        "icon": "http://test.com/jd.png",
                        "attr": {
                            "class": "customeClass",
                            "style": "height:100;color:red;"
                        }
                    }

                    ]
                },
                {
                    "order": 4,
                    "type": "radio-button",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "radio",
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
                        "placeholder": "this select in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [
                        {
                            "type": "toggel",
                            "label": "OPTION 1",
                            "value": "10",
                            "selected": false,
                            "icon": "http://test.com/jd.png",
                            "attr": {
                                "class": "customeClass",
                                "style": "height:100;color:red;"
                            }
                        },
                        {
                            "type": "toggel",
                            "label": "OPTION 2",
                            "value": "10",
                            "selected": true,
                            "icon": "http://test.com/jd.png",
                            "attr": {
                                "class": "customeClass",
                                "style": "height:100;color:red;"
                            }
                        }

                    ]
                },
                {
                    "order": 5,
                    "type": "header",
                    "props": {
                        "title": "this checkbox section question",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "header",
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
                        "placeholder": "this select in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [
                        {
                            "type": "toggel",
                            "label": "OPTION 1",
                            "value": "10",
                            "selected": false,
                            "icon": "http://test.com/jd.png",
                            "attr": {
                                "class": "customeClass",
                                "style": "height:100;color:red;"
                            }
                        },
                        {
                            "type": "toggel",
                            "label": "OPTION 2",
                            "value": "10",
                            "selected": true,
                            "icon": "http://test.com/jd.png",
                            "attr": {
                                "class": "customeClass",
                                "style": "height:100;color:red;"
                            }
                        }

                    ]
                },
                {
                    "order": 6,
                    "type": "click-button",
                    "props": {
                        "title": "click",
                        "helpText": "SOME HELPER TEXT"
                    },
                    "config": {
                        "type": "click-button",
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
                        "placeholder": "this select in placeholder",
                        "defaultvalue": "Default Value"
                    },
                    "options": [
                        {
                            "type": "toggel",
                            "label": "OPTION 1",
                            "value": "10",
                            "selected": false,
                            "icon": "http://test.com/jd.png",
                            "attr": {
                                "class": "customeClass",
                                "style": "height:100;color:red;"
                            }
                        },
                        {
                            "type": "toggel",
                            "label": "OPTION 2",
                            "value": "10",
                            "selected": true,
                            "icon": "http://test.com/jd.png",
                            "attr": {
                                "class": "customeClass",
                                "style": "height:100;color:red;"
                            }
                        }

                    ]
                },
                {
                    "order": 7,
                    "type": "slider",
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
                        "label": "OPTION 1",
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
                    "order": 8,
                    "type": "date-picker",
                    "props": {
                        "title": "this is datepicker question",
                        "helpText": "Choose date:"
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
                        "label": "OPTION 1",
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
            }
            
           ]
        },

        {
            "description": "Page 2",
            "order": 2,
            "sections": [{
                "description": "demo page",
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
                        "label": "OPTION 1",
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
                        "label": "OPTION 1",
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
                "description": "landing Page",
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
                        "label": "OPTION 1",
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
                        "label": "OPTION 1",
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
    
    
   

    ngOnInit(){
    /*  ---
        end json on init for initialize the json 
    */
        let template = localStorage.getItem('template');
        if(template){
            this.defaultJson = JSON.parse(template);
        }    
        this.default_Template.emit({defaulttemp:this.defaultJson});
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

    selectpage(page)
    {
        this.selected_page.emit(page);
    }
}