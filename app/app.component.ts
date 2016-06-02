import { Component } from '@angular/core';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import {TextField} from './templates/controls/controls';
import {Control} from './templates/controls/control.component';
import { JSONBuilder } from './home/services/JSONBuilder.service';
// import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

// @RouteConfig([
//   {path:'/newCom', name: 'Component', component: TextField}
// ]);

declare var jQuery: any;

@Component({
  selector: 'my-app',
  directives: [Dragula, Control, TextField],
  providers: [JSONBuilder],
  viewProviders: [DragulaService],
  template: `
			<div>
				<div class='wrapper'>
					<div class='container dropable' [dragula]='"fifth-bag"'>
					<div>You can move these elements between these two containers</div>
					<div>Moving them anywhere else isn't quite possible</div>
					<div>There's also the possibility of moving elements around in the same container, changing their position
					</div>
          <div class="child" *ngFor="let control of controls" [attr.data-order]="control.order">
            <control [data]="control"></control>
          </div>
				</div>
				<div class='container' [dragula]='"fifth-bag"'>
					<div>This is the default use case. You only need to specify the containers you want to use</div>
					<div>More interactive use cases lie ahead</div>
          <div class="newChild child" data-order="-1"><textfield [data]="data"></textfield></div>
          </div>
				</div>
			</div>
 			`,
  styles: [`
    .wrapper {
      display: table;
    }
    .container {
      display: table-cell;
      background-color: rgba(255, 255, 255, 0.2);
      width: 50%;
    }
    .container:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .container div,
    .gu-mirror {
      margin: 10px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      transition: opacity 0.4s ease-in-out;
    }
    .container div {
      cursor: move;
      cursor: grab;
      cursor: -moz-grab;
      cursor: -webkit-grab;
    }
    .gu-mirror {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
    `]
})

export class AppComponent { 

  data = {
    placeholder: 'This is a text field.',
    required: false
  };

  controls = [
    {
      order: 1,
      type:"textfield",
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

  constructor(private dragulaService: DragulaService, private jsonBuilderHelper: JSONBuilder) {
    jsonBuilderHelper.setTemplate(this.controls);

    dragulaService.setOptions('fifth-bag', {
      copy: true,
      copySortSource: true,
      accepts: function(el, target) {
        return target === document.querySelector('.dropable')
      }
    });

    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
  }

  onDrop(args) {
    let [e, el] = args;
    
    let parent = jQuery(el);
    //add if it's new child else sort the order
    if (jQuery(e).hasClass('newChild')) {
      this.jsonBuilderHelper.addNewChild(parent,e, {
        order: -1,
        type: "textfield",
        placeholder: 'This is a text field.',
        required: false
      });
    }
    else{
      this.jsonBuilderHelper.sort(parent);
    }

    //update the components 
    //this.controls = this.jsonBuilderHelper.getJSONBuilt();
  }
}
