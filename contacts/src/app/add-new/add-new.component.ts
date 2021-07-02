import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onClick(myuser: { value: any; }) {
    this.serverElements.push(myuser.value);
    ({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
