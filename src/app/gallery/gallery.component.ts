import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  currentIndex = 0;
  images = [
    'https://picsum.photos/id/10/200/300',
    'https://picsum.photos/id/20/200/300',
    'https://picsum.photos/id/30/200/300',
    'https://picsum.photos/id/40/200/300',
  ];

  handlePrev() {
    this.currentIndex--;
  }

  handleNext() {
    this.currentIndex++;
  }
}
