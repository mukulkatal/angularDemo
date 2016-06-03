import { Component, OnInit } from '@angular/core';
import {TextField} from '../templates/controls/controls';
import {Control} from '../templates/controls/control.component';
import { JSONBuilder } from './services/JSONBuilder.service';
import { JSONElement } from './services/JSONElement.service';

import { Editor } from './components/editor.component';

declare var jQuery: any;
declare var interact: any;
declare var window: any;

@Component({
  selector: 'my-app',
  directives: [Control, TextField, Editor],
  providers: [JSONBuilder,JSONElement],
  viewProviders: [],
  templateUrl: 'app/home/home.template2.html'
})

export class HomeComponent implements OnInit {
  
  controls = [
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
  
  elements : any[];
  constructor(private jsonBuilderHelper: JSONBuilder,private jsonElementHandler:JSONElement) {    
    this.elements = jsonElementHandler.allAvailableElements();   
    jsonBuilderHelper.setTemplate(this.controls);
  }
  
   
  ngOnInit(){

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
        onend: function(event) {
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
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

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
      ondropactivate: function(event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
      },
      ondragenter: function(event) {
        var draggableElement = event.relatedTarget,
          dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
        draggableElement.textContent = 'Dragged in';
      },
      ondragleave: function(event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
        event.relatedTarget.textContent = 'Dragged out';
      },
      ondrop: function(event) {

         let e  = event.relatedTarget;
         let parent = jQuery('#outer-dropzone');
        // //add if it's new child else sort the order
        if (jQuery(e).hasClass('newChild')) {
            console.log(jQuery(e).data('type'));
         
           var jsonElement = self.jsonElementHandler.getJsonOfElem(jQuery(e).data('type'));
          console.log(jsonElement);
          self.jsonBuilderHelper.addNewChild(parent,e, {
             order: -1,
             type: "textfield",
             placeholder: 'This is a text field.',
             required: false
           });
          //self.controls = self.jsonBuilderHelper.getJSONBuilt();
        }
        else{
          self.jsonBuilderHelper.sort(parent);
        }
        console.log(self.controls);
        event.relatedTarget.textContent = 'Dropped';
      },
      ondropdeactivate: function(event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
      }
    });
  }

  selectedControl: any = this.controls[0];
  openEditor(control){
    //var result = jQuery.grep(this.controls, function(e) { return e.order == order; });
    this.selectedControl = control;
    console.log(this.controls);
  }
}
