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
var Editor = (function () {
    function Editor() {
    }
    __decorate([
        core_1.Input('component_selected'), 
        __metadata('design:type', Object)
    ], Editor.prototype, "selectedComponent", void 0);
    Editor = __decorate([
        core_1.Component({
            selector: 'editor',
            directives: [editor_1.EDITORS],
            template: "\n\t\t<editor-textfield *ngIf=\"selectedComponent.control.type=='textfield'\" [control]=\"selectedComponent.control\"></editor-textfield>\n\t\t<editor-textfield *ngIf=\"selectedComponent.control.type=='text-area'\" [control]=\"selectedComponent.control\"></editor-textfield>\n\t\t<editor-selectbox *ngIf=\"selectedComponent.control.type=='selectbox'\" [control]=\"selectedComponent.control\"></editor-selectbox>\n\t\t<editor-selectbox *ngIf=\"selectedComponent.control.type=='radio-button'\" [control]=\"selectedComponent.control\"></editor-selectbox>\n\t\t<editor-header *ngIf=\"selectedComponent.control.type=='header'\" [control]=\"selectedComponent.control\"></editor-header>\n\t\t<editor-button *ngIf=\"selectedComponent.control.type=='click-button'\" [control]=\"selectedComponent.control\"></editor-button>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Editor);
    return Editor;
}());
exports.Editor = Editor;
//# sourceMappingURL=editor.component.js.map