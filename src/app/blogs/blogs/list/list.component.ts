import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class BlogListComponent {
  Blogs = [
    { 
      image: '/assets/img/projects/project-7.jpeg', 
      title: 'Document Approval SPFx Component', 
      link: 'document-approval-spfx-component',
      type: "Sharepoint"
    },
  ]
  Blogs2 = [
    { 
      image: '/assets/img/blog/tascus-api-project-2.jpg', 
      title: 'Tascus Api Project', 
      link: 'tascus-api-project',
      type: "Tascus-API"
    },
  ]
}
