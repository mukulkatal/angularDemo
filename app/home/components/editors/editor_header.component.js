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
var EditorHeader = (function () {
    function EditorHeader() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorHeader.prototype, "control", void 0);
    EditorHeader = __decorate([
        core_1.Component({
            selector: 'editor-header',
            template: "\n\t\t<div>\n\t\t\tTitle :<input type=\"text\" [(ngModel)] = \"control.props.title\" />\n\t\t\tHelp Text : <input type=\"text\" [(ngModel)] = \"control.props.helpText\" />\t\t\t\n\t\t\tShow Description : \n\t\t\t<p>\n\t\t      <input name=\"group1\" [(ngModel)]=\"control.config.showHelp\" type=\"checkbox\" id=\"test1\" />\n\t\t      <label for=\"test1\">Show Description</label>\n\t\t    </p>\n\n\n\t\t</div>\t\t\t\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], EditorHeader);
    return EditorHeader;
}());
exports.EditorHeader = EditorHeader;
//# sourceMappingURL=editor_header.component.js.map