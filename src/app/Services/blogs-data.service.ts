import { Injectable } from '@angular/core';
import {AngularFirestore}
 from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map} from 'rxjs/operators';
import { Blog, Blogs } from 'src/models/firebaseBlog';
// TODO: Remove Unneccesory functions
@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  constructor(private firestore: AngularFirestore) {}

  getBlogsData(): Observable<Blog[]> {
    return this.firestore.collection<Blog>('blogs').valueChanges();
  }
  getData() {
    return this.firestore.collection('blogs').snapshotChanges();
  }
  getLatestBlogId(): Observable<number> {
    return this.firestore
      .collection<Blog>('blogs', (ref) => ref.orderBy('id', 'desc').limit(1))
      .valueChanges()
      .pipe(map((blogs) => (blogs.length > 0 ? (blogs[0] as Blog).id : 0)));
  }
  getBlogbyID(id: any) {
    return this.firestore.collection('blogs').doc(id).valueChanges();
  }

  getBlogById(blogId: string): Observable<any> {
    console.log('Fetching blog for id:', blogId);

    const blogDoc = this.firestore.collection('blogs', (ref) =>
      ref.where('id', '==', blogId)
    );

    return blogDoc.valueChanges();
  }

  addblog(blog: Blogs): Promise<any> {
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
  // addBlog(newBlog: Blog): Observable<void> {
  //   return this.getLatestBlogId().pipe(
  //     switchMap((latestId) => {
  //       const newId = latestId + 1;
  //       newBlog.id = newId;

  //       return from(this.firestore.collection('blogs').add(newBlog));
  //     }),
  //     switchMap((docRef: DocumentReference<unknown>) => {
  //       // Fetch the added document using the docRef
  //       return from(docRef.get()) as Observable<DocumentSnapshot<unknown>>;
  //     }),
  //     map((doc: DocumentSnapshot<unknown>) => {
  //       const data = doc.data() as Blog;
  //       console.log('New Blog added:', data);
  //       return;
  //     }),
  //     first() // Ensure only one emission
  //   );
  // }
  updateBlog(blogId: number, updatedBlog: Blog): Observable<void> {
    return from(
      this.firestore
        .collection('blogs')
        .doc(blogId.toString())
        .update(updatedBlog)
    );
  }
  deleteBlog(id: any) {
    console.log('deleting id', id);
    return this.firestore.collection('blogs').doc(id).delete();
  }

  updateblog(blog: Blogs, id: any): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await this.firestore.collection('blogs').doc(id).update({
          breadcrumb: blog.breadcrumb,
          title: blog.title,
          description: blog.description,
          image: blog.image,
          stack: blog.stack,
          author:blog.author,

        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
