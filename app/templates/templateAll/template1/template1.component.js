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
//import {TextField,TextArea} from '../../templates/controls/controls';
var control_component_1 = require('../../../templates/controls/control.component');
var Template1Component = (function () {
    function Template1Component() {
        this.default_Template = new core_1.EventEmitter();
        this.selected_control = new core_1.EventEmitter();
        /*  ---
            default json of the template
        */
        this.defaultJson = [
            {
                order: 1,
                type: "textfield",
                placeholder: 'This is a text field order 1',
                required: false
            },
            {
                order: 2,
                type: "text-area",
                placeholder: 'This is a text field order 2',
                required: false
            },
            {
                order: 3,
                type: "textfield",
                placeholder: 'This is a text field order 3',
                required: false
            },
            {
                order: 4,
                type: "text-area",
                placeholder: 'This is a text field order 4',
                required: false
            }
        ];
    }
    Template1Component.prototype.ngOnInit = function () {
        /*  ---
            end json on init for initialize the json
        */
        this.default_Template.emit({ defaulttemp: this.defaultJson });
    };
    /*  ---
        when control is selected from particluar template then it pass to parent
        template component (i.e Template.ts) and then parent template component pass to home component
    */
    Template1Component.prototype.selectControl = function (control) {
        this.selected_control.emit(control);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "default_Template", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "selected_control", void 0);
    Template1Component = __decorate([
        core_1.Component({
            selector: 'Temp-1',
            directives: [control_component_1.Control],
            viewProviders: [],
            templateUrl: 'app/templates/templateAll/template1/templatesHtml/template1.template.html',
            styleUrls: ['node_modules/materialize-css/dist/css/materialize.min.css'],
            styles: [
                "\n            .p20{\n              padding-bottom:20px;\n            }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Template1Component);
    return Template1Component;
}());
exports.Template1Component = Template1Component;
//# sourceMappingURL=template1.component.js.map