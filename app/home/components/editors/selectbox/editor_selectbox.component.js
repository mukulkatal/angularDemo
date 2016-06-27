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
            template: "\n\t\tHelp Text : <input type=\"text\" [(ngModel)] = \"control.props.helpText\" />\n\t\tTitle :<input type=\"text\" [(ngModel)] = \"control.props.title\" />\n\t\tPlaceHolder : <input type=\"text\" [(ngModel)] = \"control.config.placeholder\" />\n\t\t<div *ngFor=\"let option of control.options ; let i = index\">\n\t\t\t<a (click)=\"delete_Option_From_Items(control.options,i)\" class=\"\" href=\"javascript:void(0);\">delete</a>\n\t\t\t<div class=\"\" >\n\t\t\t\t<div>Option {{i+1}}</div>\n\t\t\t\t<label>Label</label>: <input type=\"text\" [(ngModel)] = \"option.label\" />\n\t\t\t\t<label>Value</label> : <input type=\"text\" [(ngModel)] = \"option.value\" />\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t<a href=\"Javascript:void(0);\" (click)=\"add_Option_In_Dropdown()\">Add</a>\n\t"
        }), 
        __metadata('design:paramtypes', [JSONElement_service_1.JSONElement])
    ], EditorSelectBox);
    return EditorSelectBox;
}());
exports.EditorSelectBox = EditorSelectBox;
//# sourceMappingURL=editor_selectbox.component.js.map