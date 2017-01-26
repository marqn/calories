import {Component, OnInit} from "@angular/core";
import {MealVO} from "../../meal-vo";
import {DiaryService} from "../../services/diary.service";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  meals:MealVO[];
  calorieLimit:number = 2400;

  constructor(private diaryService:DiaryService) {
    this.meals = diaryService.getMeals();
  }

  ngOnInit() {}

  calculateCalories(amountCalories:number):number {

    for (var i = 0; i < this.meals.length; i++) {
      var mealVO:MealVO = this.meals[i];
      if (mealVO.calories != undefined)
        amountCalories -= mealVO.calories;
    }

    return amountCalories;
  }

  changeColor():string {
    if (this.calculateCalories(this.calorieLimit) >= 0)
      return 'green-text';
    else
      return 'red-text';
  }

  addMeal() {
    var meal:MealVO = new MealVO();
    meal.id = 4;
    meal.name = '';
    meal.calories = 40;
    this.meals.unshift(meal);
  }

  handleMyEvent(arg) {
    var index = this.meals.indexOf(arg);
    this.meals.splice(index, 1);
  }

}
