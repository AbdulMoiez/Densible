import { Component, OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-backend-development-services',
  templateUrl: './backend-development-services.component.html',
  styleUrls: ['./backend-development-services.component.scss']
})
export class BackendDevelopmentServicesComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title, private router: Router) {}
  
  ngOnInit() {
    this.titleService.setTitle('Elevate Performance: Densible Tailored Back-End Solution');
    this.meta.addTag({ name: 'description', content: "Transform your online presence with Densible's expert back-end development solutions. Elevate performance, ensure seamless functionality and fuel growth." });
  
    // Reset the scroll position to the top when a navigation ends
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  })
  }
}
