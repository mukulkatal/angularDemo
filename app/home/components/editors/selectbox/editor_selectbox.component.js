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
var JSONElement_service_1 = require('../../../services/JSONElement.service');
var EditorSelectBox = (function () {
    function EditorSelectBox(jsonElementHandler) {
        this.jsonElementHandler = jsonElementHandler;
    }
    EditorSelectBox.prototype.add_Option_In_Dropdown = function () {
        var control = this.jsonElementHandler.getJsonOfElem('selectbox');
        this.control.options.push(control.options);
    };
    EditorSelectBox.prototype.delete_Option_From_Items = function (options, index) {
        options.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorSelectBox.prototype, "control", void 0);
    EditorSelectBox = __decorate([
        core_1.Component({
            selector: 'editor-selectbox',
            template: "\n\t\t<div class=\"type-details\">\n\t\t\t<p class=\"type-head\">Options:</p>\n\t\t\t<div class=\"col-xs-12 no-padding text-group\" *ngFor=\"let option of control.options ; let i = index\">\n\t\t\t\t<span class=\"no-padding form-label\"><span class=\"default-label\">{{i+1}}</span></span>\n\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t<input type=\"text\" class=\"form-text\" placeholder=\"Label\" [(ngModel)] = \"option.label\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t<input type=\"text\" class=\"form-text\" placeholder=\"Value\" [(ngModel)] = \"option.value\">\n\t\t\t\t</div>\n\t\t\t\t<!-- More button -->\n\t\t\t\t<div class=\"btn-group  more-options\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t<i class=\"material-icons\">more</i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t<li><a href=\"javascript:void(0);\" (click)=\"delete_Option_From_Items(control.options,i)\">Delete</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0);\" >Set as Default</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 no-padding text-group\">\n\t\t\t\t<span class=\"no-padding form-label\">4:</span>\n\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t<a href=\"javascript:void(0);\" (click)=\"add_Option_In_Dropdown()\" class=\"default\">Add Option</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [JSONElement_service_1.JSONElement])
    ], EditorSelectBox);
    return EditorSelectBox;
}());
exports.EditorSelectBox = EditorSelectBox;
//# sourceMappingURL=editor_selectbox.component.js.map