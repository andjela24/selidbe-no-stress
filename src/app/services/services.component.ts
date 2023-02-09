import { Component } from '@angular/core';

export interface Service {
  id: number;
  imgUrl: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  additionalCards: Service[] = [
    {
      id: 1,
      imgUrl: './assets/images/cards/montaza-img.jpg',
      title: 'Montaža / Demontaža',
      text: ' Montiramo i dempntiramo već postojeći ili tek kupljeni nameštaj profesionalnim alatima. *Ne montiramo kuhinje. ',
    },
    {
      id: 2,
      imgUrl: './assets/images/cards/zastita-img.jpg',
      title: 'Zaštita nameštaja',
      text: ' Profesionalna zaštita stvari sreč folijom ili puc-puc folijom. ',
    },
    {
      id: 3,
      imgUrl: './assets/images/cards/pakovanje-img.jpg',
      title: 'Pakovanje',
      text: ' Vršimo pakovanje u kartonske kutije različitih dimenzija ili džakove različitih veličina. ',
    },
  ];
}
