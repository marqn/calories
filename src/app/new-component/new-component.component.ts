import { Component, OnInit, Input } from '@angular/core';
import {MealVO} from "../meal-vo";

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  @Input() meal:MealVO;

  constructor() { }

  ngOnInit() {
  }

}
