import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    // TODO: Improve Logics
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkIfNewBlogWithId();
      });
  }

  // Existing methods...

  showSlider(): boolean {
    return this.router.url === '/';
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
  isAdminPanel(): boolean {
    return this.router.url == '/admin';
  }
  isNewBlog(): boolean {
    return this.router.url == '/new-blog';
  }
  isNewBlogWithId(): boolean {
    const urlSegments = this.router.url.split('/');
    const hasNewBlogSegment = urlSegments.includes('new-blog');
    const hasIdParam = urlSegments.length > 2 && urlSegments[2] !== 'new-blog';

    return hasNewBlogSegment && hasIdParam;
  }

  checkIfNewBlogWithId(): void {
    if (this.isNewBlogWithId()) {
    } else {
    }
  }
  isCareersPage(): boolean {
    return this.router.url === '/careers/business-development-executive';
  }
  showBlogComponent: boolean = false;

 
}
