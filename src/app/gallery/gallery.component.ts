/*import { Component } from '@angular/core';
import Swiper from 'swiper';
const TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

*/
/*
const swiperOptions = {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};
*/

/*
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
  /*
  handlePrev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  handleNext() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }
  */
/*
  handlePrev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 3;
    } else {
      this.currentIndex -= 3;
    }
  }

  handleNext() {
    if (this.currentIndex >= this.images.length - 3) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 3;
    }
  }
  */
/*
  ngOnInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log('Swiper initialized');
  }
  */

/*TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  */
/*
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide', 'tranding-slide');
    swiperSlide.innerHTML = `
      <div class="tranding-slide-img">
        <img src="${image}" alt="Tranding">
      </div>
      <div class="tranding-slide-content">
        <h1 class="food-price">$20</h1>
        <div class="tranding-slide-content-bottom">
          <h2 class="food-name">
            Special Pizza
          </h2>
          <h3 class="food-rating">
            <span>4.5</span>
            <div class="rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
          </h3>
        </div>
      </div>
    `;
    swiperWrapper.appendChild(swiperSlide);
  }
  */

/*
  swiperWrapper: HTMLElement | null = document.querySelector('.swiper-wrapper');
  if(swiperWrapper: { appendChild: (arg0: HTMLDivElement) => void }) {
    for (let i = 0; i < this.images.length; i++) {
      const image: string = this.images[i];
      const swiperSlide: HTMLDivElement = document.createElement('div');
      swiperSlide.classList.add('swiper-slide', 'tranding-slide');
      swiperSlide.innerHTML = `
      <div class="tranding-slide-img">
        <img src="${image}" alt="Tranding">
      </div>
      <div class="tranding-slide-content">
        <h1 class="food-price">$20</h1>
        <div class="tranding-slide-content-bottom">
          <h2 class="food-name">
            Special Pizza
          </h2>
          <h3 class="food-rating">
            <span>4.5</span>
            <div class="rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
          </h3>
        </div>
      </div>
    `;
      if (swiperWrapper) {
        swiperWrapper.appendChild(swiperSlide);
      }
    }
  }
  */
/*}*/

/*
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  TrandingSlider: Swiper | undefined = undefined;

  currentIndex = 0;
  images = [
    'https://picsum.photos/id/10/200/300',
    'https://picsum.photos/id/20/200/300',
    'https://picsum.photos/id/30/200/300',
    'https://picsum.photos/id/40/200/300',
  ];

  ngOnInit() {
    this.TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
*/
import { Component } from '@angular/core';
import SwiperCore, { EffectCards } from 'swiper';
import { SwiperOptions } from 'swiper/types';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/effect-cards/effect-cards.scss';

SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  slides: string[] = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7',
    'Slide 8',
    'Slide 9',
  ];

  swiperConfig: SwiperOptions = {
    effect: 'cards',
    grabCursor: true,
    modules: [EffectCards],
  };
}
