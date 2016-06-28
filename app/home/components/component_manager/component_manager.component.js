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
                console.log('recieve');
                self.jsonBuilderHelper.multiSectionSort(jQuery(this).attr("data-section"), ui.item.index(), order);
            },
        }).disableSelection();
        jQuery('.side-scroll').slimScroll({
            height: '94vh'
        });
        jQuery('.panel-scroll').slimScroll({
            height: '82vh'
        });
    };
    ComponentManager.prototype.selectControl = function (control) {
        this.jsonBuilderHelper.setSelectedControl(control);
    };
    ComponentManager.prototype.selectModel = function (type) {
        event.stopPropagation();
        this.jsonBuilderHelper.setSelectedModel(type);
    };
    ComponentManager = __decorate([
        core_1.Component({
            selector: 'component-manager',
            directives: [control_component_1.Control],
            templateUrl: 'app/home/components/component_manager/component_manager.template.html',
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], ComponentManager);
    return ComponentManager;
}());
exports.ComponentManager = ComponentManager;
//# sourceMappingURL=component_manager.component.js.map