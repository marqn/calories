import {Injectable} from "@angular/core";
import {ItemVO} from "../meal-vo";
import {AngularFire} from "angularfire2";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DiaryService {

  af:AngularFire;
  uid:string;

  constructor(af:AngularFire) {
    this.af = af;
    af.auth.subscribe( // user info is inside auth object
      auth => {
        this.uid = auth.uid
      }
    );
  }

  isAuthenticated():Observable<any> {
    return this.af.auth;
  }

  getMeals(selectedTime:string) {
    // return MEALS;
    return this.af.database.list('users/' + this.uid + '/dishes/' + selectedTime);
  }

  saveMeal(meal:ItemVO, selectedTime:string) {
    const item = this.af.database.list('users/' + this.uid + '/dishes/');
    return item.push(meal)
      .then(function () {
        console.log('save');
      })
      .catch(err => console.log(err, 'You do not have access!'));
  }

  test() {
    const queryObs = this.af.database.list('users/' + this.uid + '/dishes/',
      {
        query: {
          orderByChild: 'name',
          equalTo: 'kanapka'
        }
      });

    queryObs.subscribe(queriedItems => {
      console.log(queriedItems);
    });
  }

  updateItem(item:ItemVO, key, selectedTime:string) {
    const list = this.af.database.list('users/' + this.uid + '/dishes/' + selectedTime);
    list.update(key, {name: item.name, calories: item.calories }).then(function () {
      console.log('update');
    });
  }

  deleteMeal(meal, selectedTime:string) {
    const items = this.af.database.list('users/' + this.uid + '/dishes/' + selectedTime);
    items.remove(meal);
  }
}
