import { Component } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  UserName:string = "Enter username"

  userlist = []

  onclick(myuser: { value: string; }){
    this.userlist.push(myuser.value);
    myuser.value = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
