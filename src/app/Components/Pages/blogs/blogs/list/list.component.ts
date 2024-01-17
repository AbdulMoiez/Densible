import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogDataService } from 'src/app/Services/blogs-data.service';
import { Blogs } from 'src/models/firebaseBlog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogsData: any[] = [];
  Blogs: Blogs[];
  constructor(private router: Router, private blogData: BlogDataService) {}

  ngOnInit(): void {
    this.blogData.getData().subscribe((res) => {
      this.Blogs = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Blogs;
      });
    });
  }

  getAllBlogs(): void {
    this.blogData.getData().subscribe((blogs) => {
      this.blogsData = blogs;
    });
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
