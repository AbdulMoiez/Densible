import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobFormService } from 'src/app/Services/job-form.service';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent {
  isLoading = false;
  showToast = false;
  toastMessage = '';
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
 
  constructor(private jobFormService: JobFormService) {}

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  contactFormData() {
    const emailControl = this.contactForm.get('email');
  
    if (this.contactForm.invalid) {
      let msg = 'Please fill in all required fields with valid data.';
      this.toastMessage = msg;
      this.showToastMessage(msg);
      return;
    }
  
    if (emailControl?.hasError('email')) {
      let emailMsg = 'Email is not valid.';
      this.toastMessage = emailMsg;
      this.showToastMessage(emailMsg);
      return;
    }
  // TODO: Use Patch function
    const formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value || '');
    formData.append('email', this.contactForm.get('email')?.value || '');
    formData.append('phone', this.contactForm.get('phone')?.value || '');
    formData.append('message', this.contactForm.get('message')?.value || '');
    this.isLoading = true;
    this.jobFormService.sendFormData(formData)
    // TODO: Update Subscribe syntax
      .subscribe(response => {
        this.isLoading = false;
        this.toastMessage = response;
        this.showToastMessage(response);
        this.contactForm.reset();
      }, error => {
        this.toastMessage = error;
        this.showToastMessage(error);
      });
  }
  
}