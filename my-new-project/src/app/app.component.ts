import { Component } from '@angular/core';
import {COURSES} from './model/db-data';

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

  card8 = COURSES[7];
  

  contactList = [
    {
        id:1,
        description: "All Referrers",
        name: "60"
    },
    {
        id:2,
        description: "Aminah Hardin",
        name: "33"
    },
    {
        id:3,
        description: "Alyasha Zuniga",
        name: "4"
    },
    {
        id:4,
        description: "Anaya Molcomb with a lon",
        name: "4"
    },
    {
        id:5,
        description: "Bob Smith",
        name: "2"
    },
    {
        id:6,
        description: "Arya Vector",
        name: "5"
    },

  ]

}

