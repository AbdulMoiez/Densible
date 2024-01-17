import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobFormService } from 'src/app/Services/job-form.service';

@Component({
  selector: 'app-business-development-executive',
  templateUrl: './business-development-executive.component.html',
  styleUrls: ['./business-development-executive.component.scss'],
})
export class BusinessDevelopmentExecutiveComponent implements OnInit {
  isLoading = false; // Add a flag to control the error message
  applicantForm: FormGroup;
  resumeFileName = '';
  formData = new FormData();
  showToast = false;
  toastMessage = '';

  constructor(
  
    private fb: FormBuilder,
    private meta: Meta,
    private titleService: Title,
    private router: Router,
    private jobFormService: JobFormService
  ) {
    this.applicantForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      role: ['',Validators.required],
      resume: ['',],
    });
  }
  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.resumeFileName = file.name;
      this.formData.append('resume', file);
    }
  }

  applicantFormData() {
    try {
      // Check if the form is valid
      if (this.applicantForm.valid) {
        // Check if the resume field is empty
        if (!this.formData.has('resume')) {
          this.toastMessage = "Please upload your resume";
          this.showToastMessage(this.toastMessage);
          return; // Prevent form submission
        }
  
        this.isLoading = true;
        for (const key in this.applicantForm.value) {
          if (this.applicantForm.value.hasOwnProperty(key) && key !== 'resume') {
            this.formData.append(key, this.applicantForm.value[key]);
          }
        }
  
        this.jobFormService.submitApplicantForm(this.formData).subscribe({
          next: (response) => {
            this.isLoading = false;
            this.applicantForm.reset();
            this.toastMessage = response;
            console.log(response)
            this.showToastMessage(response);
          },
          error: (error) => {
            console.error('Error sending email:', error);
            this.isLoading = false;
            this.showToastMessage('Error submitting application. Please try again.');
          },
        });
      } else {
        // Form is not valid, show error message
       this.toastMessage = "Please fill all the required fields";
        this.showToastMessage(this.toastMessage);
      }
    } catch (error) {
      console.log(error);
    }
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
