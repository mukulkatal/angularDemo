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
var CommonEditor = (function () {
    function CommonEditor() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CommonEditor.prototype, "control", void 0);
    CommonEditor = __decorate([
        core_1.Component({
            selector: 'common-editor',
            template: "\n        <p class=\"type-head\">Question:</p>\n        <div class=\"heading-box\">\n            <div class=\"heading-box-top\">\n                <select class=\"select-default pull-right\" data-width=\"fit\" data-style=\"landing-dropdown\">\n                    <option>Variable</option>\n                    <option>Variable</option>\n                    <option>Variable</option>\n                    <option>Variable</option>\n                    <option>Variable</option>\n                    <option>Variable</option>\n                </select>\n                <ul class=\"heading-editor\">\n                    <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">format_bold</i></a></li>\n                    <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">format_italic</i></a></li>\n                    <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">format_color_text</i></a></li>\n                </ul>\n            </div>\n            <textarea type=\"text\"  class=\"heading-box-topinput\" rows=\"3\" [(ngModel)] = \"control.config.placeholder\" ></textarea>\n        </div>\n        <div class=\"lan-description\">\n            <span>Description:</span>\n            <div class=\"desc-switch\">\n                <input type=\"checkbox\" name=\"properties-checkbox\" data-size=\"mini\" data-on-color=\"blue\">\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CommonEditor);
    return CommonEditor;
}());
exports.CommonEditor = CommonEditor;
//# sourceMappingURL=common_properties.component.js.map