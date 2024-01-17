import { Component } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class JobListComponent {
  Job1 = [
    { 
      image: '/assets/img/jobs/densible job 1.png', 
      title: 'Business Development Executive', 
      link: 'business-development-executive',
      type: "IT Services"
    }
  ]

}
