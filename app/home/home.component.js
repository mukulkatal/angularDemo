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
var controls_1 = require('../templates/controls/controls');
var control_component_1 = require('../templates/controls/control.component');
var JSONBuilder_service_1 = require('./services/JSONBuilder.service');
var JSONElement_service_1 = require('./services/JSONElement.service');
var editor_component_1 = require('./components/editor.component');
var HomeComponent = (function () {
    function HomeComponent(jsonBuilderHelper, jsonElementHandler) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this.controls = [
            {
                order: 1,
                type: "textfield",
                placeholder: 'This is a text field order 1',
                required: false
            },
            {
                order: 3,
                type: "textfield",
                placeholder: 'This is a text field order 3',
                required: false
            },
            {
                order: 2,
                type: "textfield",
                placeholder: 'This is a text field order 2',
                required: false
            }
        ];
        this.selectedControl = this.controls[0];
        this.elements = jsonElementHandler.allAvailableElements();
        jsonBuilderHelper.setTemplate(this.controls);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var self = this;
        // target elements with the "draggable" class
        interact('.draggable')
            .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            restrict: {
                restriction: ".canvas",
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // enable autoScroll
            autoScroll: true,
            // call this function on every dragmove event
            onmove: dragMoveListener,
            // call this function on every dragend event
            onend: function (event) {
                var textEl = event.target.querySelector('p');
                textEl && (textEl.textContent =
                    'moved a distance of '
                        + (Math.sqrt(event.dx * event.dx +
                            event.dy * event.dy) | 0) + 'px');
            }
        });
        function dragMoveListener(event) {
            var target = event.target, 
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx, y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            // translate the element
            target.style.webkitTransform =
                target.style.transform =
                    'translate(' + x + 'px, ' + y + 'px)';
            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }
        // this is used later in the resizing and gesture demos
        window.dragMoveListener = dragMoveListener;
        // enable draggables to be dropped into this
        interact('.dropzone').dropzone({
            // Require a 75% element overlap for a drop to be possible
            overlap: 0.75,
            ondropactivate: function (event) {
                // add active dropzone feedback
                event.target.classList.add('drop-active');
            },
            ondragenter: function (event) {
                var draggableElement = event.relatedTarget, dropzoneElement = event.target;
                // feedback the possibility of a drop
                dropzoneElement.classList.add('drop-target');
                draggableElement.classList.add('can-drop');
                draggableElement.textContent = 'Dragged in';
            },
            ondragleave: function (event) {
                // remove the drop feedback style
                event.target.classList.remove('drop-target');
                event.relatedTarget.classList.remove('can-drop');
                event.relatedTarget.textContent = 'Dragged out';
            },
            ondrop: function (event) {
                var e = event.relatedTarget;
                var parent = jQuery('#outer-dropzone');
                // //add if it's new child else sort the order
                if (jQuery(e).hasClass('newChild')) {
                    console.log(jQuery(e).data('type'));
                    var jsonElement = self.jsonElementHandler.getJsonOfElem(jQuery(e).data('type'));
                    console.log(jsonElement);
                    self.jsonBuilderHelper.addNewChild(parent, e, {
                        order: -1,
                        type: "textfield",
                        placeholder: 'This is a text field.',
                        required: false
                    });
                }
                else {
                    self.jsonBuilderHelper.sort(parent);
                }
                console.log(self.controls);
                event.relatedTarget.textContent = 'Dropped';
            },
            ondropdeactivate: function (event) {
                // remove active dropzone feedback
                event.target.classList.remove('drop-active');
                event.target.classList.remove('drop-target');
            }
        });
    };
    HomeComponent.prototype.openEditor = function (control) {
        //var result = jQuery.grep(this.controls, function(e) { return e.order == order; });
        this.selectedControl = control;
        console.log(this.controls);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [control_component_1.Control, controls_1.TextField, editor_component_1.Editor],
            providers: [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement],
            viewProviders: [],
            templateUrl: 'app/home/home.template2.html'
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map