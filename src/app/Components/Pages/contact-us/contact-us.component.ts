import { Component, OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser'
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  ContactUSForm = new FormGroup({
    Fname:new FormControl(''),
    Lname:new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    company:new FormControl(''),
    role:new FormControl(''),
    productDesign:new FormControl(''),
    projectDescription:new FormControl(''),
  })
  contactUSFormData(){
    console.log(this.ContactUSForm.value);
    
      }
  constructor(private meta: Meta, private titleService: Title,private router: Router) {}

  ngOnInit() {
    this.titleService.setTitle("Contact Densible: Let's Collaborate for Your Digital Success");
    this.meta.addTag({ name: 'description', content: "Connect with Densible for expertly tailored digital solutions. Reach out to discuss your specific needs and collaborate on driving your digital success." });
  
   // Reset the scroll position to the top when a navigation ends
   this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  })
  }
}
