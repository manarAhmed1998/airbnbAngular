import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormArray,
} from "@angular/forms";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import {
  StepperOrientation,
  MatStepperModule,
} from "@angular/material/stepper";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgSwitch, NgSwitchCase, AsyncPipe } from "@angular/common";
import { MaterialModule } from "src/app/shared/material.module";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatCard, MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { AddPropertyDto } from "../types/AddPropertyDto";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-add-property",
  templateUrl: "./add-property.component.html",
  styleUrls: ["./add-property.component.css"],
})
export class AddPropertyComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
i:number=0;
  propertyTypes = ["House", "Apartment"];
  countries = [
    { value: "Egypt", name: "Egypt" },
    { value: "UAE", name: "UAE" },
  ];
  cities: any = {
    Egypt: ["Cairo", "Alexandria", "Luxor", "Aswan", "Hurghada"],
    UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
    India: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"],
    USA: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
  };
  Amenities = ["WiFi", "TV", "AC", "Kitchen", "Parking"];
  houseRules = ["No smoking", "No parties", "No pets"];

 
   
    
 
  stepperOrientation!: Observable<StepperOrientation>;



  constructor(
    private _formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      propertyType: ["", Validators.required],
      propertyTitle: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      pricePerNight: [
        "",
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)(\.\d+)?$/)],
      ],
      insuranceTax: [
        "",
        [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)(\.\d+)?$/)],
      ],
      description: ["", Validators.maxLength(250)],
    });
    this.secondFormGroup = this._formBuilder.group({
      country: ["", Validators.required],
      city: ["", Validators.required],
      address: ["", Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      amenities: this._formBuilder.array(this.Amenities.map(() => false)),
    });

    this.fourthFormGroup = this._formBuilder.group({
      rules: this._formBuilder.array(this.houseRules.map(() => false)),
    });
    this.fifthFormGroup = this._formBuilder.group({
    });

    this.stepperOrientation = this.getStepperOrientation();
    
  }
  
  save(){
    var propertyToAdd=new AddPropertyDto();
    const firstformValues = this.firstFormGroup.value;
    const secondformValues = this.secondFormGroup.value;
    const thirdormValues = this.thirdFormGroup.value;
    const fourthformValues = this.fourthFormGroup.value;
    const fifthformValues = this.fifthFormGroup.value;
    propertyToAdd.propertyType=firstformValues.propertyType;
    propertyToAdd.pricePerNight=firstformValues.pricePerNight;
    propertyToAdd.insuranceTax=firstformValues.insuranceTax;
    propertyToAdd.description=firstformValues.description;
    propertyToAdd.country=secondformValues.country;
    propertyToAdd.city=secondformValues.city;
    propertyToAdd.street=secondformValues.address;
    propertyToAdd.PropertyAmenities=thirdormValues.amenities;
    propertyToAdd.propertyRules=fourthformValues.rules;
    propertyToAdd.rooms=fifthformValues.room;
    propertyToAdd.propertyTitle;
    console.log(propertyToAdd);
  }


     
  
  
  get amenitiesFormArray(): FormArray {
    return this.thirdFormGroup.get("amenities") as FormArray;
  }
  filteredCities: string[] = [];

  getCities(country: string) {
    return (this.filteredCities = this.cities[country]);
  }

  onCountrySelected(countryValue: string) {
    this.filteredCities = this.getCities(countryValue);
  }

  private getStepperOrientation(): Observable<StepperOrientation> {
    return this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Handset])
      .pipe(
        map((result) => {
          if (result.matches) {
            return "vertical";
          } else {
            return "horizontal";
          }
        })
      );

      
  }

  saveForm() {
      
  }

onFileSelected(event: any, room: Room) {
  const file: File = event.target.files[0];
  const url: string = URL.createObjectURL(file);
  room.roomImage = url;
}
}
interface Room {
  type: string;
  numBeds: string;
  roomCount: string;
  roomImage: string;
  bedroom?: boolean;
}
