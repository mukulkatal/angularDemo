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
    Editor.prototype.ngOnInit = function () {
        if (this.jsonBuilderHelper.getSelectedModel() == 'Page')
            this.title = this.jsonBuilderHelper.getSelectedPage().type;
        else if (this.jsonBuilderHelper.getSelectedModel() == 'Control')
            this.title = this.jsonBuilderHelper.getSelectedControl().type;
    };
    Editor = __decorate([
        core_1.Component({
            selector: 'editor',
            directives: [editor_1.EDITORS, switch_component_1.Switch],
            template: "\n\t  \t\t<div class=\"main-side \" for=\"text-input\">\n                <div class=\"sidebar-topselector\">\n                    <div class=\"card-layout\">\n                        title\n                    </div>\n                </div>\n                <div class=\"sidebar-bottomselector\">\n                    <div class=\"type-details\"  *ngIf=\"jsonBuilderHelper.getSelectedModel()!='Page'\">\n                        <div class=\"btn-detail-size col-xs-12 no-padding\">\n                            <span class=\"col-xs-2 no-padding\">Type:</span>\n                                <switch\n                                    *ngIf=\"jsonBuilderHelper.getSelectedControl()\"                                   \n                                >    1\n                                </switch>                           \n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 no-padding\">\n                    <!-- For page editor -->\n                        <editor-page \n                            *ngIf=\"jsonBuilderHelper.getSelectedModel()=='Page'\"\n                            [control]=\"jsonBuilderHelper.getSelectedPage()\"\n                        >\n                        </editor-page>      \n                    <!-- ****  -->    \n\n                        <editor-textfield \n                            *ngIf=\"jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='textfield'\" \n                            [control]=\"jsonBuilderHelper.getSelectedControl()\"\n                        >\n                        </editor-textfield>\n                        <editor-textfield \n                            *ngIf=\"jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='text-area'\" \n                            [control]=\"jsonBuilderHelper.getSelectedControl()\"\n                        >\n                        </editor-textfield>\n                        <editor-selectbox \n                            *ngIf=\"jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='selectbox'\" \n                            [control]=\"jsonBuilderHelper.getSelectedControl()\"\n                        >\n                        </editor-selectbox>\n                        <editor-selectbox \n                            *ngIf=\"jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='radio-button'\" \n                            [control]=\"jsonBuilderHelper.getSelectedControl()\"\n                        >\n                        </editor-selectbox>\n                        <editor-header\n                            *ngIf=\"jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='header'\" \n                            [control]=\"jsonBuilderHelper.getSelectedControl()\"\n                        >\n                        </editor-header>\n                        <editor-button \n                            *ngIf=\"jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='click-button'\" \n                            [control]=\"jsonBuilderHelper.getSelectedControl()\"\n                        >\n                        </editor-button>\n                        <editor-logo \n                            *ngIf=\"jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='logo'\" \n                            [control]=\"jsonBuilderHelper.getSelectedControl()\"></editor-logo>\n                        <editor-slider \n                            *ngIf=\"jsonBuilderHelper.getSelectedModel()=='Control' && jsonBuilderHelper.getSelectedControl().type=='slider'\" \n                            [control]=\"jsonBuilderHelper.getSelectedControl()\"\n                            >\n                        </editor-slider>                       \n                    </div>\n                </div>\n            </div> \n\t"
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], Editor);
    return Editor;
}());
exports.Editor = Editor;
//# sourceMappingURL=editor.component.js.map