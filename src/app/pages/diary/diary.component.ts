import {Component} from "@angular/core";
import {ItemVO} from "../../meal-vo";
import {DiaryService} from "../../services/diary.service";
import {TabUtil} from "../../lib/tab-util"

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
          // this.getDishes(this.selectedTime);
        }
      }
    );
  }

  getDishes(selectedTime:Date) {
    var time:string = this.getSelectedDate(selectedTime);
    this.diaryService.getMeals(time).subscribe(
      meals => {
        this.items = meals.reverse();

        // console.log("loaded meals")
      }
    );
  }


  mergeDoubles(tab) {
    var duplicateItems = TabUtil.find_duplicates(tab);
    var duplicateContainer = [];

    console.log('*********************');
    console.log(duplicateItems);
    console.log('---------------------');

    /*for (var i = 0; i < duplicateItems.length; i++) {
      var obj = duplicateItems[i];
      var repeatCounter:number = 0;
      for (var j = 0; j < tab.length; j++) {
        var tabItem = tab[j];
        if (obj = tabItem)
          repeatCounter++;
      }
      duplicateContainer.push({value: obj, repeatNumber: repeatCounter});
    }
    console.log(duplicateContainer);*/
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

  progressValue() {
    let value = Math.round((this.calculateCalories(this.calorieLimit) / this.calorieLimit) * 100);
    if (value < 0)
      return 0;

    return value;
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
    meal.state = 'new';
    this.items.unshift(meal);
  }

  addActivity() {
    var activity:ItemVO = new ItemVO();
    activity.name = '';
    activity.calories = 0;
    activity.type = 'activity';
    activity.state = 'new';
    this.items.unshift(activity);
  }

  selectDayHandler(selectedTime) {
    this.selectedTime = selectedTime;
    this.getDishes(selectedTime);
    console.log("selectDayHandler: " + selectedTime);
  }

  saveMealHandler(item) {
    if (item.state == 'new') {
      item.state = null;
      this.diaryService.saveMeal(item, this.getSelectedDate(this.selectedTime));
    } else {
      this.diaryService.updateItem(item, item.$key, this.getSelectedDate(this.selectedTime));
    }
  }

  deleteMealHandler(item) {
    if (!item.state)
      this.diaryService.deleteMeal(item, this.getSelectedDate(this.selectedTime));
    else {
      var index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }

  private getSelectedDate(selectedTime:Date):string {
    return selectedTime.getDate() + '-' +
      selectedTime.getMonth() + '-' +
      selectedTime.getFullYear();
  }


}
