import { Component } from '@angular/core';
import {COURSES} from '../environments/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  card1 = COURSES[0];

  card2 = COURSES[1];

  card3 = COURSES[2];

  card4 = COURSES[3];

  card5 = COURSES[4];

  card6 = COURSES[5];

  card7 = COURSES[6];
  
}
