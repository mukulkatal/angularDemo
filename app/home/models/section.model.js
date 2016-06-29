"use strict";
var item_model_1 = require('./item.model');
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
        for (var item in items) {
            items[item].order = Number(item) + 1;
            this.items.push(items[item]);
        }
    };
    Section.prototype.deserialize = function (input) {
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                for (var item in input[prop]) {
                    this.items.push(new item_model_1.Item('', '', '').deserialize(input[prop][item]));
                }
            }
            else
                this[prop] = input[prop] || this[prop];
        }
        return this;
    };
    return Section;
}());
exports.Section = Section;
//# sourceMappingURL=section.model.js.map