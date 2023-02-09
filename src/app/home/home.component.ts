import { Component } from '@angular/core';
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
export class HomeComponent {
  faTruck = faTruck;
  faClock = faClock;
  faPiggyBank = faPiggyBank;
}
