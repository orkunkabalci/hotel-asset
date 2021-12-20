import { Injectable } from '@angular/core';
import { google } from 'google-maps';

declare var google: google;

@Injectable({
  providedIn: 'root',
})
export class GoogleMapService {
  map: google.maps.Map;
  mapElement: any;
  mapInitialised: boolean = false;

  constructor() {}

  initMap(mapElement: any, position: {lat: number, lng: number}) {
    this.map = new google.maps.Map(mapElement, {
      center: new google.maps.LatLng(position.lat, position.lng),
      zoom: 5,
      disableDefaultUI: true,
    });
  }

  addMarker(position: any) {
    for (const mark of position) {
      new google.maps.Marker({
        position: mark,
        map: this.map,
      });
    }
  }
}
