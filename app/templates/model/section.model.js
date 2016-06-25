"use strict";
var Section = (function () {
    function Section() {
        this.description = "";
        this.order = "";
        this.items = [];
    }
    //add items to page
    Section.prototype.addItems = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        for (var item in items)
            this.items.push(items[item]);
    };
    return Section;
}());
exports.Section = Section;
//# sourceMappingURL=section.model.js.map