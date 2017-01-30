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
  selectedTime;
  calorieLimit:number = 2400;

  constructor(private diaryService:DiaryService) {

    this.selectedTime = new Date();

    this.diaryService.isAuthenticated().subscribe(
        authStatus => {
        if (authStatus) {
          this.getDishes(this.selectedTime);
        }
      }
    );
  }

  getDishes(selectedTime:string) {
    selectedTime = this.getSelectedDate(selectedTime);
    this.diaryService.getMeals(selectedTime).subscribe(
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
    console.log('selectDayHandler:' + this.getSelectedDate(selectedTime));
    this.selectedTime = selectedTime;
    this.getDishes(selectedTime);
  }

  saveMealHandler(meal) {
    this.diaryService.saveMeal(meal, this.getSelectedDate(this.selectedTime))
      .then(_x => {
        console.log('save');
      });
  }

  deleteMealHandler(meal) {
    this.diaryService.deleteMeal(meal, this.getSelectedDate(this.selectedTime));
  }

  private getSelectedDate(selectedTime) {
    return selectedTime.getDate() + '-' +
      selectedTime.getMonth() + '-' +
      selectedTime.getFullYear();
  }


}
