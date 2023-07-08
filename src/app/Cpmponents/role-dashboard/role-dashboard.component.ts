import { Component } from '@angular/core';

@Component({
  selector: 'app-role-dashboard',
  templateUrl: './role-dashboard.component.html',
  styleUrls: ['./role-dashboard.component.css']
})
export class RoleDashboardComponent {
  roles = [
    { id: 1, role: 'guest'},
    { id: 2, role: 'host'  }
  ];
}
