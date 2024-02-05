export interface Blog {
    id:number;
    Breadcrumb: string;
    Description: string;
    Image: string;
    Stack: string;
    Title: string;
  }
  export interface Blogs {
    payload: any;
    id:string;
    breadcrumb: string;
    description: string;
    image: string;
    stack: string;
    title: string;
    author:string;
    date:string;
    authorPic:string;
    authorPicUrl:string;
    blogImageUrl:string;
    tags:string;
    allTags:string
  }