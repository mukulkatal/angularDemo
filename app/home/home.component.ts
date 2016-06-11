import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Control} from '../templates/controls/control.component';
import { JSONBuilder } from './services/JSONBuilder.service';
import { JSONElement } from './services/JSONElement.service';
import { Template } from '../templates/templateAll/Template.component';
import { Editor } from './components/editor.component';
import { Switch } from './components/switch.component';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  directives: [Control, Editor, Template, Switch],
  providers: [JSONBuilder, JSONElement],
  viewProviders: [],
  templateUrl: 'home.template.html',
  styles : [
  '.mt20{margin-top:20px}'
  ],
})

export class HomeComponent implements OnInit {
  controls: any[];
  //TempName : any = "Temp-1" ; 
  selectedControl: any;
  selectedSection: any;
  ngOnInit() {
  }

  /*
    --  output from the templates for default json and handle selected control
  */

  bind_Template_Json(data: any) {
    this.controls = data.defaulttemp.defaulttemp;

    //this.jsonBuilderHelper.setTemplate(this.controls);
    //this.selectedControl = this.controls[0];

    /*jQuery(".sortable-section").sortable({    
        // cursor: "move",
        // opacity: 0.5,
        // revert: true,
        // scroll: false,
        //cursorAt: { left: 250, top: 250 },
        update: function() {
          //get order from DOM
          let order = jQuery(".sortable-section").sortable("toArray", { attribute: "data-order" });
          console.log(order);
          //sort the array
          self.jsonBuilderHelper.sort(order);
        }
    });*/
    
    
    //drag and sort elements in a section
    let self = this;
    jQuery(".sortable").sortable({ 
      //connectWith:   '.sortable-section',    
      cursor: "move",
      opacity: 0.5,
      revert: true,
      scroll: false,
      //cursorAt: { left: 250, top: 250 },
      update: function() {
        //get order from DOM
        let order = jQuery(this).sortable("toArray", { attribute: "data-order" });
        console.log(order);
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

    console.log(this.selectedControl);
  }

  onSectionSelect(section) {
    this.selectedSection =  section;
    this.jsonBuilderHelper.setTemplate( this.selectedSection.items);

    console.log(this.selectedSection);
  }

  onClick(e){
    var jsonElement = this.jsonElementHandler.getJsonOfElem('textfield');
    this.jsonBuilderHelper.addNewChild(jsonElement);
  }  
}
