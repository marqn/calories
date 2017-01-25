import { Component, OnInit } from '@angular/core';
import {FirebaseAuthState} from "angularfire2/index";
import {AngularFire} from "angularfire2/angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public isLogged;
  public user = {};
  public username;

  constructor(private router:Router, private af:AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.isLogged = true;
        this.router.navigate(['/']);
        this.username = this.getName(user);
      } else {
        this.isLogged = false;
        console.info("login error");
      }
    });
  }

  private getName(userAuth:FirebaseAuthState):string {
    let name;
    if (userAuth.auth.displayName == null) {
      name = userAuth.auth.email;
    }
    else {
      name = userAuth.auth.displayName;
    }
    return name;
  }

  ngOnInit() {
    console.log('init!!!!');
  }


  logout() {
    this.af.auth.logout();
    this.isLogged = false;
    this.router.navigate(['/login']);
  }

}
