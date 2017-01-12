import { Component, OnInit } from '@angular/core';
import {MealVO} from "../meal-vo";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  meal:MealVO = {
    id: 1,
    name: 'bread',
    calories: 99
  };

  
  constructor() {}
  ngOnInit() {}

}
