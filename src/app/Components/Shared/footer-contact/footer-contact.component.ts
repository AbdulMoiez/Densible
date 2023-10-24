import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent {
contactForm = new FormGroup({
  name:new FormControl(''),
  email: new FormControl(''),
  phone: new FormControl(''),
  message:new FormControl(''),
})
  contactFormData(){
console.log(this.contactForm.value);

  }


}
