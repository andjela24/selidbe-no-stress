import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faViber,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faMap, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faViber = faViber;
  faWhatsapp = faWhatsapp;

  faMap = faMap;
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
