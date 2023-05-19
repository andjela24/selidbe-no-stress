import { Component, ElementRef, ViewChild } from '@angular/core';
import { faPhone, faCircleDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent {
  faPhone = faPhone;
  faCircleDot = faCircleDot;
  constructor() {}
  
  @ViewChild('callButton', { static: false }) callButton!: ElementRef;

  onClick() {
    window.location.href = 'tel:+38160123456';
  }
}
