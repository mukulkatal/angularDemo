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
var JSONBuilder = (function () {
    function JSONBuilder() {
    }
    JSONBuilder.prototype.setTemplate = function (template) {
        this.JSONTemplate = template;
    };
    JSONBuilder.prototype.reorder = function (order) {
        for (var control in this.JSONTemplate) {
            for (var index in order) {
                if (this.JSONTemplate[control].order == order[index]) {
                    this.JSONTemplate[control].order = Number(index) + 1;
                    break;
                }
            }
        }
    };
    JSONBuilder.prototype.addNewChild = function (parent, child, childTemplate) {
        this.JSONTemplate.push(childTemplate);
        //this.sort(parent);		
        //jQuery(child).remove();		
    };
    JSONBuilder.prototype.sort = function (order) {
        this.reorder(order);
        this.JSONTemplate.sort(function (a, b) { return ((a.order < b.order) ? -1 : ((a.order > b.order) ? 1 : 0)); });
    };
    JSONBuilder.prototype.getJSONBuilt = function () {
        return this.JSONTemplate;
    };
    /*
        --  FIND THE INDEX OF OBJECT IN ARRAY
     */
    JSONBuilder.prototype.getObject_Index_InArray = function (Array, Object) {
        return jQuery.inArray(Object, Array);
    };
    JSONBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JSONBuilder);
    return JSONBuilder;
}());
exports.JSONBuilder = JSONBuilder;
//# sourceMappingURL=JSONBuilder.service.js.map