/*
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
*/
/*
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
  public itemsToMove: string = '';
  public selectedOptions: string[] = [];
  public optionQuantities: { [option: string]: number } = {};
  public protectionItems: string = '';
  public bulkyItems: string = '';
  public kilometers: number = 0;
  public toll: boolean = false;
  public packingOptions: { boxes: boolean; bags: boolean } = { boxes: false, bags: false };
  public packingQuantity: number = 0;
  public disassemblyRequired: boolean = false;
  public furnitureToDisassemble: string = '';
  public disassemblyQuantity: number = 0;
  public courierPayment: string = '';
  public startingPoint: string = '';
  public endPoint: string = '';
  public additionalPoints: { point: string }[] = [];
  public liftAvailable: string = '';
  public liftFloor: number = 0;
  public liftType: string = '';

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      entityType: ['', Validators.required],
      itemsToMove: [''],
      selectedOptions: [[]],
      optionQuantities: [''],
      protectionItems: [''],
      bulkyItems: [''],
      kilometers: [0],
      toll: [false],
      packingOptions: this.formBuilder.group({
        boxes: [false],
        bags: [false],
      }),
      packingQuantity: [0],
      disassemblyRequired: [false],
      furnitureToDisassemble: [''],
      disassemblyQuantity: [0],
      courierPayment: [''],
      startingPoint: ['', Validators.required],
      endPoint: ['', Validators.required],
      additionalPoints: this.formBuilder.array([]),
      liftAvailable: [''],
      liftFloor: [0],
      liftType: [''],
    });
  }

  ngOnInit(): void {}

  addStop() {
    if (this.additionalPoints.length < 2) {
      this.additionalPoints.push({ point: '' });
    }
  }

  submitForm() {
    emailjs.send('default_service', 'template_1', {
      name: this.name,
      phoneNumber: this.phoneNumber,
      entityType: this.entityType,
      itemsToMove: this.itemsToMove,
      selectedOptions: this.selectedOptions,
      optionQuantities: this.optionQuantities,
      protectionItems: this.protectionItems,
      bulkyItems: this.bulkyItems,
      kilometers: this.kilometers,
      toll: this.toll ? 'Da' : 'Ne',
      packingOptions: this.packingOptions,
      packingQuantity: this.packingQuantity,
      disassemblyRequired: this.disassemblyRequired ? 'Da' : 'Ne',
      furnitureToDisassemble: this.furnitureToDisassemble,
      disassemblyQuantity: this.disassemblyQuantity,
      courierPayment: this.courierPayment,
      startingPoint: this.startingPoint,
      endPoint: this.endPoint,
      additionalPoints: this.additionalPoints,
      liftAvailable: this.liftAvailable,
      liftFloor: this.liftFloor,
      liftType: this.liftType,
    });
  }
}
*/
/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public itemsToMove: string = '';
  public selectedOptions: string[] = [];
  public optionQuantities: { [option: string]: number } = {};
  public protectionItems: string = '';
  public bulkyItems: string = '';
  public kilometers: number = 0;
  public toll: boolean = false;
  public packingOptions: { boxes: boolean; bags: boolean } = { boxes: false, bags: false };
  public packingQuantity: number = 0;
  public disassemblyRequired: boolean = false;
  public furnitureToDisassemble: string = '';
  public disassemblyQuantity: number = 0;
  public courierPayment: string = '';
  public startingPoint: string = '';
  public endPoint: string = '';
  public additionalPoints: { point: string }[] = [];
  public liftAvailable: string = '';
  public liftFloor: number = 0;
  public liftType: string = '';

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      phoneNumber: new FormControl(),
      entityType: new FormControl(),
      itemsToMove: new FormControl(),
      optionQuantities: new FormControl(),
      protectionItems: new FormControl(),
      bulkyItems: new FormControl(),
      kilometers: new FormControl(),
      toll: new FormControl(),
      packingOptions: new FormGroup({
        boxes: new FormControl(),
        bags: new FormControl()
      }),
      packingQuantity: new FormControl(),
      disassemblyRequired: new FormControl(),
      furnitureToDisassemble: new FormControl(),
      disassemblyQuantity: new FormControl(),
      courierPayment: new FormControl(),
      startingPoint: new FormControl(),
      endPoint: new FormControl(),
      additionalPoints: new FormControl(),
      liftAvailable: new FormControl(),
      liftFloor: new FormControl(),
      liftType: new FormControl()
    });
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      entityType: ['', Validators.required],
      itemsToMove: [''],
      selectedOptions: [[]],
      optionQuantities: [''],
      protectionItems: [''],
      bulkyItems: [''],
      kilometers: [0],
      toll: [false],
      packingOptions: this.formBuilder.group({
        boxes: [false],
        bags: [false],
      }),
      packingQuantity: [0],
      disassemblyRequired: [false],
      furnitureToDisassemble: [''],
      disassemblyQuantity: [0],
      courierPayment: [''],
      startingPoint: ['', Validators.required],
      endPoint: ['', Validators.required],
      additionalPoints: this.formBuilder.array([]),
      liftAvailable: [''],
      liftFloor: [0],
      liftType: [''],
    });
  }


  addStop() {
    if (this.additionalPoints.length < 2) {
      this.additionalPoints.push({ point: '' });
    }
  }

  toggleService(service: string) {
    if (this.selectedOptions.includes(service)) {
      this.selectedOptions = this.selectedOptions.filter((s) => s !== service);
    } else {
      this.selectedOptions.push(service);
    }
  }

  uploadImages(event: any) {
    // Ovde dodajte logiku za obradu odabranih slika
  }

  submitForm() {
    emailjs.send('default_service', 'template_1', {
      name: this.name,
      phoneNumber: this.phoneNumber,
      entityType: this.entityType,
      itemsToMove: this.itemsToMove,
      selectedOptions: this.selectedOptions,
      optionQuantities: this.optionQuantities,
      protectionItems: this.protectionItems,
      bulkyItems: this.bulkyItems,
      kilometers: this.kilometers,
      toll: this.toll ? 'Da' : 'Ne',
      packingOptions: this.packingOptions,
      packingQuantity: this.packingQuantity,
      disassemblyRequired: this.disassemblyRequired ? 'Da' : 'Ne',
      furnitureToDisassemble: this.furnitureToDisassemble,
      disassemblyQuantity: this.disassemblyQuantity,
      courierPayment: this.courierPayment,
      startingPoint: this.startingPoint,
      endPoint: this.endPoint,
      additionalPoints: this.additionalPoints,
      liftAvailable: this.liftAvailable,
      liftFloor: this.liftFloor,
      liftType: this.liftType,
    });
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  additionalPoints: any;
  furnitureDescription: string = '';
  selectedImages: File[] = [];
  //selectedOptions: any;

  options = [
    'Selidba ključ u ruke',
    'Sa našim radnicima',
    'Prevoz kabastih stvari',
  ];
  montazaItemsOptions: string[] = [
    'Bračni krevet',
    'Radni sto',
    'Trpezarijski sto',
    'Kauč',
    'Jednokrilni ormar',
    'Dvokrilni ormar',
    'Trokrilni ormar',
    'Luster'
  ];
  demontazaItemsOptions: string[] = [
    'Bračni krevet',
    'Radni sto',
    'Trpezarijski sto',
    'Kauč',
    'Jednokrilni ormar',
    'Dvokrilni ormar',
    'Trokrilni ormar',
    'Luster'
  ];
  selectedMontazaItems: string[] = [];
  selectedDemontazaItems: string[] = [];
  numberOfElements: number = 0;

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item',
    textField: 'item',
    selectAllText: 'Selektuj sve',
    unSelectAllText: 'Deselektuj sve',
    itemsShowLimit: 3,
    allowSearchFilter: false
  };
  selectedOptions: string[] = [];
  furnitureService: string = 'Nameštaj';
  householdService: string = 'Pokućstvo';
