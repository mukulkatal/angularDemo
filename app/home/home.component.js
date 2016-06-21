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
var Template_component_1 = require('../templates/templateAll/Template.component');
var editor_component_1 = require('./components/editor.component');
var switch_component_1 = require('./components/switch.component');
var JSONBuilder_service_1 = require('./services/JSONBuilder.service');
var JSONElement_service_1 = require('./services/JSONElement.service');
var component_manager_component_1 = require('./components/component_manager/component_manager.component');
var HomeComponent = (function () {
    function HomeComponent(jsonBuilderHelper, jsonElementHandler) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this.TempName = "Temp-1";
        this.elements = jsonElementHandler.allAvailableElements();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    /*
    --  output from the templates for default json and handle selected control
    */
    HomeComponent.prototype.bind_Template_Json = function (data) {
        this.controls = data.defaulttemp.defaulttemp;
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
                console.log(order);
                //sort the array
                self.jsonBuilderHelper.sort(order);
            }
        }).disableSelection();
    };
    HomeComponent.prototype.onComponentSelect = function (component) {
        this.selectedComponent = component;
        this.jsonBuilderHelper.setTemplate(this.selectedComponent.section.items);
    };
    HomeComponent.prototype.changeControl = function (control) {
        this.selectedComponent.control = control;
    };
    HomeComponent.prototype.onClick = function (e) {
        var jsonElement = this.jsonElementHandler.getJsonOfElem('textfield');
        this.jsonBuilderHelper.addNewChild(jsonElement);
    };
    HomeComponent.prototype.onPreview = function () {
        localStorage.setItem('template', JSON.stringify(this.controls));
    };
    HomeComponent.prototype.loadTemplate = function () {
        var self = this;
        jQuery(".sortable1").sortable({
            connectWith: 'ul',
            //cursor: "move",
            cursor: "pointer",
            opacity: 0.5,
            revert: true,
            scroll: false,
            update: function () {
                //get order from DOM
                // let order = jQuery(this).sortable("toArray", { attribute: "data-order" });
                // console.log(order);
                //sort the array
                //self.jsonBuilderHelper.sort(order);
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
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            directives: [router_deprecated_1.RouterLink, control_component_1.Control, editor_component_1.Editor, Template_component_1.Template, switch_component_1.Switch, component_manager_component_1.ComponentManager],
            providers: [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement],
            viewProviders: [],
            templateUrl: 'home.template.html',
            styles: [
                '.mt20{margin-top:20px}'
            ],
            styleUrls: ['../../node_modules/materialize-css/dist/css/materialize.min.css']
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map