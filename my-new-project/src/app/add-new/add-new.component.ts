import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onClick() {
    this.serverElements.push
    ({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });

    this.newServerName = ''
    this.newServerContent = ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
