import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  myForm: FormGroup;
  valid: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      'user': '',
      'email': '',
      'password': ''
    })
  }

  
  create(username: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement) {
    
    // StackOverflow Rocks :P 
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

    if(username.value.length >= 5 && email.value.length >= 10 && validateEmail(email.value) && password.value.length >= 5) {
        this.valid = "Registered..";
    } else {
        alert("Usr and pwd must be >= 5 and email must be >= 10 Or Email is invalid");
    }
  }

}
