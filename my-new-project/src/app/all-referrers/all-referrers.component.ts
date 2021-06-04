import { Component, Input, OnInit } from '@angular/core';
import {COURSES} from '../../environments/db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-all-referrers',
  templateUrl: './all-referrers.component.html',
  styleUrls: ['./all-referrers.component.css']
})
export class AllReferrersComponent implements OnInit {

  @Input()
  course!: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
