import { Component } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-charts-dashboard',
  templateUrl: './charts-dashboard.component.html',
  styleUrls: ['./charts-dashboard.component.css']
})
export class ChartsDashboardComponent {
  constructor() {}


  ngOnInit():void{
 this.RenderChart();
  }
 
  RenderChart(){
   const myChart = new Chart("piechart", {
     type: 'bar',
     data: {
         labels: ['NewUsers', 'Guest Users', 'Host Users', 'Host & Guest Users', 'Panned Users', 'Vip Users'],
         datasets: [{
             label: '# of Users',
             data: [12, 19, 3, 5, 2, 20],
             backgroundColor: [
            
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
  
 
  const donughchart = new Chart("donughtchart", {
   
    type: 'pie',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Bookings',
        data: [20, 19, 3, 5, 2, 3, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        borderWidth: 1
      }]
    },
    options: {
   
    }
  });
  const areaChart = new Chart('myChart', {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Profits',
        data: [10, 19, 3, 5, 18, 3, 15],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: 'origin'
      }]
    },
    options: {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month'
          },
          grid: {
            display: false 
          }
        
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Rents'
          },
          suggestedMin: 0,
          suggestedMax: 50
        }
        
      },
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          enabled: true
        }
      }
    }
  });

 
}
}
