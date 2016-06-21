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
var JSONBuilder_service_1 = require('../../home/services/JSONBuilder.service');
var Template = (function () {
    function Template(_routeParams, jsonBuilderHelper) {
        this._routeParams = _routeParams;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.default_Template = new core_1.EventEmitter();
    }
    Template.prototype.ngOnInit = function () {
        var name = this._routeParams.get('name');
        if (name) {
            //load template
            this.Temp_name = name;
        }
    };
    // bind Template Json from template parent
    Template.prototype.bind_Template_Json = function (template) {
        this.jsonBuilderHelper.setTemplate(template);
        this.default_Template.emit({ defaulttemp: template });
    };
    /*  ---
           this is passed from the particluar templat component (eg . Template1.component.ts)
           and now we have to pass it to parent template component i.e home component
    */
    Template.prototype.selectControl = function (control) {
        this.jsonBuilderHelper.setSelectedControl(control);
    };
    Template.prototype.selectSection = function (section) {
        this.jsonBuilderHelper.setSelectedSection(section);
    };
    Template.prototype.selectPage = function (page) {
        this.jsonBuilderHelper.setSelectedPage(page);
    };
    __decorate([
        core_1.Input('TempName'), 
        __metadata('design:type', Object)
    ], Template.prototype, "Temp_name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template.prototype, "default_Template", void 0);
    Template = __decorate([
        core_1.Component({
            selector: "Temp",
            directives: [templates_1.TEMPLATES],
            template: "     \n        <div [ngSwitch]=\"Temp_name\">\n            <Temp-1 *ngSwitchWhen=\"'Temp-1'\" *ngSwitchDefault (default_Template)=\"bind_Template_Json($event)\" (selected_control)=\"selectControl($event)\" (selected_section)=\"selectSection($event)\" (selected_page)=\"selectPage($event)\" #template></Temp-1>\n            <Temp-2 *ngSwitchWhen=\"'Temp-2'\" ></Temp-2>\n        </div>\n        \n      ",
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, JSONBuilder_service_1.JSONBuilder])
    ], Template);
    return Template;
}());
exports.Template = Template;
//# sourceMappingURL=Template.component.js.map