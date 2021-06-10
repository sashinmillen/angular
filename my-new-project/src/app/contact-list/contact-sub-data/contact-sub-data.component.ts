import { Component, OnInit } from '@angular/core';
import {COURSES} from '../model/contact-data';
import { Course } from '../model/loop-data';

@Component({
  selector: 'app-contact-sub-data',
  templateUrl: './contact-sub-data.component.html',
  styleUrls: ['./contact-sub-data.component.css']
})
export class ContactSubDataComponent {

  card1 = COURSES[0];
  
  card2 = COURSES[1];

  card3 = COURSES[2];

  card4 = COURSES[3];

  card5 = COURSES[4];

  card6 = COURSES[5];

  constructor() { }

}
