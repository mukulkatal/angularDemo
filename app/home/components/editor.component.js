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
var switch_component_1 = require('./switch.component');
var Editor = (function () {
    function Editor() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Editor.prototype, "control", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Editor.prototype, "jsonTemplate", void 0);
    Editor = __decorate([
        core_1.Component({
            selector: 'editor',
            directives: [switch_component_1.Switch],
            template: "\n\t\t<switch [control]=\"control\" [jsonTemplate] = \"jsonTemplate\"></switch>\n\t\t<input type=\"type\" [(ngModel)]=\"control.placeholder\" />\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Editor);
    return Editor;
}());
exports.Editor = Editor;
//# sourceMappingURL=editor.component.js.map