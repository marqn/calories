import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  
  selectedItem;
  @Input() label:string;
  @Input() items;


  setValue(item) {
    this.selectedItem = item;
    this.label = item.name;
  }
}
