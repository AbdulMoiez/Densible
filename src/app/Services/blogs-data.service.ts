import { Injectable } from '@angular/core';
import { AngularFirestore }from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import {  Blogs } from 'src/models/firebaseBlog';
@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  constructor(private firestore: AngularFirestore) {}


  getData(): Observable<Blogs[]> {
    return this.firestore.collection('blogs').snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Blogs;
            const id = a.payload.doc.id;
            return { ...data, id }; // Adjust the order to prevent conflict
          });
        })
      );
  }
  
  getTagsData(): Observable<string[]> {
    return this.firestore
      .collection('blogs') // Replace with your actual collection name
      .valueChanges({ idField: 'id' })
      .pipe(
        map((blogs: any[]) => {
          return blogs.map((blog: any) => blog.tags); // Assuming 'tags' is the field you want
        })
      );
      }
  getBlogByID(id: any) {
    return this.firestore.collection('blogs').doc(id).valueChanges();
  }


  addBlog(blog: Blogs): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      try {
        // Set the current date in the blog object
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
  
        const blogWithDate = { ...blog, data: formattedDate };
        // Add the blog to the 'blogs' collection in Firestore
        
        const docRef = await this.firestore.collection('blogs').add(blogWithDate);
        resolve(docRef);
      } catch (error) {
        reject(error);
      }
    });
  }

  deleteBlog(id: any) {
    console.log('deleting id', id);
    return this.firestore.collection('blogs').doc(id).delete();
  }

  updateBlog(blog: Blogs, id: any): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await this.firestore.collection('blogs').doc(id).update({
          breadcrumb: blog.breadcrumb,
          title: blog.title,
          description: blog.description,
          authorPicUrl: blog.authorPicUrl,
          blogImageUrl:blog.blogImageUrl,
          stack: blog.stack,
          author:blog.author,
          tags:blog.tags

        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
