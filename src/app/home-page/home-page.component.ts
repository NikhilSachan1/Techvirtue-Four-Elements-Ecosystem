import { Component } from '@angular/core';
import { HoverTiltDirective } from '../shared/directives/hover-tilt.directive';

@Component({
  selector: 'app-home-page',
  imports: [HoverTiltDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
