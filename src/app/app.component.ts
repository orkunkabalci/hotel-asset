import 'animate.css';
import { Component, OnInit } from '@angular/core';
import {
  hotel_category,
  hotel_room,
  hotel_web_editor,
  initialize,
} from './services/bucket';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
    initialize({ identity: environment.token });
  }
  hidevalue = 'off';
  roomsvalue = 'off';
  hotelcategories;
  hotelwebeditor;
  rooms;
  ngOnInit() {
    this.gethotelcategory().then((data) => (this.hotelcategories = data));
    this.gethotelwebeditor().then((data) => (this.hotelwebeditor = data));
    this.gethotelrooms().then((data)=> this.rooms=data);
  }
  hide(data) {
    return (this.hidevalue = data);
  }
  gethotelrooms(){
    return hotel_room.getAll();
  }
  showrooms() {
    if (this.roomsvalue == 'on') {
      this.roomsvalue = 'off';
    } else {
      this.roomsvalue = 'on';
    }
    return this.roomsvalue;
  }
  gethotelwebeditor() {
    return hotel_web_editor.get('61a5d4875ee9b9002f15b0b6	');
  }
  gethotelcategory() {
    return hotel_category.getAll();
  }
}
