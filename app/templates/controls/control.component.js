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
            directives: [controls_1.CONTROLS],
            template: "\n          <textfield *ngIf=\"data.type=='textfield'\" [data]=\"data\"></textfield>\n          <text-area *ngIf=\"data.type=='text-area'\" [data]=\"data\" ></text-area>\n          <selectbox *ngIf=\"data.type=='selectbox'\" [data]=\"data\" ></selectbox>\n          <radio-button *ngIf=\"data.type=='radio-button'\" [data]=\"data\" ></radio-button>\n          <header *ngIf=\"data.type=='header'\" [data]=\"data\" ></header>\n          <click-button *ng If=\"data.type=='click-button'\" [data]=\"data\" ></click-button>\n      \t\t<logo *ngIf=\"data.type=='logo'\" [data]=\"data\" ></logo>\n          <slider *ngIf=\"data.type=='slider'\" [data]=\"data\" ></slider>\n          <date-picker *ngIf=\"data.type=='date-picker'\" [data]=\"data\" ></date-picker>\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], Control);
    return Control;
}());
exports.Control = Control;
//# sourceMappingURL=control.component.js.map