import { Component } from '@angular/core';

export interface AdditionalService {
  id: number;
  imgUrl: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-additional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.css'],
})
export class AdditionalServicesComponent {
  additionalCards: AdditionalService[] = [
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
