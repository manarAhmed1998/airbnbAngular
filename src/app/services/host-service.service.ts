import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddReservationDto } from '../Cpmponents/types/addReservationDto';

@Injectable({
  providedIn: 'root'
})
export class HostServiceService {

  constructor(private readonly myClient:HttpClient) { }

  private readonly baseURL="http://localhost:5073/api";

   getAllHostReservation(){
    return this.myClient.get(`${this.baseURL}/host/reservations`);
   }
   AddReservation(addReservationDto:AddReservationDto){
    return this.myClient.post(`${this.baseURL}/Reservation/Add-Reservation`, addReservationDto);
   }

}
