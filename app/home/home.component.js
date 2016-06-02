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
var HomeComponent = (function () {
    function HomeComponent(/*private dragulaService: DragulaService,*/ jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controls = [
            {
                order: 1,
                type: "textfield",
                placeholder: 'This is a text field order 1',
                required: false
            },
            {
                order: 2,
                type: "textfield",
                placeholder: 'This is a text field order 2',
                required: false
            }
        ];
        jsonBuilderHelper.setTemplate(this.controls);
        /*dragulaService.setOptions('fifth-bag', {
          copy: true,
          copySortSource: true,
          accepts: function(el, target) {
            return target === document.querySelector('.dropable')
          }
        });
    
        dragulaService.drop.subscribe((value) => {
          this.onDrop(value.slice(1));
        });*/
    }
    HomeComponent.prototype.ngOnInit = function () {
        // target elements with the "draggable" class
        interact('.draggable')
            .draggable({
            // enable inertial throwing
            inertia: true,
            // manualStart: true,
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
            // only accept elements matching this CSS selector
            // accept: '#yes-drop',
            // Require a 75% element overlap for a drop to be possible
            overlap: 0.75,
            // listen for drop related events:
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
                event.relatedTarget.textContent = 'Dropped';
            },
            ondropdeactivate: function (event) {
                // remove active dropzone feedback
                event.target.classList.remove('drop-active');
                event.target.classList.remove('drop-target');
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [control_component_1.Control, controls_1.TextField],
            providers: [JSONBuilder_service_1.JSONBuilder],
            viewProviders: [],
            templateUrl: 'app/home/home.template2.html'
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map