import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  @ViewChild('form', { static: false }) signupForm: NgForm;

  genders = ['male', 'female'];
  user = { 
    username: '',
    email: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    // this.signupForm.form.patchValue({
    // });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