numBoxes: any;
numBags: any;
numberOfKilometers: any;
transportDescription: any;
tollRoad: any;
numberOfBags: any;
numberOfBoxes: any;
protectionDescription: any;
demontaza: any;
numberOfElementsMontaza: any;
montageItems: any;
numberOfElementsDemontaza: any;
paymentMethod: any;
tipObjekta: any;
liftOption: any;
brojSpratova: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl(),
      phoneNumber: new FormControl(),
      entityType: new FormControl(),
      furnitureCheckbox: new FormControl(),
      householdCheckbox: new FormControl(),
      itemsToMove: new FormControl(),
      optionQuantities: new FormControl(),
      protectionItems: new FormControl(),
      bulkyItems: new FormControl(),
      kilometers: new FormControl(),
      toll: new FormControl(),
      packingOptions: this.formBuilder.group({
        boxes: new FormControl(),
        bags: new FormControl()
      }),
      packingQuantity: new FormControl(),
      disassemblyRequired: new FormControl(),
      furnitureToDisassemble: new FormControl(),
      disassemblyQuantity: new FormControl(),
      courierPayment: new FormControl(),
      startingPoint: new FormControl(),
      endPoint: new FormControl(),
      additionalPoints: this.formBuilder.array([]),
      liftAvailable: new FormControl(),
      liftFloor: new FormControl(),
      liftType: new FormControl()
    });
  }
  /*
    addStop() {
      if (this.additionalPoints.length < 3) {
        this.additionalPoints.push({ point: '' });
      }
    }
  */
  addStop() {
    const additionalPointsControl = this.form.get('additionalPoints');

    if (additionalPointsControl instanceof FormArray && additionalPointsControl.controls.length < 3) {
      additionalPointsControl.push(new FormControl(''));
    }
  }

  /*

  toggleService(service: string) {
    /*
    if (this.selectedOptions.includes(service)) {
      this.selectedOptions = this.selectedOptions.filter((s: string) => s !== service);
    } else {
      this.selectedOptions.push(service);
    }
    
    if (this.selectedOptions.includes(service)) {
      this.selectedOptions = this.selectedOptions.filter((s: string) => s !== service);
    } else {
      this.selectedOptions.push(service);
    }

    if (service === this.furnitureService || service === this.householdService) {
      if (this.selectedOptions.includes(service)) {
        this.selectedOptions.push(service);
      } else {
        this.selectedOptions = this.selectedOptions.filter((s: string) => s !== service);
      }
    }
  }
*/

