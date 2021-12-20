import { Component, OnInit } from '@angular/core';
import {
  hotel_activities,
  hotel_web_editor,
  initialize,
} from '../services/bucket';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  constructor() {  initialize({ identity: environment.token });}
  activities
  hotelwebeditor
  ngOnInit() {
    this.getactivities().then((data)=> this.activities=data );
    this.gethotelwebeditor().then((data)=> this.hotelwebeditor=data)

  }

  getactivities(){
    return hotel_activities.getAll()
  }

  gethotelwebeditor() {
    return hotel_web_editor.get('61a5d4875ee9b9002f15b0b6	');
  }
}
