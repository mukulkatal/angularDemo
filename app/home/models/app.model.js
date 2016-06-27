"use strict";
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
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.model.js.map