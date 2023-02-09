import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  cards = [
    {
      id: 1,
      imgUrl: './assets/images/cards/selidbe-img.jpg',
      title: 'Selidbe',
      text: 'Vršimo selidbe lokala, zdraga, kuća i magacina. Selidba uključuje utovar, prevoz i sitovar. Isključivo sa našim radnicima. Može biti i na više lokacija.',
    },
    {
      id: 2,
      imgUrl: './assets/images/cards/prevoz-img.jpg',
      title: 'Prevoz',
      text: 'Nudimo usluge prevoza stvari, nameštaja i ostale robe težine do 1.5t.',
    },
    {
      id: 3,
      imgUrl: './assets/images/cards/kurir-img.jpg',
      title: 'Usluge kurirske službe',
      text: 'Vi poručujete, mi plaćamo za Vas i dostavljamo Vam na željenu adresu.',
    },
    {
      id: 4,
      imgUrl: './assets/images/cards/odnosenje-stvari-img.jpg',
      title: 'Odnošenje starih stvari',
      text: 'Dolazimo na željenu adresu i odnosimo stare stvari na deponiju.',
    },
    {
      id: 5,
      imgUrl: './assets/images/cards/teske-stvari-img.jpg',
      title: 'Prevoz teških stvari',
      text: 'Za Vas prevozimo teške i kabaste stvari kao što su klavie, sef i mnoge druge.',
    },
    {
      id: 6,
      imgUrl: './assets/images/cards/razmestaj-img.jpg',
      title: 'Razmestaj nameštaja',
      text: 'Za Vas nudimo uslugu razmeštaja nameštaja u Vašem objektu.',
    },
  ];
}
