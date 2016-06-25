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
var control_component_1 = require('../../../templates/controls/control.component');
var JSONBuilder_service_1 = require('../../services/JSONBuilder.service');
var ComponentManager = (function () {
    function ComponentManager(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.templateJson = jsonBuilderHelper.getJSONBuilt();
    }
    ComponentManager.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery(".sortable1").sortable({
            connectWith: 'ul',
            //cursor: "move",
            cursor: "pointer",
            opacity: 0.5,
            revert: true,
            scroll: false,
            stop: function () {
                jQuery(self.jsonBuilderHelper.getSelectedControl().type).click();
            },
            out: function () {
                var order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                self.jsonBuilderHelper.sort(order);
            },
            receive: function (event, ui) {
                var order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                self.jsonBuilderHelper.multiSectionSort(jQuery(this).attr("data-section"), ui.item.index(), order);
            },
        }).disableSelection();
    };
    ComponentManager.prototype.selectControl = function (control) {
        this.jsonBuilderHelper.setSelectedControl(control);
    };
    ComponentManager = __decorate([
        core_1.Component({
            selector: 'component-manager',
            directives: [control_component_1.Control],
            template: "\n\t<div class=\"a\">\n\t<div  *ngFor=\"let page of templateJson.pages\" (mousedown)=\"jsonBuilderHelper.setSelectedPage(page)\" >\n\t\t<ul \t\t\t\n\t\t\t*ngFor=\"let section of page.sections,let s=index\"\t\t\n\t\t\t[attr.data-section]=\"s+1\"\n\t\t\tclass=\"col s12 m12 sortable1 mt40 z-depth-3\"\n\t\t\t(mousedown)=\"jsonBuilderHelper.setSelectedSection(section)\"\n\t\t>\n\t\t \n\t\t\t<li class=\"child p20 \" *ngFor=\"let control of section.items,let i=index\" \n\t\t\t\t[attr.data-order]=\"i+1\"\n\t\t\t\t(mousedown)=\"selectControl(control)\"\t\t\t\t\t\n\t\t\t>\n\t\t\t\t{{control.type}}\n\t\t\t</li>\n\t\t\n\t\t</ul>\n\t</div>\t\n\t</div>\t\n\t"
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], ComponentManager);
    return ComponentManager;
}());
exports.ComponentManager = ComponentManager;
//# sourceMappingURL=component_manager.component.js.map