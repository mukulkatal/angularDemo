"use strict";
var page_model_1 = require('./page.model');
var App = (function () {
    function App() {
        this.description = "";
        this.pages = [];
    }
    //add a page
    App.prototype.addPages = function () {
        var pages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pages[_i - 0] = arguments[_i];
        }
        for (var page in pages)
            this.pages.push(pages[page]);
    };
    App.prototype.deserialize = function (input) {
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                for (var page in input[prop]) {
                    this.pages.push(new page_model_1.Page('').deserialize(input[prop][page]));
                }
            }
            else
                this[prop] = input[prop] || this[prop];
        }
        return this;
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.model.js.map