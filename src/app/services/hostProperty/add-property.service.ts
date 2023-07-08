
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPropertyService {
  private apiUrl = 'assets/fake-api.json';

  constructor(private http: HttpClient) {}

  getPropertyTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}?propertyTypes`);
  }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?countries`);
  }

  getPropertyRules(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}?propertyRules`);
  }

  getAmenities(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}?amenities`);
  }

  getProperties(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?properties`);
  }
}