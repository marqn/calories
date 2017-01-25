import {Injectable} from '@angular/core';
import {MEALS} from './mocks/mock-meals';
import {MealVO} from "../meal-vo";

@Injectable()
export class DiaryService {

  getMeals():MealVO[] {
    return MEALS;
  }
}
