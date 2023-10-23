import { Component, OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-frontend-development-services',
  templateUrl: './frontend-development-services.component.html',
  styleUrls: ['./frontend-development-services.component.scss']
})
export class FrontendDevelopmentServicesComponent implements OnInit {
  tabs: string [] = [
  'UI/UX Design Planning',
  'Technology Selection',
  'Responsive Design',
  'Performance Optimization',
  'Continuous Integration and Deployment (CI/CD)',
  'Deployment and Hosting'];
  activatedTabIndex: number = 0;
  constructor(private meta: Meta, private titleService: Title,private router: Router) {}

  ngOnInit() {
    this.titleService.setTitle('Elevate User Experiences: Front-End Services by Densible');
    this.meta.addTag({ name: 'description', content: "Craft Exceptional user experiences with React, Angular, and Vue front-end services by Densible. Explore expert solutions for engagement and digital success." });
 
    // Reset the scroll position to the top when a navigation ends
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    })
  }
  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }
}
