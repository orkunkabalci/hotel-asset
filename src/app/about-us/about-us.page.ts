import { Component, OnInit } from '@angular/core';
import {
  hotel_web_editor,
  initialize,
} from '../services/bucket';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor() {    initialize({ identity: environment.token });
}
hotelwebeditor;
  ngOnInit() {
    this.gethotelwebeditor().then((data) => (this.hotelwebeditor = data));

  }
  gethotelwebeditor() {
    return hotel_web_editor.get('61a5d4875ee9b9002f15b0b6	');
  }

  

}
