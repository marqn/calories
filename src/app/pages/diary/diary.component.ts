import {Component} from "@angular/core";
import {MealVO} from "../../meal-vo";
import {DiaryService} from "../../services/diary.service";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent {

  meals;
  calorieLimit:number = 2400;

  constructor(private diaryService:DiaryService) {
    this.diaryService.isAuthenticated().subscribe(
        authStatus => {
        if (authStatus) {
          this.getDishes();
        }
      }
    );
  }

  getDishes() {
    this.diaryService.getMeals().subscribe(
        categories => {
        this.meals = categories;
      }
    );
  }

  calculateCalories(amountCalories:number):number {
    if (this.meals == undefined)
      return amountCalories;

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
    meal.name = '';
    meal.calories = 0;
    this.meals.unshift(meal);
  }

  selectDayHandler(selectedTime) {
    console.log('selectDayHandler:' + selectedTime);
    this.getDishes();
  }

}
