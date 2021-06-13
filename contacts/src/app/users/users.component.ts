import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() list:any[];
  @Output() onUserClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onClicked(user){
   // console.log(user);
    this.onUserClicked.emit(user)
  }
}
