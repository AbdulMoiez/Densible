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
  tagsData: string[] = [];
  allBlogs: Blogs[];
  tagSelected: boolean = false;

  constructor(private router: Router, private blogData: BlogDataService) {}
  ngOnInit(): void {
    this.blogData.getData().subscribe(
      (res: any[]) => {
        this.Blogs = res.map((e) => e as Blogs);

        // Extract tags from each blog and store them in tagsData
        this.Blogs.forEach((blog) => {
          if (blog.tags) {
            const blogTags = blog.tags.split(',').map((tag) => tag.trim());
            this.tagsData = this.tagsData.concat(blogTags);
          }
        });
        
        // Remove duplicate tags (optional, depending on your requirements)
        this.tagsData = [...new Set(this.tagsData)];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  
  filterBlogsByTag(tag: string): void {
    if (tag) {
      this.tagSelected = true;
      this.blogsData = this.Blogs.filter((blog) => {
        return blog.tags && blog.tags.split(',').map((t) => t.trim()).includes(tag);
      });
    } else {
      this.tagSelected = false;
      this.blogsData = this.Blogs;
    }
  }
  clearTagFilter(): void {
    this.tagSelected = false;
    this.blogsData = this.Blogs;
  }
  
  getAllBlogs(): void {
    this.blogData.getData().subscribe((blogs) => {
      this.blogsData = blogs;
    });
  }

  
}
