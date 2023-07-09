import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./Cpmponents/Footer/footer/Footer/footer.component";
import { HeaderComponent } from "./Cpmponents/header/header.component";
import { CardsComponent } from "./Cpmponents/Cards/cards/cards.component";
import { FiltersComponent } from "./Cpmponents/filters/filters.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchComponent } from "./Cpmponents/search/search.component";
import { CardDetailsComponent } from "./Cpmponents/card-details/card-details.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { SignInComponent } from "./Cpmponents/sign-in/sign-in.component";
import { SignUpComponent } from "./Cpmponents/sign-up/sign-up.component";
import { MaterialModule } from "./shared/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogRef, MatDialogConfig } from "@angular/material/dialog";
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from "@angular/material/dialog";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorComponent } from "./Cpmponents/error/error.component";
import { RouterModule,Routes,ROUTES } from "@angular/router";
import { AddPropertyComponent } from "./Cpmponents/add-property/add-property.component";
import { NotFoundComponent } from './Cpmponents/not-found/not-found.component';
import { AmenitiesDasboardComponent } from "./Cpmponents/amenities-dasboard/amenities-dasboard.component";
import { ChartsDashboardComponent } from "./Cpmponents/charts-dashboard/charts-dashboard.component";
import { NavbarDashboardComponent } from "./Cpmponents/navbar-dashboard/navbar-dashboard.component";
import { DashboardComponent } from './Cpmponents/dashboard/dashboard.component';
import { YourPropertiesComponent } from './Cpmponents/your-properties/your-properties.component';
import { HostReservationComponent } from './Cpmponents/host-reservation/host-reservation.component';
import { RoleDashboardComponent } from './Cpmponents/role-dashboard/role-dashboard.component';
import { RuleDashboardComponent } from './Cpmponents/rule-dashboard/rule-dashboard.component';

import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { ReservationsComponent } from './Cpmponents/reservations/reservations.component';
import { AuthenticationInterceptor } from "./interceptions/authentication.interceptor";

let routes:Routes=[
  {path:'add-property' , component: AddPropertyComponent  },
  {path:'',component:CardsComponent},
  {path:'home',component:CardsComponent},
  {path:'cards',component:CardsComponent},
  {path:'cards/:id',component:CardDetailsComponent},
  {path:'your-property',component:YourPropertiesComponent},
  {path:'host-reservations',component:HostReservationComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'reservations',component:ReservationsComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [    
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    FiltersComponent,
    SearchComponent,
    CardDetailsComponent,
    SignInComponent,
    SignUpComponent,
    AmenitiesDasboardComponent,
    NavbarDashboardComponent,
    ChartsDashboardComponent,
    ErrorComponent,
    NotFoundComponent,
    DashboardComponent,
    ErrorComponent,
    YourPropertiesComponent,
    HostReservationComponent,
    RoleDashboardComponent,
    RuleDashboardComponent,
    AddPropertyComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MaterialModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatStepperModule,
    RouterModule.forRoot(routes)
  ],
  providers: 
  [
    { provide: MatDialogRef, useValue: {} },
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:AuthenticationInterceptor,
      multi:true,
    }
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
