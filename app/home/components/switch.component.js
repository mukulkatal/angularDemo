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
var JSONBuilder_service_1 = require('../services/JSONBuilder.service');
var JSONElement_service_1 = require('../services/JSONElement.service');
var Switch = (function () {
    function Switch(jsonElementHandler, jsonBuilderHelper) {
        this.jsonElementHandler = jsonElementHandler;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controls = [
            'text-area', 'textfield', 'selectbox', 'radio-button', 'header', 'logo', 'click-button', 'slider'
        ];
    }
    /*
        -- Change event function event for select
     */
    Switch.prototype.onChange = function ($event) {
        var control = $event.target.value;
        this.jsonBuilderHelper.changeControl(control);
    };
    Switch = __decorate([
        core_1.Component({
            selector: 'switch',
            providers: [JSONElement_service_1.JSONElement],
            template: "\n\t\t\t\t<select \n\t\t\t\t\tclass=\"select-default\" \n\t\t\t\t\t(change)=\"onChange($event)\" \n\t\t\t\t\tdata-width=\"fit\"\n\t\t\t\t>\n\t\t\t        <option *ngFor=\"let control of controls\" value=\"{{control}}\" [selected]=\"jsonBuilderHelper.getSelectedControl().type==control\">{{control}}</option>\n\t\t\t    </select>\n\t",
        }), 
        __metadata('design:paramtypes', [JSONElement_service_1.JSONElement, JSONBuilder_service_1.JSONBuilder])
    ], Switch);
    return Switch;
}());
exports.Switch = Switch;
//# sourceMappingURL=switch.component.js.map