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
var Editor = (function () {
    function Editor() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Editor.prototype, "value", void 0);
    Editor = __decorate([
        core_1.Component({
            selector: 'editor',
            template: "\n\t\t<div>\n\t\t<div>\n\t\t<lable>order</lable><input type=\"text\" [(ngModel)]=\"value.order\" />\n\t\t</div>\n\t\t<div>\n\t\t<lable>type</lable><input type=\"type\" [(ngModel)]=\"value.type\" />\n\t\t</div>\n\t\t<div>\n\t\t<lable>Placeholder</lable><input type=\"type\" [(ngModel)]=\"value.placeholder\" />\n\t\t</div>\n\t\t<div>\n\t\t<lable>required</lable><input type=\"type\" [(ngModel)]=\"value.required\" />\n\t\t</div>\t\n\t\t<div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Editor);
    return Editor;
}());
exports.Editor = Editor;
//# sourceMappingURL=editor.component.js.map