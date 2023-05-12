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
  /*
  ngOnInit() {
    this.callButton = document.querySelector('#call-button');
    this.callButton.addEventListener('click', () => {
      window.location.href = 'tel:+38160123456';
    });
  
    */
  /*
  readonly callButton: HTMLElement | null =
    document.getElementById('call-button');

  ngOnInit() {
    if (this.callButton) {
      this.callButton.addEventListener('click', () => {
        window.location.href = 'tel:+38160123456';
      });
    }
  }
  */
  @ViewChild('callButton', { static: false }) callButton!: ElementRef;

  onClick() {
    window.location.href = 'tel:+38160123456';
  }
}
