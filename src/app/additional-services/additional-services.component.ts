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
  
}
