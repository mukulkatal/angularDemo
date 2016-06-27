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
var EditorSlider = (function () {
    function EditorSlider(jsonElementHandler) {
        this.jsonElementHandler = jsonElementHandler;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorSlider.prototype, "control", void 0);
    EditorSlider = __decorate([
        core_1.Component({
            selector: 'editor-slider',
            template: "\n\t\tHelp Text : <input type=\"text\" [(ngModel)] = \"control.props.helpText\" />\n\t\tTitle :<input type=\"text\" [(ngModel)] = \"control.props.title\" />\n\t\tPlaceHolder : <input type=\"text\" [(ngModel)] = \"control.config.placeholder\" />\n\t"
        }), 
        __metadata('design:paramtypes', [JSONElement_service_1.JSONElement])
    ], EditorSlider);
    return EditorSlider;
}());
exports.EditorSlider = EditorSlider;
//# sourceMappingURL=editor_slider.component.js.map