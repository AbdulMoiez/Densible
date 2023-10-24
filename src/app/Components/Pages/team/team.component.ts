import { Component, OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title,private router: Router) {}

  ngOnInit() {
    this.titleService.setTitle("Meet Our Team: Densible's Experts Driving Digital Success");
    this.meta.addTag({ name: 'description', content: "Discover the exceptional individuals behind Densible's success. Meet our dedicated team of experts, driving digital innovation, collaboration, and excellence." });
  
     // Reset the scroll position to the top when a navigation ends
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    })
  }
}