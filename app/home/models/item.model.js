"use strict";
var Item = (function () {
    function Item(type, title, helpText) {
        this.order = "";
        this.type = "";
        this.props = {
            title: "",
            currentValue: "",
            helpText: "",
        };
        this.config = {
            type: "",
            showHelp: "",
            showControl: "",
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
        this.options = [
            {
                type: "",
                label: "male",
                value: "1",
                selected: "true",
                icon: "",
                attr: {
                    class: "",
                    style: "",
                }
            },
            {
                type: "",
                label: "female",
                value: "0",
                selected: "",
                icon: "",
                attr: {
                    class: "",
                    style: "",
                }
            }
        ];
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
    Item.prototype.setPlaceHolder = function (placeholder) {
        this.config.placeholder = placeholder;
    };
    Item.prototype.setOptions = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i - 0] = arguments[_i];
        }
        for (var option in options)
            this.options.push(options[option]);
    };
    Item.prototype.deserialize = function (input) {
        for (var prop in input) {
            if (typeof input[prop] === 'object')
                jQuery.extend(true, this[prop], input[prop]);
            else
                this[prop] = input[prop] || this[prop];
        }
        return this;
    };
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.model.js.map