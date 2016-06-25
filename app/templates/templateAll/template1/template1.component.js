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
var sections_component_1 = require('./components/sections.component');
var control_component_1 = require('../../../templates/controls/control.component');
var finalformula_component_1 = require("../../../home/components/formula_builder/finalformula.component");
var Template1Component = (function () {
    function Template1Component() {
        // @Output() default_Template = new EventEmitter();
        this.selected_control = new core_1.EventEmitter();
        this.selected_section = new core_1.EventEmitter();
        this.selected_page = new core_1.EventEmitter();
    }
    //@Input() jsonTemplate;
    /*  ---
        default json of the template
    */
    Template1Component.prototype.ngOnInit = function () {
        /*  ---
            end json on init for initialize the json
        */
    };
    /*  ---
        when control is selected from particluar template then it pass to parent
        template component (i.e Template.ts) and then parent template component pass to home component
    */
    Template1Component.prototype.selectControl = function (control) {
        this.selected_control.emit(control);
    };
    Template1Component.prototype.selectSection = function (section) {
        this.selected_section.emit(section);
    };
    Template1Component.prototype.selectpage = function (page) {
        this.selected_page.emit(page);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "selected_control", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "selected_section", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "selected_page", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "JSON_Template", void 0);
    Template1Component = __decorate([
        core_1.Component({
            selector: 'Temp-1',
            directives: [control_component_1.Control, sections_component_1.SectionComponent, finalformula_component_1.FinalFormula],
            viewProviders: [],
            templateUrl: 'app/templates/templateAll/template1/templatesHtml/template1.template.html',
            styleUrls: ['node_modules/materialize-css/dist/css/materialize.min.css'],
            styles: [
                "\n            .p20{\n              padding-bottom:20px;\n            }\n            .mt40\n            {\n              margin-top: 40px;\n            }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Template1Component);
    return Template1Component;
}());
exports.Template1Component = Template1Component;
//# sourceMappingURL=template1.component.js.map