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
var templates_1 = require('./templates');
var JSONBuilder_service_1 = require('../../home/services/JSONBuilder.service');
var TemplateDev = (function () {
    function TemplateDev(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.default_Template = new core_1.EventEmitter();
    }
    TemplateDev.prototype.ngOnInit = function () {
    };
    // bind Template Json from template parent
    TemplateDev.prototype.bind_Template_Json = function (template) {
        this.jsonBuilderHelper.setTemplate(template);
        this.default_Template.emit(template);
    };
    __decorate([
        core_1.Input('TempName'), 
        __metadata('design:type', Object)
    ], TemplateDev.prototype, "Temp_name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TemplateDev.prototype, "default_Template", void 0);
    TemplateDev = __decorate([
        core_1.Component({
            selector: "Temp",
            directives: [templates_1.TEMPLATES],
            template: "     \n        <div [ngSwitch]=\"Temp_name\">\n            <Temp-1 *ngSwitchWhen=\"'Temp-1'\" \n                (default_Template)=\"bind_Template_Json($event)\" \n                (selected_control)=\"jsonBuilderHelper.setSelectedControl($event)\" \n                (selected_section)=\"jsonBuilderHelper.setSelectedSection($event)\" \n                (selected_page)=\"jsonBuilderHelper.setSelectedPage($event)\">\n            </Temp-1>\n            <Temp-2 *ngSwitchWhen=\"'Temp-2'\" ></Temp-2>\n        </div>\n        \n      ",
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], TemplateDev);
    return TemplateDev;
}());
exports.TemplateDev = TemplateDev;
//# sourceMappingURL=templateDev.component.js.map