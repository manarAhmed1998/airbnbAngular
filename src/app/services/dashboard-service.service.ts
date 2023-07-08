import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesDto } from '../Cpmponents/types/RolesDto';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private myClient:HttpClient) { 

  }
  private readonly DB_URL_Rules='http://localhost:5073/api/Rule';


  ///////Rules///////////

  // AddRules(file:File):Observable<RolesDto>{
  //   var form = new FormData();
  //   form.append('file',file);
  //   return this.myClient.post<RolesDto>('http://localhost:5073/api/Rule/Add',form);
  //  }
  AddRules(formData: FormData): Observable<RolesDto> {
    return this.myClient.post<RolesDto>(`${this.DB_URL_Rules}/Add`, formData);
  }

   GetRules():Observable<any>{
    return this.myClient.get(this.DB_URL_Rules);
   }

   GetRulesById(id:number){
    return this.myClient.get(this.DB_URL_Rules+id);
  }
  //////////////////////

}
