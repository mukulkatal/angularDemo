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
var controlTemplates_store_1 = require('../../templates/controls/controlTemplates.store');
var JSONElement = (function () {
    function JSONElement() {
    }
    // setTemplate(template: any[]){
    // 	this.JSONTemplate = template;
    // }
    JSONElement.prototype.allAvailableElements = function () {
        var all_elems = ['textfield', 'text-area', 'selectbox', 'radio-button'];
        return all_elems;
    };
    JSONElement.prototype.getJsonOfElem = function (elem_name) {
        var element = controlTemplates_store_1.ControlTemplates[elem_name];
        //assign a random order to element
        element.order = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
        //return a deep copy of object
        return JSON.parse(JSON.stringify(element));
    };
    JSONElement.prototype.getJSONBuilt = function () {
        return this.JSONTemplate;
    };
    JSONElement = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JSONElement);
    return JSONElement;
}());
exports.JSONElement = JSONElement;
//# sourceMappingURL=JSONElement.service.js.map