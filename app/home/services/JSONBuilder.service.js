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
    JSONBuilder.prototype.reorder = function (parent) {
        console.log('sorty');
        var i = 1;
        var order = [];
        parent.find('.child').each(function () {
            var currentOrder = jQuery(this).parent().data('order');
            order.push({
                oldOrder: currentOrder,
                newOrder: i++
            });
        });
        for (var control in this.JSONTemplate) {
            for (var element in order) {
                if (this.JSONTemplate[control].order == order[element].oldOrder) {
                    this.JSONTemplate[control].order = order[element].newOrder;
                    break;
                }
            }
        }
    };
    JSONBuilder.prototype.addNewChild = function (parent, child, childTemplate) {
        this.JSONTemplate.push(childTemplate);
        this.sort(parent);
        //jQuery(child).remove();		
    };
    JSONBuilder.prototype.sort = function (parent) {
        this.reorder(parent);
        this.JSONTemplate.sort(function (a, b) { return ((a.order < b.order) ? -1 : ((a.order > b.order) ? 1 : 0)); });
        console.log(this.JSONTemplate);
    };
    JSONBuilder.prototype.getJSONBuilt = function () {
        return this.JSONTemplate;
    };
    JSONBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JSONBuilder);
    return JSONBuilder;
}());
exports.JSONBuilder = JSONBuilder;
//# sourceMappingURL=JSONBuilder.service.js.map