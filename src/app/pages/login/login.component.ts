import {Component, OnInit} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";

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

  constructor(public af:AngularFire) {
  }

  ngOnInit() {
  }

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
    if (type === this.state || secondType === this.state) {
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

  public user_email:string;
  public user_password:string;
  public reset_email:string;
  public checkbox;

  login() {
    this.af.auth.login(
      {
        email: this.user_email,
        password: this.user_password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }
    );
  }

  createNewUser() {
    console.log(this.checkbox);

    if (this.user_password && this.checkbox == true) {
      this.af.auth.createUser({email: this.user_email, password: this.user_password});
      console.log('save new user');
    }
  }

  fbLogin() {
    this.af.auth.login(
      {
        provider: AuthProviders.Facebook,
        method: AuthMethods.Redirect,
      }
    );
  }

  googleLogin() {
    this.af.auth.login();
  }


  test() {
    console.log('success log!!!');
  }

}
