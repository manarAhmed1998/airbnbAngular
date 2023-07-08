import { Component } from '@angular/core';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
@Component({
  selector: 'app-rule-dashboard',
  templateUrl: './rule-dashboard.component.html',
  styleUrls: ['./rule-dashboard.component.css']
})
export class RuleDashboardComponent {
 imageUrl = ' ';

 constructor(private dashboardService : DashboardServiceService) {}


}




