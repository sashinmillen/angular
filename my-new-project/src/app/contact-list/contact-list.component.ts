import { Component, Input, OnInit } from '@angular/core';
//import { COURSES } from '../model/db-data';
import { COURSES } from './model/contact-data';
//import { Course } from '../model/course';
import { Course } from './model/loop-data';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input()
  course!: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
