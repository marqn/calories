import {Component} from "@angular/core";
import {ItemVO} from "../../meal-vo";
import {DiaryService} from "../../services/diary.service";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent {

  items;
  selectedTime:Date;
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

  getDishes(selectedTime:Date) {
    var time:string = this.getSelectedDate(selectedTime);
    this.diaryService.getMeals(time).subscribe(
        categories => {
        this.items = categories.reverse();
      }
    );
  }

  calculateCalories(amountCalories:number):number {
    if (this.items == undefined)
      return amountCalories;

    for (var i = 0; i < this.items.length; i++) {
      var itemVO:ItemVO = this.items[i];
      if (itemVO.calories != undefined && itemVO.type == 'meal')
        amountCalories -= itemVO.calories;

      if (itemVO.calories != undefined && itemVO.type == 'activity')
        amountCalories += itemVO.calories;
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
    var meal:ItemVO = new ItemVO();
    meal.name = '';
    meal.calories = 0;
    meal.type = 'meal';
    this.items.unshift(meal);
  }

  addActivity() {
    var activity:ItemVO = new ItemVO();
    activity.name = '';
    activity.calories = 0;
    activity.type = 'activity';
    this.items.unshift(activity);
  }

  selectDayHandler(selectedTime) {
    this.selectedTime = selectedTime;
    this.getDishes(selectedTime);
  }

  saveMealHandler(meal) {
    this.diaryService.saveMeal(meal, this.getSelectedDate(this.selectedTime));
  }

  deleteMealHandler(meal) {
    this.diaryService.deleteMeal(meal, this.getSelectedDate(this.selectedTime));
  }

  private getSelectedDate(selectedTime:Date):string {
    return selectedTime.getDate() + '-' +
      selectedTime.getMonth() + '-' +
      selectedTime.getFullYear();
  }


}
