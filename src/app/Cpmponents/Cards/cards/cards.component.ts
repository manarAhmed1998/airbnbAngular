import { Component } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards:any;
  constructor(myService:CardsService){
    myService.getAllCards().subscribe(
      {
        next:(data)=>{console.log(data);
        
          this.cards=data;
        },
        error:(err)=>{console.log(err)},
        complete:()=>{}
      }
      
    )
  }
}
