"use strict";
var Page = (function () {
    function Page(type) {
        this.description = "";
        this.type = "";
        this.sections = [];
        this.type = type;
    }
    //add sections to page
    Page.prototype.addSections = function () {
        var sections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sections[_i - 0] = arguments[_i];
        }
        for (var section in sections) {
            sections[section].order = Number(section) + 1;
            this.sections.push(sections[section]);
        }
    };
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=page.model.js.map