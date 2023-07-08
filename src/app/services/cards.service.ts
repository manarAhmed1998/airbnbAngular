import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private readonly myClient:HttpClient) {
   }

   private readonly baseURL="http://localhost:5073/api/Property";

   getAllCards(){
    return this.myClient.get(this.baseURL);
   }

   getCardById(id:any){
    return this.myClient.get(this.baseURL+'/'+id);
   }

}
