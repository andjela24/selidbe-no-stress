import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  faPhone = faPhone;

  constructor() {}
  
  @ViewChild('callButton', { static: false }) callButton!: ElementRef;

  onClick() {
    window.location.href = 'tel:+38160123456';
  }
}
