import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  constructor(private router: Router) {}
  ngOnInit() {
    
   // Reset the scroll position to the top when a navigation ends
   this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  })
}
}
