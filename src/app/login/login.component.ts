import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCode: String;
  userPassword: String;
  constructor() { }

  ngOnInit() {

  }

  login() {
    console.log(this.userCode, this.userPassword);

  }
}
