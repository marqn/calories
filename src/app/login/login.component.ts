import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login:boolean
  
  
  loginState() {
    this.login = true;
  }

  signState() {
    this.login = false;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
