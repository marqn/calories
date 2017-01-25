import {Component, OnInit} from "@angular/core";
import {MealVO} from "../meal-vo";
import {DiaryService} from "../services/diary.service";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  meals:MealVO[];

  constructor(private diaryService:DiaryService) {
    this.meals = diaryService.getMeals();
  }

  ngOnInit() {}
  

  calculateCalories(amountCalories:number):number {

    for (var i = 0; i < this.meals.length; i++) {
      var  mealVO:MealVO = this.meals[i];
      if(mealVO.calories != undefined)
      amountCalories -= mealVO.calories;
    }

    return amountCalories;
  }

  test() {
    console.log(this.meals);
  }

  addMeal() {
    var meal:MealVO = new MealVO();
    meal.id = 4;
    meal.name = '';
    meal.calories = 40;
    this.meals.unshift(meal);
  }

}
