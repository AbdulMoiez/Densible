import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogDataService } from 'src/app/Services/blogs-data.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss'],
})
export class NewBlogComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter();
  blogForm: FormGroup;
  blogRef: any;
  blogId: number;
  isLoading = false;
  showToast = false;
  toastMessage = '';
 description: string = ``
   editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };

  constructor(
    private blogData: BlogDataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // TODO: Add Validators
    this.blogForm = this.fb.group({
      breadcrumb: [''],
      title: [''],
      description: [''],
      image: [''],
      stack: [''],
      author:[''],
    });
  }

  ngOnInit(): void {
    const ID = this.route.snapshot.paramMap.get('id');
    this.blogData.getBlogbyID(ID).subscribe((res) => {
      this.blogRef = res;
      // TODO: User Patch function
      this.blogForm = this.fb.group({
        author:[this.blogRef.author],
        breadcrumb: [this.blogRef.breadcrumb],
        title: [this.blogRef.title],
        description: [this.blogRef.description],
        image: [this.blogRef.image],
        stack: [this.blogRef.stack],
      });
    });
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
  async updateOrAddBlog() {
    const ID = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;

    try {
      // Validate if any field is empty
      if (Object.values(this.blogForm.value).some(value => value === '')) {
        throw new Error('Please fill all the fields');
      }

      if (ID) {
        // Update existing blog
        await this.blogData.updateblog(this.blogForm.value, ID);

        this.isLoading = false;
        let response = 'Blog updated successfully';
        this.toastMessage = response;
        this.showToastMessage(response);
        setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 3000);
      } else {
        // Add new blog
        await this.blogData.addblog(this.blogForm.value);

        this.isLoading = false;
        let response = 'Blog added successfully';
        this.toastMessage = response;
        this.showToastMessage(response);
        setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 3000);
      }
    } catch (error:any) {
      console.error('Error:', error.message);
      this.isLoading = false;
      this.toastMessage = error.message || 'An error occurred';
      this.showToastMessage(this.toastMessage);
    }
  }
}
  


