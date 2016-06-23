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
        var sectionItems = this._selectedSection.items;
        for (var control in sectionItems) {
            for (var index in order) {
                if (sectionItems[control].order == order[index]) {
                    sectionItems[control].order = Number(index) + 1;
                    break;
                }
            }
        }
    };
    JSONBuilder.prototype.addNewChild = function (childTemplate) {
        this._selectedSection.items.push(childTemplate);
    };
    JSONBuilder.prototype.sort = function (order) {
        this.reorder(order);
        this._selectedSection.items.sort(function (a, b) { return ((a.order < b.order) ? -1 : ((a.order > b.order) ? 1 : 0)); });
    };
    JSONBuilder.prototype.getJSONBuilt = function () {
        return this.JSONTemplate;
    };
    JSONBuilder.prototype.setSelectedControl = function (control) {
        console.log(control);
        this.selectedControl = control;
    };
    JSONBuilder.prototype.setSelectedSection = function (section) {
        this._selectedSection = section;
    };
    JSONBuilder.prototype.setSelectedPage = function (page) {
        this._selectedPage = page;
    };
    JSONBuilder.prototype.getSelectedSection = function () {
        return this._selectedSection;
    };
    JSONBuilder.prototype.getSelectedPage = function () {
        return this._selectedPage;
    };
    JSONBuilder.prototype.getSelectedControl = function () {
        return this.selectedControl;
    };
    JSONBuilder.prototype.changeControl = function (newControl) {
        //index of old control in array
        var index = jQuery.inArray(this.selectedControl, this._selectedSection.items);
        //replace oldControl with newControl at index	
        this._selectedSection.items[index].type = newControl;
    };
    JSONBuilder.prototype.deleteControl = function () {
        //index of old control in arra
        var index = jQuery.inArray(this.selectedControl, this._selectedSection.items);
        //replace oldControl with newControl at index		
        this._selectedSection.items.splice(index, 1);
        // choose the next selected element from template section    
        if (this._selectedSection.items.length > 0)
            this.selectedControl = this._selectedSection.items[0];
        else
            this.selectedControl = '';
    };
    JSONBuilder.prototype.multiSectionSort = function (sectionIndex, itemIndex, order) {
        var sectionItems = this._selectedPage.sections[sectionIndex - 1].items;
        sectionItems.splice(itemIndex, 0, this.selectedControl);
        // delete control from out section
        this.deleteControl();
        //sort the parent array	
        this.sort;
        // sort the result section
        jQuery.each(sectionItems, function (key, item) {
            item.order = key + 1;
        });
    };
    JSONBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JSONBuilder);
    return JSONBuilder;
}());
exports.JSONBuilder = JSONBuilder;
//# sourceMappingURL=JSONBuilder.service.js.map