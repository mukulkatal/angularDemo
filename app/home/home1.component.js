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
var control_component_1 = require('../templates/controls/control.component');
var JSONBuilder_service_1 = require('./services/JSONBuilder.service');
var JSONElement_service_1 = require('./services/JSONElement.service');
var Template_component_1 = require('../templates/templateAll/Template.component');
var editor_component_1 = require('./components/editor.component');
var Home1Component = (function () {
    function Home1Component(jsonBuilderHelper, jsonElementHandler) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this.elements = jsonElementHandler.allAvailableElements();
    }
    Home1Component.prototype.ngOnInit = function () {
    };
    /*
      --  output from the templates for default json and handle selected control
    */
    Home1Component.prototype.bind_Template_Json = function (data) {
        this.controls = data.defaulttemp.defaulttemp;
        this.jsonBuilderHelper.setTemplate(this.controls);
        this.selectedControl = this.controls[0];
        console.log(this.controls);
        //drag and sort elements in a section
        var self = this;
        jQuery(".sortable").sortable({
            cursor: "move",
            opacity: 0.5,
            revert: true,
            scroll: false,
            //cursorAt: { left: 250, top: 250 },
            update: function () {
                //get order from DOM
                var order = jQuery(".sortable").sortable("toArray", { attribute: "data-order" });
                //sort the array
                self.jsonBuilderHelper.sort(order);
            }
        }).disableSelection();
    };
    Home1Component.prototype.onControlSelect = function (control) {
        this.selectedControl = control;
    };
    Home1Component = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [control_component_1.Control, editor_component_1.Editor, Template_component_1.Template],
            providers: [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement],
            viewProviders: [],
            templateUrl: 'app/home/home.template.html',
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement])
    ], Home1Component);
    return Home1Component;
}());
exports.Home1Component = Home1Component;
//# sourceMappingURL=home1.component.js.map