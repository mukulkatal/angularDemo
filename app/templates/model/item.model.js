"use strict";
var Item = (function () {
    function Item() {
        this.order = "";
        this.type = "";
        this.props = {
            title: "",
            helpText: ""
        };
        this.config = {
            type: "",
            showHelp: "",
            attr: {
                class: "",
                style: "",
                width: "",
                height: "",
            },
        };
    }
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.model.js.map