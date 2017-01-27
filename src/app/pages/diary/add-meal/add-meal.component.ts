import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {MealVO} from "../../../meal-vo";
import {DiaryService} from "../../../services/diary.service";

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  @Input() mealVO:MealVO;
  @Output() event:EventEmitter<any> = new EventEmitter();

  public dataAutocomplete;

  constructor(private diaryService:DiaryService) {
  }

  delete(item:MealVO) {
    this.event.next(this.mealVO);
    this.diaryService.deleteMeal(item);
  }

  saveMeal(meal) {
    this.diaryService.saveMeal(meal)
      .then(_x => {
        console.log(_x);
      });
  }

  ngOnInit() {
    this.dataAutocomplete =
    {
      data: {
        "adidas": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "nike": 'http://metalspaw.com.pl/wp-content/uploads/2016/02/wynajem-sprz%C4%99tu.png',
        "puma": 'http://placehold.it/250x250'
      }
    };
  }

}
