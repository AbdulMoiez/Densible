import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from 'src/app/Services/blogs-data.service';
import { Blogs } from 'src/models/firebaseBlog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.scss'],
})
export class BlogShowComponent implements OnInit {
  Blogs: Blogs[];
  blogID: any = '';
  blogImageUrl: string = '';
  description: string = '';
  stack: string = '';
  title: string = '';
  breadcrumb: string = '';
  author: string = '';
  date: string = '';
  authorPicUrl: string = '';
  tags:string = ''
  blogRef: any;

  constructor(
    private route: ActivatedRoute,
    private blogData: BlogDataService,
    private sanitizer: DomSanitizer
  ) {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe((params) => {
      // Get the blog ID from the route parameters
      const blogID = params.get('id');

      // Fetch blog data using the blog ID
      this.blogData.getBlogByID(blogID).subscribe((res) => {
        this.blogRef = res;
        
        this.blogImageUrl = this.blogRef.blogImageUrl;
        this.description = this.blogRef.description;
        this.title = this.blogRef.title;
        this.stack = this.blogRef.stack;
        this.breadcrumb = this.blogRef.breadcrumb;
        this.author = this.blogRef.author;
        this.date = this.blogRef.data;
        this.authorPicUrl = this.blogRef.authorPicUrl;
        this.tags = this.blogRef.tags
        
      });
    });

    // Fetch all blogs data
     this.blogData.getData().subscribe(
      (res: any[]) => {
  
        this.Blogs = res
          .map((e) => {
            const blog = e as Blogs;
            return blog;
          });
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
