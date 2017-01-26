import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2/angularfire2";
import {UserVO} from "../user-vo";

@Injectable()
export class ProfileService {

  afire:AngularFire;
  uid:string;

  constructor(af:AngularFire) {
    this.afire = af;

    af.auth.subscribe( // user info is inside auth object
      auth => {
        this.uid = auth.uid
      }
    );
  }

  setProfile(userData:UserVO) {
    const item = this.afire.database.object('users/' + this.uid );
    return item.set({profile:userData})
      .catch(err => console.log(err, 'You do not have access!'));
  }

  getProfile() {
    return this.afire.database.object('users/' + this.uid + '/profile');
  }

}
