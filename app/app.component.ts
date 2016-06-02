import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true }
])

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})

export class AppComponent {
}
