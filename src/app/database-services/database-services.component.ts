import { Component, OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser'

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-database-services',
  templateUrl: './database-services.component.html',
  styleUrls: ['./database-services.component.scss']
})
export class DatabaseServicesComponent implements OnInit {
  tabs: string [] = [
    'Needs Assessment and Goal Definition',
  'Database Architecture and Design',
  'Data Migration and Integration',
   'Performance Optimization and Query Tuning',
  'Data Security and Compliance',
  'Continuous Monitoring and Support',
  'Scalability and Future Growth'];
  activatedTabIndex: number = 0;
  constructor(private meta: Meta, private titleService: Title, private router: Router) {}

  ngOnInit() {
    this.titleService.setTitle('Elevate Insights with Densible: Pioneering Database Solutions');
    this.meta.addTag({ name: 'description', content: "Densible: Your Trusted and Innovative Partner for Implementing, and Optimizing Expert MySQL, Microsoft SQL Server, PostgreSQL, and Azure SQL Solutions." });
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

