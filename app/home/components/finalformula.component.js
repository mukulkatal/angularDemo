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
var JSONBuilder_service_1 = require('../services/JSONBuilder.service');
var JSONElement_service_1 = require('../services/JSONElement.service');
var FinalFormula = (function () {
    function FinalFormula(jsonElementHandler, jsonBuilderHelper) {
        this.jsonElementHandler = jsonElementHandler;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.finalFormula = "0";
        this.toggle = new core_1.EventEmitter();
        this.finalValue = math.eval(this.finalFormula);
        this.controls = [
            'text-area', 'textfield', 'selectbox', 'radio-button', 'header', 'logo', 'click-button', 'slider'
        ];
    }
    FinalFormula.prototype.eachRecursive = function (obj) {
        for (var k in obj) {
            if (typeof obj[k] == "object" && obj[k] !== null)
                this.eachRecursive(obj[k]);
            else {
                if (k == 'operator') {
                    this.finalFormula += obj[k].toString();
                }
            }
        }
    };
    FinalFormula.prototype.onClick = function ($event) {
        //  console.log(this.jsonBuilderHelper.getSelectedPage().finalFormula);
        //console.log(this.jsonBuilderHelper.getJSONBuilt());
        this.finalFormula = '';
        this.eachRecursive(this.jsonBuilderHelper.getJSONBuilt());
        this.finalFormula = this.finalFormula.substr(1, this.finalFormula.length);
        this.finalValue = math.eval(this.finalFormula);
        this.toggle.emit(this.finalValue);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FinalFormula.prototype, "toggle", void 0);
    FinalFormula = __decorate([
        core_1.Component({
            selector: 'final-formula',
            providers: [JSONElement_service_1.JSONElement],
            template: "\n\t<p (click)=\"onClick(event)\" >Formula : {{finalFormula}}</p>\n\t<h3 >Amount : {{finalValue}}</h3>\n\t",
            styles: ['.display{display:block}']
        }), 
        __metadata('design:paramtypes', [JSONElement_service_1.JSONElement, JSONBuilder_service_1.JSONBuilder])
    ], FinalFormula);
    return FinalFormula;
}());
exports.FinalFormula = FinalFormula;
//# sourceMappingURL=finalformula.component.js.map