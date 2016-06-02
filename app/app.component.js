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
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var controls_1 = require('./templates/controls/controls');
var control_component_1 = require('./templates/controls/control.component');
var JSONBuilder_service_1 = require('./home/services/JSONBuilder.service');
var AppComponent = (function () {
    function AppComponent(dragulaService, jsonBuilderHelper) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.data = {
            placeholder: 'This is a text field.',
            required: false
        };
        this.controls = [
            {
                order: 1,
                type: "textfield",
                placeholder: 'This is a text field order 1',
                required: false
            },
            {
                order: 2,
                type: "textfield",
                placeholder: 'This is a text field order 2',
                required: false
            }
        ];
        jsonBuilderHelper.setTemplate(this.controls);
        dragulaService.setOptions('fifth-bag', {
            copy: true,
            copySortSource: true,
            accepts: function (el, target) {
                return target === document.querySelector('.dropable');
            }
        });
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
    }
    AppComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        var parent = jQuery(el);
        //add if it's new child else sort the order
        if (jQuery(e).hasClass('newChild')) {
            this.jsonBuilderHelper.addNewChild(parent, e, {
                order: -1,
                type: "textfield",
                placeholder: 'This is a text field.',
                required: false
            });
        }
        else {
            this.jsonBuilderHelper.sort(parent);
        }
        //update the components 
        //this.controls = this.jsonBuilderHelper.getJSONBuilt();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [ng2_dragula_1.Dragula, control_component_1.Control, controls_1.TextField],
            providers: [JSONBuilder_service_1.JSONBuilder],
            viewProviders: [ng2_dragula_1.DragulaService],
            template: "\n\t\t\t<div>\n\t\t\t\t<div class='wrapper'>\n\t\t\t\t\t<div class='container dropable' [dragula]='\"fifth-bag\"'>\n\t\t\t\t\t<div>You can move these elements between these two containers</div>\n\t\t\t\t\t<div>Moving them anywhere else isn't quite possible</div>\n\t\t\t\t\t<div>There's also the possibility of moving elements around in the same container, changing their position\n\t\t\t\t\t</div>\n          <div class=\"child\" *ngFor=\"let control of controls\" [attr.data-order]=\"control.order\">\n            <control [data]=\"control\"></control>\n          </div>\n\t\t\t\t</div>\n\t\t\t\t<div class='container' [dragula]='\"fifth-bag\"'>\n\t\t\t\t\t<div>This is the default use case. You only need to specify the containers you want to use</div>\n\t\t\t\t\t<div>More interactive use cases lie ahead</div>\n          <div class=\"newChild child\" data-order=\"-1\"><textfield [data]=\"data\"></textfield></div>\n          </div>\n\t\t\t\t</div>\n\t\t\t</div>\n \t\t\t",
            styles: ["\n    .wrapper {\n      display: table;\n    }\n    .container {\n      display: table-cell;\n      background-color: rgba(255, 255, 255, 0.2);\n      width: 50%;\n    }\n    .container:nth-child(odd) {\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n    .container div,\n    .gu-mirror {\n      margin: 10px;\n      padding: 10px;\n      background-color: rgba(0, 0, 0, 0.2);\n      transition: opacity 0.4s ease-in-out;\n    }\n    .container div {\n      cursor: move;\n      cursor: grab;\n      cursor: -moz-grab;\n      cursor: -webkit-grab;\n    }\n    .gu-mirror {\n      cursor: grabbing;\n      cursor: -moz-grabbing;\n      cursor: -webkit-grabbing;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService, JSONBuilder_service_1.JSONBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map