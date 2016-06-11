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
        this.control_selected = new core_1.EventEmitter();
    }
    /*
        -- Change event function event for select
     */
    Switch.prototype.onChange = function ($event) {
        var control = this.jsonElementHandler.getJsonOfElem($event.target.value);
        console.log('control');
        console.log(control);
        //set order of new control same as of old control
        control.order = this.control.order;
        //relace control in jsonTemplate
        JSONBuilder_service_1.JSONBuilder.changeControl(this.control, control, this.jsonTemplate.items);
        //update current control
        this.control = control;
        // emit output param for update editor		
        this.control_selected.emit(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Switch.prototype, "control", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Switch.prototype, "jsonTemplate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Switch.prototype, "control_selected", void 0);
    Switch = __decorate([
        core_1.Component({
            selector: 'switch',
            providers: [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement],
            template: "\n\t\t<select (change)=\"onChange($event)\" class=\"display\">\n\t\t\t<option value=\"text-area\" [selected]=\"control.type=='text-area'\">Text Area</option>\n\t\t\t<option value=\"textfield\" [selected]=\"control.type=='textfield'\">Text Field</option>\n\t\t\t<option value=\"selectbox\" [selected]=\"control.type=='selectbox'\">DropDown</option>\n\t\t</select>\n\t",
            styles: ['.display{display:block}']
        }), 
        __metadata('design:paramtypes', [JSONElement_service_1.JSONElement, JSONBuilder_service_1.JSONBuilder])
    ], Switch);
    return Switch;
}());
exports.Switch = Switch;
//# sourceMappingURL=switch.component.js.map