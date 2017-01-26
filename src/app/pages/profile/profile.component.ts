import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {UserVO} from "../../user-vo";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile:UserVO;

  constructor(private profileService:ProfileService) {
    this.profile = new UserVO();
  }

  ngOnInit() {
    this.profileService.getProfile().subscribe(
        userData => {
        this.profile.age = userData.age;
        this.profile.weight = userData.weight;
      });
  }

  public items = [
    {
      name: 'Brak',
      value: 1
    }, {
      name: 'Mała',
      value: 2
    }, {
      name: 'Średnia',
      value: 3
    }, {
      name: 'Duża',
      value: 4
    }, {
      name: 'Ogromna',
      value: 5
    }
  ];

  saveDataProfile() {
    this.profileService.setProfile(this.profile);
  }

}
