import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobFormService {
  private apiUrl1 = '/api/job-form.php'; // Adjust the URL based on your backend server
  private apiUrl2 = '/api/contact-form.php';

  constructor(private http: HttpClient) {}

  submitApplicantForm(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl1, formData, { responseType: 'text' });
  }
  sendFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl2, formData, { responseType: 'text' });
  }
  contactUsFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl2, formData, { responseType: 'text' });
  }
}
