"use strict";
var Item = (function () {
    function Item(type, title, helpText) {
        this.order = "";
        this.type = "";
        this.props = {
            title: "",
            helpText: "",
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
            validations: [
                {
                    required: "",
                    message: "",
                    errorClass: "",
                },
                {
                    required: "",
                    message: "",
                    errorClass: "",
                    min: "",
                    max: "",
                }
            ],
            maxSelections: "",
            direction: "",
            placeholder: "",
            defaultvalue: "",
        };
        this.type = type;
        this.props.title = title || "";
        this.props.helpText = helpText || "";
    }
    Item.prototype.setItemType = function (type) {
        this.type = type;
    };
    Item.prototype.setTitle = function (title) {
        this.props.title = title;
    };
    Item.prototype.setHelptext = function (helpText) {
        this.props.helpText = helpText;
    };
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.model.js.map