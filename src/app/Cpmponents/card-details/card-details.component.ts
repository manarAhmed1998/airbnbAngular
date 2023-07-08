import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CardsService } from "src/app/services/cards.service";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-card-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.css"],
})

//oninit starts after constructor to ensure that the vars have been intialized first(after constructor)
export class CardDetailsComponent implements OnInit {
  id = 0;
  card: any;
  startDate:any ;
  endDate!:Date;
  minDate:Date=new Date();

  constructor(myRoute: ActivatedRoute,public myService: CardsService) {
    //specifying the id of each card
    this.id = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    //using the service
    this.myService.getCardById(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.card = data;
      },
      error: (err) => {console.log(err);},
      complete: () => {},

    });
  }

  onCheckInDateChange(){
    console.log(this.startDate);
    //console.log(this.endDate);
    console.log(this.minDate)
  }
}
