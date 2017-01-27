import {Injectable} from '@angular/core';
import {MEALS} from './mocks/mock-meals';
import {MealVO} from "../meal-vo";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import "rxjs/add/operator/map";

@Injectable()
export class DiaryService {

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


  getMeals() {
    // return MEALS;
    return this.afire.database.list('users/' + this.uid + '/dishes');
  }

  saveMeal(meal:MealVO) {
    console.log(meal);
    const item = this.afire.database.list('users/' + this.uid + '/dishes');
    return item.push(meal)
      .catch(err => console.log(err, 'You do not have access!'));
  }

  deleteMeal(meal) {
    meal.remove();
  }
}
