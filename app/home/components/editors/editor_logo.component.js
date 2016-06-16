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
var EditorLogo = (function () {
    function EditorLogo() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorLogo.prototype, "control", void 0);
    EditorLogo = __decorate([
        core_1.Component({
            selector: 'editor-logo',
            template: "\n\t\t<div>\n\t\t\tURL :<input type=\"text\" [(ngModel)] = \"control.props.title\" />\n\t\t\tHelp Text : <input type=\"text\" [(ngModel)] = \"control.props.helpText\" />\n\t\t\t\n\t\t\tAlter Text : <input type=\"text\" [(ngModel)] = \"control.config.placeholder\" />\n\t\t\tWidth:<input type=\"text\" [(ngModel)] = \"control.config.attr.width\" />\n\t\t\tHeight:<input type=\"text\" [(ngModel)] = \"control.config.attr.height\" />\n\t\t</div>\t\t\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], EditorLogo);
    return EditorLogo;
}());
exports.EditorLogo = EditorLogo;
//# sourceMappingURL=editor_logo.component.js.map