import { Component, OnInit } from '@angular/core';
import {
  hotel_activities,
  hotel_category,
  hotel_properties,
  hotel_rezervasyon,
  Hotel_rezervasyon,
  hotel_room,
  hotel_web_editor,
  initialize,
} from '../services/bucket';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public toastCtrl: ToastController) {
    initialize({ identity: environment.token });
  }
  now = new Date().toISOString();
  hotelcategories;
  hotelwebeditor;
  reservationpage = '1';
  properties;
  rooms = [];
  activities;
  validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  phoneno = /^\d{10}$/;

  index;
  reservation: Hotel_rezervasyon = {};

  async ngOnInit() {
    this.gethotelcategory().then((data) => (this.hotelcategories = data));
    this.gethotelwebeditor().then((data) => (this.hotelwebeditor = data));
    this.gethotelproperties().then((data) => (this.properties = data));
    this.checkactive('1');
    this.gethotelrooms().then((data) => (this.rooms = data));
    await this.getactivities().then((data) => (this.activities = data));
    this.addvisible();
    this.checkdate();
  }
  async openToast(alert) {
    const toast = await this.toastCtrl.create({
      message: alert,
      duration: 4000,
      cssClass: 'my-custom-class',
    });
    toast.present();
  }
  checkdate() {
     if (this.reservation.check_in != undefined) return false;
     else return true;
  }
  datechange() {
    this.reservation.check_out = this.reservation.check_in;
    return this.checkdate();
  }
  addvisible() {
    for (let i = 0; i < this.activities.length; i++) {
      this.activities[i]['visible'] = false;
    }
    return this.activities;
  }

  visible(data) {
    this.index = this.activities.findIndex((activities) => activities === data);
    this.activities[this.index].visible = true;
    return this.activities;
  }

  gethotelcategory() {
    return hotel_category.getAll();
  }
  gethotelwebeditor() {
    return hotel_web_editor.get('61a5d4875ee9b9002f15b0b6	');
  }
  slideOpts = {
    initialSlide: 1,
    speed: 0,
    autoplay: true,
  };

  reservationpagec(data) {
    if (data == 2) {
      if (
        this.reservation.adult == undefined ||
        this.reservation.children == undefined ||
        this.reservation.room == undefined
      )
        this.openToast('Please fill in the blanks');
      else return (this.reservationpage = data);
    } else if (data == 3) {
      if (
        this.reservation.mail == undefined ||
        this.reservation.name == undefined ||
        this.reservation.phone_number == undefined ||
        this.reservation.name == ''
      )
        this.openToast('Please fill in the blanks');
      else if (this.reservation.mail.match(this.validRegex) == null)
        this.openToast('Invalid email address!');
      else if (
        this.reservation.phone_number.toString().match(this.phoneno) == null
      )
        this.openToast('Invalid phone number!');
      else return (this.reservationpage = data);
    } else return (this.reservationpage = data);
  }
  gethotelproperties() {
    return hotel_properties.getAll();
  }
  scroll(el: HTMLElement, data) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.reservation.room = data;
  }
  showactive(data) {
    return data == true;
  }
  gethotelrooms() {
    return hotel_room.getAll();
  }
  checkactive(data) {
    return this.reservationpage == data;
  }
  getactivities() {
    return hotel_activities.getAll();
  }
  insert() {
    if (
      this.reservation.check_out == undefined ||
      this.reservation.check_in == undefined
    )
      this.openToast('Please fill in the blanks');
    else if (this.reservation.check_out < this.reservation.check_in)
      this.openToast('Please check your date');
    else {
      this.reservation.phone_number = this.reservation.phone_number.toString();
      this.openToast('Your reservation has been received');
      return hotel_rezervasyon.insert(this.reservation)
    }
  }
}
