import { Component } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  showSlider(): boolean {
    // Check if the current route is the index (home) page
    return this.router.url === '/';
  }
  isHomePage(): boolean {
    return this.router.url === '/';
  }
}
