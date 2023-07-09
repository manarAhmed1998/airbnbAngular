import { Component } from '@angular/core';
import { HostServiceService } from 'src/app/services/host-service.service';

@Component({
  selector: 'app-host-reservation',
  templateUrl: './host-reservation.component.html',
  styleUrls: ['./host-reservation.component.css']
})
export class HostReservationComponent {
  reservations: any
  constructor(private myService: HostServiceService) {
    myService.getAllHostReservation().subscribe({
      next: (data) => { this.reservations = data ;
      console.log(this.reservations)},
      error: (err) =>{console.log(err)}
    })
  }
}
