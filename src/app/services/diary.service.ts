import {Injectable} from '@angular/core';
import {MEALS} from './mocks/mock-meals';
import {MealVO} from "../meal-vo";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DiaryService {

  afire:AngularFire;
  uid:string;

  constructor(af:AngularFire) {
    this.afire = af;

    console.log(af);

    af.auth.subscribe( // user info is inside auth object
        auth => {
        this.uid = auth.uid
      }
    );
  }

  isAuthenticated(): Observable<any> {
    return this.afire.auth;
  }


  getMeals(selectedTime:string) {
    // return MEALS;
    console.log('users/' + this.uid + '/dishes/' + selectedTime);
    return this.afire.database.list('users/' + this.uid + '/dishes/' + selectedTime);
  }

  saveMeal(meal:MealVO, selectedTime:string) {
    console.log(this.uid);
    const item = this.afire.database.list('users/' + this.uid + '/dishes/' + selectedTime);
    return item.push(meal)
      .then(_ => console.log('success'))
      .catch(err => console.log(err, 'You do not have access!'));
  }

  deleteMeal(meal, selectedTime:string) {
    const items = this.afire.database.list('users/' + this.uid + '/dishes/' + selectedTime);
    items.remove(meal);
  }
}
