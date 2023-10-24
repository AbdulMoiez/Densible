import { Component, OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser'
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUSComponent implements OnInit {

    constructor(private meta: Meta, private titleService: Title,private router: Router) {}
  ngOnInit(){
      this.titleService.setTitle('Densible: Our Journey, Values, and Vision for Digital Excellence');
      this.meta.addTag({ name: 'description', content: "Explore Densible's inspiring journey of innovation, expertise, and digital excellence. Discover our values, team, and commitment to driving success." });
      
      // Reset the scroll position to the top when a navigation ends
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0); // Scroll to the top of the page
        }
      })
    }
  }