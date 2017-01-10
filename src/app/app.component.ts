import {Component, EventEmitter} from "@angular/core";
import {MealVO} from "./meal-vo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  meal:MealVO = {
    id: 1,
    name: 'bread',
    calories: 99
  }

  actions = new EventEmitter<string>();
  
  
  
}


