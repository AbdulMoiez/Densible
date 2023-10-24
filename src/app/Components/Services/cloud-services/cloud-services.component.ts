import { Component, OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-cloud-services',
  templateUrl: './cloud-services.component.html',
  styleUrls: ['./cloud-services.component.scss']
})
export class CloudServicesComponent implements OnInit {
  
  tabs: string [] = ['Cloud Strategy and Consulting',
  'Cloud Migration and Deployment',
  'Cloud Application Development',
  'Cloud Data Management and Analytics',
  'Cloud Security and Compliance',
  'Cloud Cost Optimization',
  'Cloud Backup and Disaster Recovery'];

  tab2: string[]=['Azure', 'AWS']

  activatedTabIndex: number = 0;
  constructor(private meta: Meta, private titleService: Title,private router: Router) {}
  
  ngOnInit() {
    this.titleService.setTitle('Densible: Pioneering Success with our Cloud Services');
    this.meta.addTag({ name: 'description', content: "Elevate success with Densible's AWS and Azure cloud expertise. Transform and innovate your digital landscape. Partner with us for expert cloud services." });
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
