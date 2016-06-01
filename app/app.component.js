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
var router_deprecated_1 = require('@angular/router-deprecated');
;
var AppComponent = (function () {
    function AppComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.data = {
            placeholder: 'This is a text field.',
            required: false
        };
        this.is = [
            'textfield',
            'textfield'
        ];
        dragulaService.setOptions('fifth-bag', {
            copy: true,
        });
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
    }
    AppComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        console.log(e);
        console.log(el);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [ng2_dragula_1.Dragula, controls_1.TextField, router_deprecated_1.RouterOutlet],
            providers: [core_1.DynamicComponentLoader],
            viewProviders: [ng2_dragula_1.DragulaService],
            template: "\n\t\t\t<div>\n\t\t\t\t<div class='wrapper'>\n\t\t\t\t\t<div class='container' [dragula]='\"fifth-bag\"'>\n\t\t\t\t\t<div>You can move these elements between these two containers</div>\n\t\t\t\t\t<div>Moving them anywhere else isn't quite possible</div>\n\t\t\t\t\t<div>There's also the possibility of moving elements around in the same container, changing their position\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='container' [dragula]='\"fifth-bag\"'>\n\t\t\t\t\t<div>This is the default use case. You only need to specify the containers you want to use</div>\n\t\t\t\t\t<div>More interactive use cases lie ahead</div>\n\t\t\t\t\t<div><textfield [data]=\"data\" id=\"#child\"></textfield></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n \t\t\t",
            styles: ["\n    .wrapper {\n      display: table;\n    }\n    .container {\n      display: table-cell;\n      background-color: rgba(255, 255, 255, 0.2);\n      width: 50%;\n    }\n    .container:nth-child(odd) {\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n    .container div,\n    .gu-mirror {\n      margin: 10px;\n      padding: 10px;\n      background-color: rgba(0, 0, 0, 0.2);\n      transition: opacity 0.4s ease-in-out;\n    }\n    .container div {\n      cursor: move;\n      cursor: grab;\n      cursor: -moz-grab;\n      cursor: -webkit-grab;\n    }\n    .gu-mirror {\n      cursor: grabbing;\n      cursor: -moz-grabbing;\n      cursor: -webkit-grabbing;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map