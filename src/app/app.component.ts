import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /**
   *
   */
  constructor(private authService:AuthenticationService) {
    if(localStorage.getItem('token')){
      this.authService.isLoggedIn$.next(true);
    }
  }
  ngOnInit(): void {
    
  }
  title = 'final';

}
