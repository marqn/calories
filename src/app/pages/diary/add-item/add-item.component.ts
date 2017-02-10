import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {ItemVO} from "../../../meal-vo";

@Component({
  selector: 'app-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

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
        "reebok": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "McArthur": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "umbro": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "4f": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "salomon": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "columbia": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "timberland": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "ccc": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "wojas": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "cropp": 'http://metalspaw.com.pl/wp-content/uploads/2015/12/wynajem-spawaczy6.png',
        "nike": 'http://metalspaw.com.pl/wp-content/uploads/2016/02/wynajem-sprz%C4%99tu.png',
        "puma": 'http://placehold.it/250x250'
      }
    };
  }

}
