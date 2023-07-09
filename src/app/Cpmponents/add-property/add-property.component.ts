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
import { HttpClient } from "@angular/common/http";

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
    { value: "af6f0973-6ee3-4404-afbb-71f2aa214dc4", name: "Egypt" },
    { value: "f801d402-70a9-4e0c-8ef8-1054e35c04da", name: "UAE" },
  ];
  cities: any = {
    Egypt: [{value:"a0015668-7a37-4054-8f53-d7bea2ca4cb9",name:"Cairo"}, 
            {value:"06131d1d-8eb7-414a-a2f9-0e465db109a3", name:"Alexandria"}, 
            {value:"9c7e05b1-286b-48c6-8d54-399c962fb466", name:"Luxor"}, 
            {value:"eae5f318-67ef-4d79-b1c8-5f900e7a023b", name:"Aswan"}, 
            {value:"eae5f318-67ef-4d79-b1c8-5f900e7a023b" ,name:"Hurghada"}],
    UAE: [
      {value:"ffafecfb-47ce-4395-9ed9-9af9e4ff4b25", name:"Dubai"},
      {value:"5bf5c505-900b-42ae-80d1-dd1261d6df69", name:"Abu Dhabi"}, 
      {value:"12fe289d-f1c6-4d7c-80d3-1492d316857b", name:"Sharjah"}],
  };
  
  Amenities = ["WiFi", "TV", "AC", "Kitchen", "Parking"];
  houseRules = ["No smoking", "No parties", "No pets"];

 
   
    
 
  stepperOrientation!: Observable<StepperOrientation>;



  constructor(
    private _formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver, 
    private _http:HttpClient
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
      guestNumber: ["",Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)(\.\d+)?$/)],
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
      noOfBedRooms: ["",Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)(\.\d+)?$/)],
      noOfBeds: ["",Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)(\.\d+)?$/)],
      noOfBathRooms: ["",Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)(\.\d+)?$/)],
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
    propertyToAdd.countryId=secondformValues.country;
    propertyToAdd.cityId=secondformValues.city;
    propertyToAdd.street=secondformValues.address;
    propertyToAdd.guestNumber=firstformValues.guestNumber;
    propertyToAdd.noOfBathRooms=fifthformValues.noOfBathRooms;
    propertyToAdd.noOfBedRooms=fifthformValues.noOfBathRooms;
    propertyToAdd.noOfBeds=fifthformValues.noOfBeds;

    console.log(propertyToAdd);
    this._http.post
    ('http://localhost:5073/api/Property/Add-Property', propertyToAdd).subscribe({
      next:(result)=>{
        console.log("Property Added Successfully", result);
      },
      error:(err)=>{
        console.log("Error Adding the property:", err);
      }
    })
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
