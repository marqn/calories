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

  private state = 'login';

  loginState() {
    this.state = 'login'
  }

  signState() {
    this.state = 'register'
  }

  remindPassword() {
    this.state = 'remindPassword'
  }

  getClass(type:string, secondType:string):string {
    if(type === this.state || secondType === this.state) {
      return 'waves-effect btn';
    }
    else {
      return 'waves-effect grey btn';
    }
  }

  keyEvent(event, sendRemindBtn) {
    console.log(event, event.keyCode, event.keyIdentifier);
    console.log(sendRemindBtn);
  }

  test() {
    console.log('success log!!!');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
