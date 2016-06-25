/**
 * Created by kay on 25-06-2016.
 */
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
var core_1 = require("@angular/core");
var FormulaBuilder = (function () {
    function FormulaBuilder() {
    }
    FormulaBuilder.prototype.ngOnInit = function () {
        return undefined;
    };
    FormulaBuilder.prototype.onChange = function (formula) {
        // this.formula = formula;
        // this.finalFormula = this.formula;
        try {
            this.finalValue = math.eval(this.finalFormula);
        }
        catch (e) {
            console.log(e);
            this.finalValue = e;
        }
        // console.log(this.finalFormula);
        // console.log(this.finalValue);
    };
    FormulaBuilder.prototype.onClick = function (formula) {
        this.finalFormula = formula;
        try {
            this.finalValue = math.eval(this.finalFormula);
        }
        catch (e) {
            console.log(e);
        }
        console.log(this.finalFormula);
        console.log(this.finalValue);
    };
    FormulaBuilder = __decorate([
        core_1.Component({
            selector: 'formula-builder',
            template: "\n        <textarea [(ngModel)]=\"finalFormula\"  #formula placeholder=\"formula\" (keyup)=\"onChange(value)\" ></textarea>\n        <p (click)=\"onClick(formula.value)\" >Formula : {{finalFormula}}</p>\n\t    <h3 >Amount : {{finalValue}}</h3>\n\t    ",
        }), 
        __metadata('design:paramtypes', [])
    ], FormulaBuilder);
    return FormulaBuilder;
}());
exports.FormulaBuilder = FormulaBuilder;
//# sourceMappingURL=formulaBuilder.component.js.map