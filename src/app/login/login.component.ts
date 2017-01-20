import {Component, OnInit} from "@angular/core";

enum LoginPage {
  login,
  register,
  remindPassword
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  state = 'login';

  loginState() {
    this.state = 'login'
  }

  signState() {
    this.state = 'register'
  }

  remindPassword() {
    this.state = 'remindPassword'
  }

  constructor() {
  }

  ngOnInit() {
  }

}
