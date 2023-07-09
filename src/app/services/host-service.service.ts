import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostServiceService {

  constructor(private readonly myClient:HttpClient) { }

  private readonly baseURL="http://localhost:5073/api/host";

   getAllHostReservation(){
    return this.myClient.get(`${this.baseURL}/reservations`);
   }

}
