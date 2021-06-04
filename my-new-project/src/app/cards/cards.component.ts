import { Component, Input, OnInit } from '@angular/core';
import {COURSES} from '../../environments/db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  course!: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
