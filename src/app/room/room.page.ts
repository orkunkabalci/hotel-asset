import { Component, OnInit } from '@angular/core';
import {
  hotel_category,
  hotel_properties,
  hotel_room,
  hotel_web_editor,
  initialize,
} from '../services/bucket';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  constructor(private route: ActivatedRoute) {
    initialize({ identity: environment.token });
  }
  
  roomid;
  category;
  selectedimg;
  room;
  hotelwebeditor
  async ngOnInit() {
    this.roomid = this.route.snapshot.paramMap.get('id');
    await this.gethotelroom()
      .then((data) => (this.room = data))
      .then(() => this.room.images.unshift(this.room.head_image));
    this.imgclick(this.room.head_image);
    this.gethotelwebeditor().then((data)=> this.hotelwebeditor=data)
  }
  slideOpts = {
    slidesPerView: 2.5,
    speed: 400,
    spaceBetween: 15,
    autoplay: true,
  };
  gethotelwebeditor() {
    return hotel_web_editor.get('61a5d4875ee9b9002f15b0b6	');
  }
  gethotelroom() {
    return hotel_room.get(this.roomid, { queryParams: { relation: true } });
  }
  activeimg(data){
    return this.selectedimg==data;
  }
  imgclick(data) {
    return (this.selectedimg = data);
  }
}
