import {Component, OnInit} from "@angular/core";
import {MealVO} from "../meal-vo";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  meal:MealVO = {
    id: 1,
    name: 'kanapka',
    calories: 299
  };
  meal2:MealVO = {
    id: 2,
    name: 'jabłko',
    calories: 50
  };
  meal3:MealVO = {
    id: 3,
    name: 'ciastko',
    calories: 500
  };

  meals:MealVO[];

  constructor() {
  }

  ngOnInit() {
    this.meals = [this.meal, this.meal2, this.meal3];
  }

  addMeal() {
    this.meals.unshift(new MealVO());
  }

}
