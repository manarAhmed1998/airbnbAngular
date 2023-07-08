import { Component,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-amenities-dasboard',
  templateUrl: './amenities-dasboard.component.html',
  styleUrls: ['./amenities-dasboard.component.css']
})
export class AmenitiesDasboardComponent {
  amenities = [
    { id: 1, icon: 'icon1', content: '...' },
    { id: 2, icon: 'icon2', content: '...' }
  ];
  
}
