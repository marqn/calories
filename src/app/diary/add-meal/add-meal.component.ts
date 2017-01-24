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
        "adidas": null,
        "nike": null,
        "puma": 'http://placehold.it/250x250'
      }
    };
  }

}
