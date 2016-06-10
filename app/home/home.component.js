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
var switch_component_1 = require('./components/switch.component');
var HomeComponent = (function () {
    function HomeComponent(jsonBuilderHelper, jsonElementHandler) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this.elements = jsonElementHandler.allAvailableElements();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    /*
      --  output from the templates for default json and handle selected control
    */
    HomeComponent.prototype.bind_Template_Json = function (data) {
        this.controls = data.defaulttemp.defaulttemp;
        //this.jsonBuilderHelper.setTemplate(this.controls);
        //this.selectedControl = this.controls[0];
        /*jQuery(".sortable-section").sortable({
            // cursor: "move",
            // opacity: 0.5,
            // revert: true,
            // scroll: false,
            //cursorAt: { left: 250, top: 250 },
            update: function() {
              //get order from DOM
              let order = jQuery(".sortable-section").sortable("toArray", { attribute: "data-order" });
              console.log(order);
              //sort the array
              self.jsonBuilderHelper.sort(order);
            }
        });*/
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
    HomeComponent.prototype.onControlSelect = function (control) {
        this.selectedControl = control;
        console.log(this.selectedControl);
    };
    HomeComponent.prototype.onSectionSelect = function (section) {
        this.selectedSection = section;
        this.jsonBuilderHelper.setTemplate(this.selectedSection.items);
        console.log(this.selectedSection);
    };
    HomeComponent.prototype.onClick = function (e) {
        var jsonElement = this.jsonElementHandler.getJsonOfElem('textfield');
        this.jsonBuilderHelper.addNewChild(jsonElement);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [control_component_1.Control, editor_component_1.Editor, Template_component_1.Template, switch_component_1.Switch],
            providers: [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement],
            viewProviders: [],
            templateUrl: 'app/home/home.template.html',
            styles: [
                '.mt20{margin-top:20px}'
            ],
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map