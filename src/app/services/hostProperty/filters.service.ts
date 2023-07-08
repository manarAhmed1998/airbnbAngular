import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(myClient:HttpClient) { 
  }
  private readonly DB_URL_Rules='http://localhost:5073/api/Rule';

}
