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
var RadioButton = (function () {
    function RadioButton() {
    }
    RadioButton.prototype.ngOnInit = function () {
        console.log('Done');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RadioButton.prototype, "data", void 0);
    RadioButton = __decorate([
        core_1.Component({
            selector: 'radio-button',
            directives: [],
            viewProviders: [],
            template: "\n   <div> \n   <div> title : {{data.props.title}}  </div>\n   <div> helptext : {{data.props.helpText}}  </div>\n    <p *ngFor=\"let radio_item of data.options, let i = index\">\n        <input  \n            [(ngModel)]=\"radio_item.value\"\n            type=\"radio\"\n            id=\"radio{{i}}\"\n            class=\"validate\"\n            name=\"group\" \n            [required]=\"data.required\"          \n            [checked]=\"radio_item.selected\"\n          />         \n      <label attr.for=\"radio{{i}}\">{{radio_item.label}}</label>    \n    </p>\n  </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], RadioButton);
    return RadioButton;
}());
exports.RadioButton = RadioButton;
//# sourceMappingURL=radiobutton.component.js.map