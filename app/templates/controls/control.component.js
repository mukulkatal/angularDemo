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
var controls_1 = require('./controls');
var Control = (function () {
    function Control() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Control.prototype, "data", void 0);
    Control = __decorate([
        core_1.Component({
            selector: 'control',
            directives: [controls_1.TextField, controls_1.TextArea, controls_1.SelectBox],
            template: "\n\t\t\t    <textfield *ngIf=\"data.type=='textfield'\" [data]=\"data\"></textfield>\n      \t\t\t<text-area *ngIf=\"data.type=='text-area'\" [data]=\"data\" ></text-area>\n      \t\t\t<selectbox *ngIf=\"data.type=='selectbox'\" [data]=\"data\" ></selectbox>\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], Control);
    return Control;
}());
exports.Control = Control;
//# sourceMappingURL=control.component.js.map