"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var templates_1 = require('./templates');
var JSONBuilder_service_1 = require('../../home/services/JSONBuilder.service');
var TemplateDev = (function () {
    //
    // //From internet;
    // this.newObj=;
    //
    // this.oldObj=this._jsonElement.getJSONBuilt();
    //
    // jQuery.extend( this.oldObj, this.newObj);
    function TemplateDev(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.default_Template = new core_1.EventEmitter();
        this.defaultJson = {
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
    }
    TemplateDev.prototype.ngOnInit = function () {
        //get json from "server or local storage"
        var template = localStorage.getItem('template');
        if (template) {
            //if present then assign it.
            this.JSON_Template = JSON.parse(template);
        }
        this.JSON_Template = this.defaultJson;
        this.jsonBuilderHelper.setTemplate(this.JSON_Template);
        //emit to home component.
        this.default_Template.emit(this.JSON_Template);
    };
    __decorate([
        core_1.Input('TempName'), 
        __metadata('design:type', Object)
    ], TemplateDev.prototype, "Temp_name", void 0);
    __decorate([
        core_1.Input('JSON_Template'), 
        __metadata('design:type', Object)
    ], TemplateDev.prototype, "JSON_Template", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TemplateDev.prototype, "default_Template", void 0);
    TemplateDev = __decorate([
        core_1.Component({
            selector: "Temp",
            directives: [templates_1.TEMPLATES],
            template: "\n        <div [ngSwitch]=\"Temp_name\">\n            <Temp-1 *ngSwitchWhen=\"'Temp-1'\"\n                (selected_control)=\"jsonBuilderHelper.setSelectedControl($event)\"\n                (selected_section)=\"jsonBuilderHelper.setSelectedSection($event)\"\n                (selected_page)=\"jsonBuilderHelper.setSelectedPage($event)\"\n                [JSON_Template]=\"JSON_Template\">\n            </Temp-1>\n            <Temp-2 *ngSwitchWhen=\"'Temp-2'\" ></Temp-2>\n        </div>\n\n      ",
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], TemplateDev);
    return TemplateDev;
}());
exports.TemplateDev = TemplateDev;
//# sourceMappingURL=templateDev.component.js.map