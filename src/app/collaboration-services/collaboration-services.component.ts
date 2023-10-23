import { Component, OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-collaboration-services',
  templateUrl: './collaboration-services.component.html',
  styleUrls: ['./collaboration-services.component.scss']
})
export class CollaborationServicesComponent implements OnInit {
  tabs: string [] = [
    'Consultation and Analysis',
  'Solution Design and Development',
  'Implementation and Configuration',
   'Maintenance and Optimization',
  ];
  activatedTabIndex: number = 0;
  constructor(private meta: Meta, private titleService: Title,private router: Router) {}
  
  ngOnInit() {
    this.titleService.setTitle('Navigate Success with Densible Dynamic Collaboration Offerings');
    this.meta.addTag({ name: 'description', content: "Elevate digital experiences with Densible's prowess in SharePoint, Umbraco, and Power Apps. Seamlessly connect and partner for unified digital success." });
  
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
