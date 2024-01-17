
import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/Services/blogs-data.service';
import { Blog } from 'src/models/firebaseBlog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the necessary modules


@Component({
  selector: 'app-blog-posting',
  templateUrl: './blog-posting.component.html',
  styleUrls: ['./blog-posting.component.scss']
})
export class BlogPostingComponent {
  blogs: Blog[] = [];
  blogForm: FormGroup; // Declare a FormGroup for the form

  constructor(private blogDataService: BlogDataService, private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      Breadcrumb: ['', Validators.required],
      Description: ['', Validators.required],
      Image: ['', Validators.required],
      Stack: ['', Validators.required],
      Title: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.blogDataService.getBlogsData().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }

  // addBlog(): void {
  //   if (this.blogForm.valid) {
  //     const newBlog: Blog = this.blogForm.value;
  //     this.blogDataService.addbBlog(newBlog).subscribe(() => {
  //       this.loadBlogs(); 
  //       this.blogForm.reset(); 
  //     });
  //   }
  // }
}
