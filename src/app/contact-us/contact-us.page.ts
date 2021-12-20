import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMapService } from 'src/app/services/google-map.service';
import { hotel_web_editor, initialize } from '../services/bucket';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  @ViewChild('map') private mapElement: ElementRef;

  constructor(private _mapService: GoogleMapService) {
    initialize({ identity: environment.token });
  }
  hotelwebeditor;
  async ngOnInit() {
    await this.gethotelwebeditor()
      .then((data) => (this.hotelwebeditor = data))
    this.initMap();
  }
  gethotelwebeditor() {
    return hotel_web_editor.get('61a5d4875ee9b9002f15b0b6	');
  }

  initMap() {
    let position = {
      lat: this.hotelwebeditor?.contact.adress_map.coordinates[1],
      lng: this.hotelwebeditor?.contact.adress_map.coordinates[0],
    };
    this._mapService.initMap(this.mapElement.nativeElement, position);
    this._mapService.addMarker([position]);
  }
}
