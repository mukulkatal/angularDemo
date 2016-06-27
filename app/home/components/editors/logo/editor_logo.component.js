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
var EditorLogo = (function () {
    function EditorLogo() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorLogo.prototype, "control", void 0);
    EditorLogo = __decorate([
        core_1.Component({
            selector: 'editor-logo',
            template: "\n\t\t <div class=\"logo-details\">\n\t\t\t<span>{{control.type}}:</span>\n\t\t\t<div class=\"desc-switch\">\n\t\t\t\t<input type=\"checkbox\" name=\"properties-checkbox\" checked data-size=\"mini\" [(ngModel)] = \"control.config.showControl\">\n\t\t\t</div>\n\t\t\t<div class=\"landing-inputfile\">\n\t\t\t\t<div class=\"col-xs-12 no-padding\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"file-input\" placeholder=\"No file\" readonly [(ngModel)] = \"control.props.currentValue\">\n\t\t\t\t\t\t<label class=\"input-group-btn\">\n\t\t\t\t\t\t\t<span class=\"btn btn-default btn-flat btn-basic2\">\n\t\t\t\t\t\t\tUpload <input type=\"file\" style=\"display: none;\">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], EditorLogo);
    return EditorLogo;
}());
exports.EditorLogo = EditorLogo;
//# sourceMappingURL=editor_logo.component.js.map