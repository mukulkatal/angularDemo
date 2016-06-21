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
var Button = (function () {
    function Button() {
    }
    Button.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Button.prototype, "data", void 0);
    Button = __decorate([
        core_1.Component({
            selector: 'click-button',
            directives: [],
            viewProviders: [],
            template: "<div class=\"input-field\">\n\t\t\t\t\t<a class=\"waves-effect waves-light btn\">{{data.props.title}}</a>                  \n             </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Button);
    return Button;
}());
exports.Button = Button;
//# sourceMappingURL=button.component.js.map