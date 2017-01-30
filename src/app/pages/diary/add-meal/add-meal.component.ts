import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {ItemVO} from "../../../meal-vo";

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  type:string; // meal <-/-> activity
  
  @Input() mealVO:ItemVO;
  @Output() saveEvent:EventEmitter<any> = new EventEmitter();
  @Output() delEvent:EventEmitter<any> = new EventEmitter();

  public dataAutocomplete;

  constructor() {
  }

  delete(item:ItemVO) {
    this.delEvent.next(this.mealVO);
  }

  saveMeal(meal) {
    this.saveEvent.next(this.mealVO);
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
