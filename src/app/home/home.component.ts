import { Component , ElementRef, OnInit } from '@angular/core';
import {
  faTruck,
  faClock,
  faPiggyBank,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faTruck = faTruck;
  faClock = faClock;
  faPiggyBank = faPiggyBank;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  scrollTo(id: string) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}

