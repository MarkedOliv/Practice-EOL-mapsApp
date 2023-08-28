import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'],
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-69.24283378562427, 9.528983271080165],
      zoom: 13,
    });
  }
}
