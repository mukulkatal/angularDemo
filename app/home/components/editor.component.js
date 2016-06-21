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
var Editor = (function () {
    function Editor(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    Editor = __decorate([
        core_1.Component({
            selector: 'editor',
            directives: [editor_1.EDITORS],
            template: "\n\t\t<editor-textfield *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='textfield'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-textfield>\n\t\t<editor-textfield *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='text-area'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-textfield>\n\t\t<editor-selectbox *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='selectbox'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-selectbox>\n\t\t<editor-selectbox *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='radio-button'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-selectbox>\n\t\t<editor-header *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='header'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-header>\n\t\t<editor-button *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='click-button'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-button>\n\t\t<editor-logo *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='logo'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-logo>\n\t\t<editor-slider *ngIf=\"jsonBuilderHelper.getSelectedControl().type=='slider'\" [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-slider>\n\t"
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], Editor);
    return Editor;
}());
exports.Editor = Editor;
//# sourceMappingURL=editor.component.js.map