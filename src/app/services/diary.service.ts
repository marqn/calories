import {Injectable} from "@angular/core";
import {ItemVO} from "../meal-vo";
import {AngularFire} from "angularfire2";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Rx";

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

  isAuthenticated():Observable<any> {
    return this.afire.auth;
  }

  getMeals(selectedTime:string) {
    // return MEALS;
    return this.afire.database.list('users/' + this.uid + '/dishes/' + selectedTime);
  }

  saveMeal(meal:ItemVO, selectedTime:string) {
    const item = this.afire.database.list('users/' + this.uid + '/dishes/' + selectedTime);
    meal.dataAdded = new Date().getTime();
    return item.push(meal)
      .then(function () {
        console.log('save');
      })
      .catch(err => console.log(err, 'You do not have access!'));
  }

  updateItem(item:ItemVO, key, selectedTime:string) {
    const list = this.afire.database.list('users/' + this.uid + '/dishes/' + selectedTime);
    list.update(key, {name:item.name, calories:item.calories}).then(function () {
      console.log('update');
    });
  }

  deleteMeal(meal, selectedTime:string) {
    const items = this.afire.database.list('users/' + this.uid + '/dishes/' + selectedTime);
    items.remove(meal);
  }
}
