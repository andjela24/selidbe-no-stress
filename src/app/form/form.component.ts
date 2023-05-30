import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public name: string = '';
  public phoneNumber: string = '';
  public entityType: string = '';
  public startingPoint: string = '';
  public endPoint: string = '';
  public additionalPoints: { point: string }[] = [];
  /*public additionalPoints: Array<string> = [];*/
  public services: Array<string> = [];
  public liftAvailable: string = '';
  public accessibility: string = '';
  public numOfStops: number = 0;
  public submitted: boolean = false;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      entityType: ['', Validators.required],
      startingPoint: ['', Validators.required],
      endPoint: ['', Validators.required],
      services: [[]],
      liftAvailable: ['', Validators.required],
      accessibility: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addStop() {
    if (this.additionalPoints.length < 2) {
      this.additionalPoints.push({ point: '' });
    }
  }
  
  toggleService(service: string) {
    if (this.services.includes(service)) {
      this.services = this.services.filter((s) => s !== service);
    } else {
      this.services.push(service);
    }
  }
  public get formValid(): boolean {
    return (
      this.name !== '' &&
      this.phoneNumber !== '' &&
      this.entityType !== '' &&
      this.startingPoint !== '' &&
      this.endPoint !== ''
    );
  }

  public submitForm(): void {
    emailjs.send('default_service', 'template_1', {
      name: this.name,
      phoneNumber: this.phoneNumber,
      entityType: this.entityType,
      additionalStops: this.additionalPoints,
      liftAvailable: this.liftAvailable,
      accessibility: this.accessibility,
      numOfStops: this.numOfStops,
    });
  }
}
