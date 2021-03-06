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
var control_component_1 = require('../templates/controls/control.component');
var templateDev_component_1 = require('../templates/templateAll/templateDev.component');
var editor_component_1 = require('./components/editor.component');
var switch_component_1 = require('./components/switch.component');
var JSONBuilder_service_1 = require('./services/JSONBuilder.service');
var JSONElement_service_1 = require('./services/JSONElement.service');
var component_manager_component_1 = require('./components/component_manager/component_manager.component');
var model_1 = require('./models/model');
var HomeComponent = (function () {
    function HomeComponent(jsonBuilderHelper, jsonElementHandler) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this.TempName = "Temp-1";
        this.elements = jsonElementHandler.allAvailableElements();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        /* On click outside the div hide sidebar container */
        jQuery(document).mouseup(function (e) {
            console.log('mouseup');
            var container = jQuery("#sidebar");
            if (!container.is(e.target) // if the target of the click isn't the container...
                && (container.has(e.target).length === 0)) {
                if (!jQuery('.ed-sidebar a').is(e.target)) {
                    container.hide('slide', {
                        direction: 'right',
                        easing: 'linear'
                    }, 400);
                }
                else {
                    container.show('slide', {
                        direction: 'right',
                        easing: 'linear'
                    }, 400);
                }
            }
        });
        // /* End of funtion */
    };
    /*
    --  output from the templates for default json and handle selected control
    */
    HomeComponent.prototype.bind_Template_Json = function (data) {
        this.controls = data;
        //drag and sort elements in a section
        var self = this;
        jQuery(".sortable").sortable({
            //connectWith:   '.sortable-section',
            cursor: "move",
            opacity: 0.5,
            revert: true,
            scroll: false,
            //cursorAt: { left: 250, top: 250 },
            update: function () {
                //get order from DOM
                var order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                //sort the array
                self.jsonBuilderHelper.sort(order);
            }
        }).disableSelection();
    };
    HomeComponent.prototype.onClick = function (e) {
        var item = new model_1.Item('textfield', '', '');
        this.jsonBuilderHelper.getSelectedSection().addItems(item);
    };
    HomeComponent.prototype.onPreview = function () {
        localStorage.setItem('template', JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            directives: [router_deprecated_1.RouterLink, control_component_1.Control, editor_component_1.Editor, templateDev_component_1.TemplateDev, switch_component_1.Switch, component_manager_component_1.ComponentManager],
            providers: [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement],
            viewProviders: [],
            templateUrl: 'home1.template.html',
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map