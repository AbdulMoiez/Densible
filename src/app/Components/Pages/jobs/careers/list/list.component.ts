import { Component } from '@angular/core';
import { Blogs } from 'src/models/firebaseBlog';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class JobListComponent {
  Blogs: Blogs[];
  Job1 = [
    { 
      image: '/assets/img/jobs/densible job 1.png', 
      title: 'Business Development Executive', 
      link: 'business-development-executive',
      type: "IT Services",
      desc:"Densible is seeking a motivated Business Development Executive to lead our business expansion efforts......."
    }
  ]

}
