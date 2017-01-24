import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-date-chooser',
  templateUrl: './date-chooser.component.html',
  styleUrls: ['./date-chooser.component.css']
})
export class DateChooserComponent implements OnInit {

  private currentTime:Date;

  constructor() {
  }

  ngOnInit() {
    this.currentTime = new Date();//"December 2, 1995 23:15:20");
  }

  getCurrentDate():string {
    return this.addZero(this.currentTime.getDate()) + '.'
      + this.addZero(this.currentTime.getMonth() + 1) + '.'
      + this.currentTime.getFullYear();
  };


  nextBtn() {
    this.currentTime.setDate(this.currentTime.getDate() + 1);
    console.log('nextBtn :');
  };

  prevBtn() {
    this.currentTime.setDate(this.currentTime.getDate() - 1);
    console.log('prevBtn:');
  };

  dayClick(day:number = 0) {
    console.log('dayClick:' + this.moveDayLabel(day));
  };

// PRIVATE FUNCTIONS //
  private addZero(val:number):string {
    if (val <= 9)
      return '0' + val.toString();
    return val.toString();
  }

  private moveDayLabel(day:number):number {
    let time:Date = new Date(this.currentTime.getTime());
    time.setDate(time.getDate() + day);
    return time.getDate();
  }
}
