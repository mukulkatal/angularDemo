import { Component, DynamicComponentLoader, Injector } from '@angular/core';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import {TextField} from './templates/controls/controls';

import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

@RouteConfig([
  {path:'/newCom', name: 'Component', component: TextField}
]);

@Component({
  selector: 'my-app',
  directives: [Dragula, TextField, RouterOutlet],
  providers: [DynamicComponentLoader],
  viewProviders: [DragulaService],
  template: `
			<div>
				<div class='wrapper'>
					<div class='container' [dragula]='"fifth-bag"'>
					<div>You can move these elements between these two containers</div>
					<div>Moving them anywhere else isn't quite possible</div>
					<div>There's also the possibility of moving elements around in the same container, changing their position
					</div>
				</div>
				<div class='container' [dragula]='"fifth-bag"'>
					<div>This is the default use case. You only need to specify the containers you want to use</div>
					<div>More interactive use cases lie ahead</div>
					<div><textfield [data]="data" id="#child"></textfield></div>
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

  is = [
    'textfield',
    'textfield'
  ];

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('fifth-bag', {
      copy: true,
    });

    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
  }

  onDrop(args) {
    let [e, el] = args;
    console.log(e);
    console.log(el);
  }

}
