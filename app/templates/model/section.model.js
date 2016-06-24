"use strict";
var item_model_1 = require('./item.model');
var Section = (function () {
    function Section() {
        this.description = "";
        this.order = "";
        this.items = [new item_model_1.Item, new item_model_1.Item, new item_model_1.Item, new item_model_1.Item];
    }
    return Section;
}());
exports.Section = Section;
//# sourceMappingURL=section.model.js.map