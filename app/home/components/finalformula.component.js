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
var JSONElement_service_1 = require('../services/JSONElement.service');
var JSONBuilder_service_1 = require("../services/JSONBuilder.service");
var FinalFormula = (function () {
    function FinalFormula(_jsonBuilder) {
        this._jsonBuilder = _jsonBuilder;
        this.emit1 = new core_1.EventEmitter();
        this.emit2 = new core_1.EventEmitter();
    }
    FinalFormula.prototype.reccusiveTraverse = function (obj) {
        for (var k in obj) {
            if (k == 'formula' && obj[k].isSelected)
                this.finalFormula += obj[k].operator + obj[k].operVal;
            else if (typeof obj[k] == "object" && obj[k] !== null)
                this.reccusiveTraverse(obj[k]);
        }
    };
    FinalFormula.prototype.onClick = function () {
        this.finalFormula = '';
        console.log(this._jsonBuilder.getSelectedControl());
        this.reccusiveTraverse(JSON.parse(localStorage.getItem('template')));
        this.finalFormula = this.finalFormula.substr(1, this.finalFormula.length);
        this.finalValue = math.eval(this.finalFormula);
        this.emit1.emit(this.finalFormula);
        this.emit2.emit(this.finalValue);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FinalFormula.prototype, "emit1", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FinalFormula.prototype, "emit2", void 0);
    FinalFormula = __decorate([
        core_1.Component({
            selector: 'final-formula',
            providers: [JSONElement_service_1.JSONElement],
            template: "\n\t<p (click)=\"onClick()\" >Formula : {{finalFormula}}</p>\n\t<h3 >Amount : {{finalValue}}</h3>\n\t",
            styles: ['.display{display:block}']
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], FinalFormula);
    return FinalFormula;
}());
exports.FinalFormula = FinalFormula;
//# sourceMappingURL=finalformula.component.js.map