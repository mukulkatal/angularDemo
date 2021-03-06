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
var EditorButton = (function () {
    function EditorButton() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorButton.prototype, "control", void 0);
    EditorButton = __decorate([
        core_1.Component({
            selector: 'editor-button',
            template: "\n\t\t<div class=\"butn-details\">\n\t\t\t<span>{{control.type}}:</span>\n\t\t\t<div class=\"desc-switch\">\n\t\t\t\t<input type=\"checkbox\" name=\"properties-checkbox\" checked data-size=\"mini\" [(ngModel)] = \"control.props.currentValue\">\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], EditorButton);
    return EditorButton;
}());
exports.EditorButton = EditorButton;
//# sourceMappingURL=editor_button.component.js.map