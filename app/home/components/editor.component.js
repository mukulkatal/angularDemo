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
var editor_1 = require('./editor');
var JSONBuilder_service_1 = require('../services/JSONBuilder.service');
var switch_component_1 = require('./switch.component');
var Editor = (function () {
    function Editor(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    Editor = __decorate([
        core_1.Component({
            selector: 'editor',
            directives: [editor_1.EDITORS, switch_component_1.Switch],
            template: "\n\t  \t\t  <div class=\"main-side \" for=\"text-input\">\n                <div class=\"sidebar-topselector\">\n                    <div class=\"card-layout\">\n                        Question1\n                    </div>\n                </div>\n                <div class=\"sidebar-bottomselector\">\n                    <div class=\"type-details\">\n                        <div class=\"btn-detail-size col-xs-12 no-padding\">\n                            <span class=\"col-xs-2 no-padding\">Type:</span>\n                                <switch\n                                    *ngIf=\"jsonBuilderHelper.getSelectedControl()\"\n                                >\n                                </switch>                           \n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 no-padding\">\n                        <p class=\"type-head\">Question:</p>\n                        <div class=\"heading-box\">\n                            <div class=\"heading-box-top\">\n                                <select class=\"select-default pull-right\" data-width=\"fit\" data-style=\"landing-dropdown\">\n                                    <option>Variable</option>\n                                    <option>Variable</option>\n                                    <option>Variable</option>\n                                    <option>Variable</option>\n                                    <option>Variable</option>\n                                    <option>Variable</option>\n                                </select>\n                                <ul class=\"heading-editor\">\n                                    <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">format_bold</i></a></li>\n                                    <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">format_italic</i></a></li>\n                                    <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">format_color_text</i></a></li>\n                                </ul>\n                            </div>\n                            <textarea type=\"text\" value=\"\" class=\"heading-box-topinput\" rows=\"3\"></textarea>\n                        </div>\n                        <div class=\"lan-description\">\n                            <span>Description:</span>\n                            <div class=\"desc-switch\">\n                                <input type=\"checkbox\" name=\"properties-checkbox\" data-size=\"mini\" data-on-color=\"blue\">\n                            </div>\n                        </div>\n                        <editor-textfield *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='textfield'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-textfield>\n                        <editor-textfield *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='text-area'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-textfield>\n                        <editor-selectbox *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='selectbox'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-selectbox>\n                        <editor-selectbox *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='radio-button'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-selectbox>\n                        <editor-header *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='header'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-header>\n                        <editor-button *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='click-button'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-button>\n                        <editor-logo *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='logo'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-logo>\n                        <editor-slider *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='slider'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-slider>\n                    </div>\n                </div>\n            </div> \n\t"
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], Editor);
    return Editor;
}());
exports.Editor = Editor;
//# sourceMappingURL=editor.component.js.map