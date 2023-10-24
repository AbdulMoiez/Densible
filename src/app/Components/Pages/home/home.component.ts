import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
