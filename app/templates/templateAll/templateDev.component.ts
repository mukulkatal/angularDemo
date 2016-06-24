import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {TEMPLATES} from './templates';
import {JSONBuilder} from '../../home/services/JSONBuilder.service';
import {JSONElement} from "../../home/services/JSONElement.service";

declare var jQuery:any;

@Component({
    selector: "Temp",
    directives: [TEMPLATES],
    template: `
        <div [ngSwitch]="Temp_name">
            <Temp-1 *ngSwitchWhen="'Temp-1'"
                (selected_control)="jsonBuilderHelper.setSelectedControl($event)"
                (selected_section)="jsonBuilderHelper.setSelectedSection($event)"
                (selected_page)="jsonBuilderHelper.setSelectedPage($event)"
                [JSON_Template]="JSON_Template">
            </Temp-1>
            <Temp-2 *ngSwitchWhen="'Temp-2'" ></Temp-2>
        </div>

      `,
})

export class TemplateDev implements OnInit {
    @Input('TempName') Temp_name;
    @Input('JSON_Template') JSON_Template;
    @Output() default_Template = new EventEmitter();
    newJSONObj:any;
    oldJSONObj:any;

    defaultJson = {
        "app": {
            "pages": [{
                "description": "page 1",
                "order": 1,
                "sections": [
                    {
                        "description": "registeration Page",
                        "order": 1,
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
                                        "width": "100",
                                        "height": "60",
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
                        "description": "Login Page",
                        "order": 2,
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
                        "order": 1,
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
                            "order": 2,
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

    ngOnInit() {
        //get json from "server or local storage"
        let template = localStorage.getItem('template');
        if (template) {
            //if present then assign it.
            this.JSON_Template = JSON.parse(template);
        }
        this.JSON_Template = this.defaultJson;
        this.jsonBuilderHelper.setTemplate(this.JSON_Template);

        //From internet;
        this.newJSONObj = this.JSON_Template;
        this.oldJSONObj = this.JSON_Template;
        jQuery.extend(this.oldJSONObj, this.newJSONObj);

        //emit to home component.
        this.default_Template.emit(this.JSON_Template);
    }


    constructor(private jsonBuilderHelper:JSONBuilder) {

    }
}



