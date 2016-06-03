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
var TextArea = (function () {
    function TextArea() {
        this.defaultData = {
            placeholder: 'Text Area',
            required: false
        };
    }
    TextArea.prototype.ngOnInit = function () {
        this.data = this.defaultData;
        console.log('Done');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextArea.prototype, "data", void 0);
    TextArea = __decorate([
        core_1.Component({
            selector: 'text-area',
            directives: [],
            viewProviders: [],
            template: "\n    <div class=\"input-field\">\n      <textarea class=\"validate\" [required]=\"data.required\" [(ngModel)]=\"value\" ></textarea>\n      <label for=\"first_name\">{{data.placeholder}}</label>\n    </div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TextArea);
    return TextArea;
}());
exports.TextArea = TextArea;
//# sourceMappingURL=textarea.component.js.map