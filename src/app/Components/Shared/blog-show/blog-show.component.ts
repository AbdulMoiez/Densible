import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from 'src/app/Services/blogs-data.service';
import { Blog } from 'src/models/firebaseBlog';
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
  image: string = '';
  description: string = '';
  stack: string = '';
  title: string = '';
  breadcrumb: string = '';
  author:string=''
  date:string=''
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
    const blogID = this.route.snapshot.paramMap.get('id');
    console.log(blogID);
    this.blogData.getBlogbyID(blogID).subscribe((res) => {
      this.blogRef = res;
      this.image = this.blogRef.image;
      this.description = this.blogRef.description;
      this.title = this.blogRef.title;
      this.stack = this.blogRef.stack;
      this.breadcrumb = this.blogRef.breadcrumb;
      this.author = this.blogRef.author;
      this.date = this.blogRef.data;
    });
    this.blogData.getData().subscribe((res) => {
      this.Blogs = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Blogs;
      });
    });
  }
}
