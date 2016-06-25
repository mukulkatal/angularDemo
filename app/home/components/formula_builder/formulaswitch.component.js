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
var JSONBuilder_service_1 = require('../../services/JSONBuilder.service');
var JSONElement_service_1 = require('../../services/JSONElement.service');
var FormulaSwitch = (function () {
    function FormulaSwitch(jsonElementHandler, jsonBuilderHelper) {
        this.jsonElementHandler = jsonElementHandler;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.operators = ['+', '-', '/', '*', '^', 'log'];
    }
    FormulaSwitch.prototype.onChange = function ($event) {
        var operator = $event.target.value;
        this.jsonBuilderHelper.getSelectedControl().props.formula = {};
        this.jsonBuilderHelper.getSelectedControl().props.formula.operator = operator;
        // this.jsonBuilderHelper.getSelectedControl().props.formula.operVal = 50;
        //  this.jsonBuilderHelper.getSelectedControl().props.formula.isSelected = false;
        localStorage.setItem('template', JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
        // this.jsonBuilderHelper.getSelectedControl().props.formula.isSelected = true;
    };
    FormulaSwitch = __decorate([
        core_1.Component({
            selector: 'formula-switch',
            providers: [JSONElement_service_1.JSONElement],
            template: "\n\t\t<select (change)=\"onChange($event)\" class=\"display\">\n\t\t\t<option *ngFor=\"let operator of operators\" value=\"{{operator}}\" >{{operator}}</option>\n\t\t</select>\n\t",
            styles: ['.display{display:block}']
        }), 
        __metadata('design:paramtypes', [JSONElement_service_1.JSONElement, JSONBuilder_service_1.JSONBuilder])
    ], FormulaSwitch);
    return FormulaSwitch;
}());
exports.FormulaSwitch = FormulaSwitch;
//# sourceMappingURL=formulaswitch.component.js.map