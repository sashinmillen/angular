import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = null
  title = 'contacts';
  selectedUser;
  constructor(private service : AppService){

  }

  ngOnInit(): void {

    this.service.getUsers().subscribe(data => {
      console.log(data.results);
      this.users = data.results
    });
  }

  onUserComponentClicked(user){
    console.log(user)
    this.selectedUser = user;
  }


}
