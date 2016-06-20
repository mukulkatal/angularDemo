import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {Template} from './templates/templateAll/template.component';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/preview/:name', name: 'Preview', component: Template }
])

@Component({
  selector: 'my-app',
  template: `
	  <router-outlet></router-outlet>
	`,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
}
