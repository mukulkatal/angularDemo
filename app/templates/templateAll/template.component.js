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
var router_deprecated_1 = require('@angular/router-deprecated');
var templates_1 = require('./templates');
var Template = (function () {
    function Template(_routeParams) {
        this._routeParams = _routeParams;
    }
    Template.prototype.ngOnInit = function () {
        var name = this._routeParams.get('name');
        if (name) {
            //get json from "server or local storage"
            var template = localStorage.getItem('template');
            if (template) {
                this.JSON_Template = JSON.parse(template);
            }
            else {
            }
            //load template
            this.Temp_name = name;
        }
    };
    __decorate([
        core_1.Input('TempName'), 
        __metadata('design:type', Object)
    ], Template.prototype, "Temp_name", void 0);
    Template = __decorate([
        core_1.Component({
            selector: "Temp",
            directives: [templates_1.TEMPLATES],
            template: "     \n        <div [ngSwitch]=\"Temp_name\">\n            <Temp-1 *ngSwitchWhen=\"'Temp-1'\"\n            [JSON_Template]=\"JSON_Template\"\n            >\n            </Temp-1>\n            <Temp-2 *ngSwitchWhen=\"'Temp-2'\"></Temp-2>\n        </div>\n        \n      ",
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
    ], Template);
    return Template;
}());
exports.Template = Template;
//# sourceMappingURL=template.component.js.map