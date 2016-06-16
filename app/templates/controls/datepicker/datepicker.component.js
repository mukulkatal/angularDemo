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
var DatePicker = (function () {
    function DatePicker() {
    }
    DatePicker.prototype.ngOnInit = function () {
        jQuery('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatePicker.prototype, "data", void 0);
    DatePicker = __decorate([
        core_1.Component({
            selector: 'date-picker',
            directives: [],
            viewProviders: [],
            template: "<div class=\"\">\n\t\t\t\t\t<p>{{data.props.title}}<p>\n\t\t\t\t\t<input type=\"date\" class=\"datepicker\">                \n             </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], DatePicker);
    return DatePicker;
}());
exports.DatePicker = DatePicker;
//# sourceMappingURL=datepicker.component.js.map