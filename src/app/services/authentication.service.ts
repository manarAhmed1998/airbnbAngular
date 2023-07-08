import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../Cpmponents/types/LoginDto';
import { TokenDto } from '../Cpmponents/types/TokenDto';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isLoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor(private client:HttpClient) { }
  public Login (credentials:LoginDto):Observable<TokenDto>{
    return this.client.post<TokenDto>('http://localhost:5073/api/Auth/Login', credentials)
    .pipe(
      tap((tokenDto)=>{
        localStorage.setItem('token', tokenDto.token);
        this.isLoggedIn$.next(localStorage.getItem('token')!==null);
      })
    )
  }  
}
