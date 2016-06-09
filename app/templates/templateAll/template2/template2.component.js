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
//import {TextField,TextArea} from '../../templates/controls/controls';
var control_component_1 = require('../../../templates/controls/control.component');
// import { JSONBuilder } from '../../home/services/JSONBuilder.service';
// import { JSONElement } from '../../home/services/JSONElement.service';
// declare var jQuery: any;
// declare var interact: any;
// declare var window: any;
var Template2Component = (function () {
    function Template2Component() {
        this.defaultTemplate = new core_1.EventEmitter();
        this.controlSelected = new core_1.EventEmitter();
        this.defaultJson = [
            // Json conditions
            /*
               ---  Field : textfield    ----
               
            */
            "textfield", {
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
            "text-area", {
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
            "select-box", {
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
    }
    Template2Component.prototype.ngOnInit = function () {
        this.defaultTemplate.emit({ defaulttemp: this.defaultJson });
    };
    Template2Component.prototype.selectControl = function (control) {
        this.controlSelected.emit(control);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template2Component.prototype, "defaultTemplate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template2Component.prototype, "controlSelected", void 0);
    Template2Component = __decorate([
        core_1.Component({
            selector: 'Temp-2',
            directives: [control_component_1.Control],
            viewProviders: [],
            templateUrl: 'app/templates/templateAll/template2/templatesHtml/template2.template.html',
        }), 
        __metadata('design:paramtypes', [])
    ], Template2Component);
    return Template2Component;
}());
exports.Template2Component = Template2Component;
//# sourceMappingURL=template2.component.js.map