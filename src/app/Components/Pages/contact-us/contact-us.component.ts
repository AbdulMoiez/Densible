import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobFormService } from 'src/app/Services/job-form.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  isLoading = false;
  showToast = false;
  toastMessage = '';
  ContactUSForm = new FormGroup({
    Fname: new FormControl('', Validators.required),
    Lname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    role: new FormControl(''),
    productDesign: new FormControl('', Validators.required),
    projectDescription: new FormControl('', Validators.required),
  });
  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router,
    private jobFormService: JobFormService
  ) {}
  contactUSFormData() {
    const emailControl = this.ContactUSForm.get('email');

    if (this.ContactUSForm.invalid) {
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

    const formData = new FormData();
    // TODO: User path function to update form value
    formData.append('name', this.ContactUSForm.get('name')?.value || '');
    formData.append('email', this.ContactUSForm.get('email')?.value || '');
    formData.append('phone', this.ContactUSForm.get('phone')?.value || '');
    formData.append('message', this.ContactUSForm.get('message')?.value || '');
    formData.append('role', this.ContactUSForm.get('role')?.value || '');
    formData.append('company', this.ContactUSForm.get('company')?.value || '');
    formData.append(
      'productDesign',
      this.ContactUSForm.get('productDesign')?.value || ''
    );
    formData.append(
      'projectDescription',
      this.ContactUSForm.get('projectDescription')?.value || ''
    );
    this.isLoading = true;
    this.jobFormService.contactUsFormData(formData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.toastMessage = response;
        this.showToastMessage(response);
        this.ContactUSForm.reset();
      },
      error: (error) => {
        this.toastMessage = error;
        this.showToastMessage(error);
        this.isLoading = false;
      },
    });
  }

  ngOnInit() {
    this.titleService.setTitle(
      "Contact Densible: Let's Collaborate for Your Digital Success"
    );
    this.meta.addTag({
      name: 'description',
      content:
        'Connect with Densible for expertly tailored digital solutions. Reach out to discuss your specific needs and collaborate on driving your digital success.',
    });

    // Reset the scroll position to the top when a navigation ends
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
}
