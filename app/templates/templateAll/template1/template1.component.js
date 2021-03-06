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
var model_1 = require('./../../../home/models/model');
// import {App} from './../../model/app.model';
// import {Page} from './../../model/page.model';
// import {Section} from './../../model/section.model';
// import {Item} from './../../model/item.model';
var Template1Component = (function () {
    //@Input() jsonTemplate;
    /*  ---
        default json of the template
    */
    function Template1Component() {
        //app:any = App();
        this.default_Template = new core_1.EventEmitter();
        this.selected_control = new core_1.EventEmitter();
        this.selected_section = new core_1.EventEmitter();
        this.selected_page = new core_1.EventEmitter();
    }
    Template1Component.prototype.ngOnInit = function () {
        /*  ---
                end json on init for initialize the json
            */
        if (!this.JSON_Template) {
            var app = new model_1.App();
            // add pages in app
            var landingPage = new model_1.Page('Landing Page');
            var questionPage = new model_1.Page('Questionnaire');
            var resultPage = new model_1.Page('Result Page');
            //let page4           = new Page('other');
            app.addPages(landingPage, questionPage, resultPage);
            //add section in landing page
            var section1 = new model_1.Section();
            var section2 = new model_1.Section();
            // landingPage.addSections(section1,section2);
            // // add items in section 1 in landing page
            // let item1  = new Item('textfield','This is textfield','textfield help');
            // let item2  = new Item('text-area','This is textfield','textfield help');       
            // section1.addItems(item1,item2);
            // // add items in section 2 in landing page        
            // item1  = new Item('selectbox','This is textfield','textfield help');
            // item2  = new Item('radio-button','This is textfield','textfield help'); 
            // section2.addItems(item1,item2);
            //add section in question page
            // section1  = new Section();
            // section2  = new Section();
            questionPage.addSections(section1, section2);
            // add items in section 1 in question page
            var item1 = new model_1.Item('textfield', 'This is textfield', 'textfield help');
            var item2 = new model_1.Item('logo', 'This is textfield', 'textfield help');
            section1.addItems(item1, item2);
            // add items in section 2 in question page        
            item1 = new model_1.Item('selectbox', 'This is textfield', 'textfield help');
            item2 = new model_1.Item('header', 'This is textfield', 'textfield help');
            section2.addItems(item1, item2);
            //add section in result page
            section1 = new model_1.Section();
            section2 = new model_1.Section();
            resultPage.addSections(section1, section2);
            // add items in section 1 in result page
            item1 = new model_1.Item('slider', 'This is slider', 'slider help');
            item2 = new model_1.Item('slider', 'This is slider', 'textfield help');
            section1.addItems(item1, item2);
            // add items in section 2 in result page        
            item1 = new model_1.Item('selectbox', 'This is slectbox', 'slectboix help');
            item2 = new model_1.Item('header', 'This is header', 'header help');
            section2.addItems(item1, item2);
            this.JSON_Template = app;
        }
        this.default_Template.emit(this.JSON_Template);
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
    ], Template1Component.prototype, "default_Template", void 0);
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
            directives: [control_component_1.Control, sections_component_1.SectionComponent],
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