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
var SelectBox = (function () {
    function SelectBox() {
    }
    SelectBox.prototype.ngOnInit = function () {
    };
    SelectBox.prototype.onChange = function (value) {
        this.data.props.formula.operVal = value;
        this.data.props.formula.isSelected = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectBox.prototype, "data", void 0);
    SelectBox = __decorate([
        core_1.Component({
            selector: 'selectbox',
            directives: [],
            viewProviders: [],
            template: "\n    <div class=\"\">     \n        <select class=\"validate\" [required]=\"data.required\" class=\"display\"\n        (change)=\"onChange($event.target.value)\"\n        >\n          <option  \n        \n              *ngFor=\"let option of data.options\"  \n              value=\"{{option.value}}\" \n              [selected]=\"option.selected\">\n              {{option.label}}\n          </option>\n        </select>\n    </div>\n\t",
            styles: ['.display{display:block}']
        }), 
        __metadata('design:paramtypes', [])
    ], SelectBox);
    return SelectBox;
}());
exports.SelectBox = SelectBox;
//# sourceMappingURL=selectbox.component.js.map