toggleService(service: string) {
  if (this.selectedOptions.includes(service)) {
    this.selectedOptions = this.selectedOptions.filter((s: string) => s !== service);
  } else {
    this.selectedOptions.push(service);
  }

  if (service === 'Selidba') {
    if (this.selectedOptions.includes('Selidba')) {
      const furnitureIndex = this.selectedOptions.indexOf('Namestaj');
      const householdIndex = this.selectedOptions.indexOf('Pokucstvo');
      if (furnitureIndex === -1) {
        this.selectedOptions.splice(this.selectedOptions.indexOf('Selidba') + 1, 0, 'Namestaj');
      }
      if (householdIndex === -1) {
        this.selectedOptions.splice(this.selectedOptions.indexOf('Selidba') + 2, 0, 'Pokucstvo');
      }
    } else {
      this.selectedOptions = this.selectedOptions.filter((s: string) => s !== 'Namestaj' && s !== 'Pokucstvo');
    }
  }
}


uploadImages(event: any) {
  const files: FileList = event.target.files;
  for (let i = 0; i < files.length; i++) {
    this.selectedImages.push(files[i]);
  }
}

  submitForm() {
    emailjs.send('default_service', 'template_1', {
      name: this.form.value.name,
      phoneNumber: this.form.value.phoneNumber,
      entityType: this.form.value.entityType,
      itemsToMove: this.form.value.itemsToMove,
      selectedOptions: this.form.value.selectedOptions,
      optionQuantities: this.form.value.optionQuantities,
      protectionItems: this.form.value.protectionItems,
      bulkyItems: this.form.value.bulkyItems,
      kilometers: this.form.value.kilometers,
      toll: this.form.value.toll ? 'Da' : 'Ne',
      packingOptions: this.form.value.packingOptions,
      packingQuantity: this.form.value.packingQuantity,
      disassemblyRequired: this.form.value.disassemblyRequired ? 'Da' : 'Ne',
      furnitureToDisassemble: this.form.value.furnitureToDisassemble,
      disassemblyQuantity: this.form.value.disassemblyQuantity,
      courierPayment: this.form.value.courierPayment,
      startingPoint: this.form.value.startingPoint,
      endPoint: this.form.value.endPoint,
      additionalPoints: this.form.value.additionalPoints,
      liftAvailable: this.form.value.liftAvailable,
      liftFloor: this.form.value.liftFloor,
      liftType: this.form.value.liftType,
    });
  }
}

