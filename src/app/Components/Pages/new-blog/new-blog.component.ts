import { Component, OnInit, EventEmitter, Output,ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { BlogDataService } from 'src/app/Services/blogs-data.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularFireStorage } from '@angular/fire/compat/storage'

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss'],
})
export class NewBlogComponent implements OnInit {
  @ViewChild('authorPicInput', { static: false, read: ElementRef }) authorPicInput: ElementRef;
  @ViewChild('imageInput', { static: false, read: ElementRef }) imageInput: ElementRef;
  
  @Output() closeModalEvent = new EventEmitter();
  blogForm: FormGroup;
  blogRef: any;
  blogId: number;
  isLoading = false;
  showToast = false;
  toastMessage = '';
  blogImageUrl: string = '';
  tags: string[] = [];
 authorPicUrl:string = '';
  description: string = ``
  existingTags: string[] = [];
   editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Sora',
   
  };

  constructor(
    private blogData: BlogDataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private fireStorage: AngularFireStorage
  ) {
    this.blogForm = this.fb.group({
      breadcrumb: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['',Validators.required],
      stack: ['', Validators.required],
      author: ['', Validators.required],
      authorPic: ['',Validators.required],
      tags: [''],
    });
  }

  ngOnInit(): void {
    const ID = this.route.snapshot.paramMap.get('id');
    this.blogData.getBlogByID(ID).subscribe((res) => {
      this.blogRef = res;
  
      // Check if blogRef.tags is defined before using split()
      if (this.blogRef && this.blogRef.tags) {
        this.existingTags = this.blogRef.tags.split(',').map((tag: string) => tag.trim());
      } else {
        this.existingTags = [];
      }
  
      this.blogForm.patchValue({
        author: this.blogRef.author,
        breadcrumb: this.blogRef.breadcrumb,
        title: this.blogRef.title,
        description: this.blogRef.description,
        stack: this.blogRef.stack,
        // tags: this.existingTags.join(', '),
        authorPic: '',
        image: ''
      });
    });
  }
  
  addTag(event: KeyboardEvent): void {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement instanceof HTMLInputElement) {
      const inputValue = (inputElement.value || '').trim();
  
      if (event.key === ' ' && inputValue !== '') {
        this.existingTags.push(inputValue);
  
        // Check if the form control exists before setting its value
        const tagsFormControl = this.blogForm.get('tags');
        if (tagsFormControl) {
          tagsFormControl.setValue(this.existingTags.join(', '));
        }
  
        inputElement.value = '';
        event.preventDefault(); // Prevents adding a space to the input field
      }
    }
  }
  
  removeTag(index: number): void {
    this.existingTags.splice(index, 1);
  
    // Check if the form control exists before setting its value
    const tagsFormControl = this.blogForm.get('tags');
    if (tagsFormControl) {
      tagsFormControl.setValue(this.existingTags.join(', '));
    }
  }
  async PicUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.isLoading = true;
      const path = `profilePic/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
  
      // Add a new field to the form
      this.blogForm.addControl('authorPicUrl', this.fb.control(url));
      this.isLoading = false;
    }
  }
  
  
  
  
  
  
  async blogImageUpload(event: any) {
    this.isLoading = true;
    const file = event.target.files[0];
    if (file) {
      const path = `blogImage/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
     // Add a new field to the form
     this.blogForm.addControl('blogImageUrl', this.fb.control(url));
      this.isLoading = false;
  
    }
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
      // Define required fields
      const requiredFields = ['author', 'authorPic', 'breadcrumb', 'title', 'stack', 'description', 'image','tags'];
  
      // Validate if any required field is empty
      for (const field of requiredFields) {
        if (!this.blogForm.value[field]) {
          throw new Error(`Please fill the ${field}`);
        }
      }
  
      // Remove fields that shouldn't be sent to the database
      const formData = { ...this.blogForm.value };
      delete formData.image;
      delete formData.authorPic;
  
      if (ID) {
        // Update existing blog
        console.log(formData)
        console.log(formData.tags)
        await this.blogData.updateBlog(formData, ID);
  
        this.isLoading = false;
        this.showToastMessage('Blog updated successfully');
        setTimeout(() => this.router.navigate(['/admin']), 3000);
      } else {
        // Add new blog
        console.log(formData.tags)
        console.log(formData)
        await this.blogData.addBlog(formData);
  
        this.isLoading = false;
        this.showToastMessage('Blog added successfully');
        setTimeout(() => this.router.navigate(['/admin']), 3000);
      }
    } catch (error: any) {
      console.error('Error:', error.message);
      this.isLoading = false;
      this.showToastMessage(error.message || 'An error occurred');
    }
  }
  
}
  


