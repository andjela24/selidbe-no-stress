 import { Component, OnInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });
  }

}

