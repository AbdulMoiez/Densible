import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/Services/blogs-data.service';
import { Blog } from 'src/models/firebaseBlog';

import { Blogs } from 'src/models/firebaseBlog';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  Blogs: Blogs[];
  isLoading = false;
  showToast = false;
  toastMessage = '';
  isModalOpen = false;
  deleteID = '';
  constructor(private blogData: BlogDataService) {}
  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
  ngOnInit(): void {
    this.blogData.getData().subscribe(
      (res: any[]) => {
        console.log('Received data:', res);
  
        this.Blogs = res 
          .map((e) => {
            const blog = e as Blogs;
            console.log('Mapped blog:', blog);
            return blog;
          });
  
        console.log('Blogs array:', this.Blogs);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  openModal(id: any) {
    this.isModalOpen = true;
    this.deleteID = id
  }

  closeModal() {
    this.isModalOpen = false;
  }
 

  deleteBlog() {
    this.blogData.deleteBlog(this.deleteID).then(() => {
      this.isModalOpen = false;
      this.showToastMessage('Blog deleted successfully');
    });
  }
  truncateBlogProperties(Blogs: Blogs, maxLength: number): Blogs {
    return {
      ...Blogs,
      title: this.truncateText(Blogs.title, maxLength),
      description: this.truncateText(Blogs.description, maxLength),
    };
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }
}
