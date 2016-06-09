import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Control} from '../templates/controls/control.component';
import { JSONBuilder } from './services/JSONBuilder.service';
import { JSONElement } from './services/JSONElement.service';
import { Template } from '../templates/templateAll/Template.component';
import { Editor } from './components/editor.component';

declare var jQuery: any;

declare var window: any;

@Component({
  selector: 'my-app',
  directives: [Control, Editor, Template],
  providers: [JSONBuilder, JSONElement],
  viewProviders: [],
  templateUrl: 'app/home/home.template.html',
})

export class HomeComponent implements OnInit {
  controls: any[];
  //TempName : any = "Temp-1" ; 
  selectedControl: any;

  ngOnInit() {
  }

  /*
    --  output from the templates for default json and handle selected control
  */

  bind_Template_Json(data: any) {
    this.controls = data.defaulttemp.defaulttemp;
    this.jsonBuilderHelper.setTemplate(this.controls);
    //this.selectedControl = this.controls[0];

    //drag and sort elements in a section
    let self = this;
    jQuery(".sortable").sortable({
      cursor: "move",
      opacity: 0.5,
      revert: true,
      scroll: false,
      //cursorAt: { left: 250, top: 250 },
      update: function() {
        //get order from DOM
        let order = jQuery(".sortable").sortable("toArray", { attribute: "data-order" });
        //sort the array
        self.jsonBuilderHelper.sort(order);
      }
    }).disableSelection();

  }

  elements: any[];
  constructor(private jsonBuilderHelper: JSONBuilder, private jsonElementHandler: JSONElement) {
    this.elements = jsonElementHandler.allAvailableElements();
  }

  onControlSelect(control) {
    this.selectedControl = control;
  }

  onClick(e){
     var jsonElement = this.jsonElementHandler.getJsonOfElem('textfield');
     console.log(this.controls);

     this.controls.push(jsonElement);

     console.log(this.controls);

     // add elemnt in UI
     //this.jsonBuilderHelper.addNewChild(parent,e, jsonElement);
  }  
}
