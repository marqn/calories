import {Component, OnInit, Input} from "@angular/core";
import {MealVO} from "../../meal-vo";

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  @Input() mealVO:MealVO;


  public dataAutocomplete;

  constructor() {
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
