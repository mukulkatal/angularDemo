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
var Slider = (function () {
    function Slider() {
    }
    Slider.prototype.ngOnInit = function () {
    };
    Slider.prototype.onChange = function (value) {
        this.data.props.formula.operVal = value;
        this.data.props.formula.isSelected = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "data", void 0);
    Slider = __decorate([
        core_1.Component({
            selector: 'slider',
            directives: [],
            viewProviders: [],
            template: "<div class=\"range-field\" (change)=\"onChange($event.target.value)\">\n     \t \t\t\t<input type=\"range\" id=\"test5\" min=\"0\" max=\"100\" />\n    \t\t   </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Slider);
    return Slider;
}());
exports.Slider = Slider;
//# sourceMappingURL=slider.component.js.map