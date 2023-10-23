import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: any[] = [
    {
      stars: [1, 1, 1, 1, 1],
      text: "Densible's remarkable responsiveness to feedback and ability to adapt to our evolving requirements make them our go-to choice for multiple projects. We highly recommend Densible for anyone seeking top-notch SharePoint solutions and a seamless collaboration.",
      authorName: "Sean Joseph",
      authorCompany: "Yunifire",
      authorImage: "/assets/img/faces/Sean Joseph.jpg"
    },
    {
      stars: [1, 1, 1, 1, 1],
      text: "The team at Densible went above and beyond to understand our unique business requirements and delivered a custom software solution that has revolutionized our operations. Their attention to detail, problem-solving skills, and commitment to excellence are truly commendable.",
      authorName: "Margaret Williams",
      authorCompany: "Agency Design",
      authorImage: "/assets/img/faces/2.jpg"
    },
    {
      stars: [1, 1, 1, 1, 1],
      text: "We had the pleasure of working with Densible on our cloud application development project, and they exceeded our expectations in every way. Their team demonstrated extensive knowledge of cloud technologies and delivered a scalable and secure solution that has transformed our business processes.",
      authorName: "Tarryn Gillies",
      authorCompany: "ITStack, Inc",
      authorImage: "/assets/img/faces/3.jpg"
    },
    {
      stars: [1, 1, 1, 1, 1],
      text: "We are extremely satisfied with Densible's design and prototyping services. They closely collaborated with us to understand our vision, resulting in a visually stunning and user-friendly design. Their prototypes allowed us to make valuable improvements. It was a pleasure working with them.",
      authorName: "Margaret Williams",
      authorCompany: "Agency Design",
      authorImage: "/assets/img/faces/2.jpg"
    },
    {
      stars: [1, 1, 1, 1, 1],
      text: "Working with Densible on our e-commerce website was a game-changer for our business. They took our vision and transformed it into a user-friendly and visually appealing online store. The team was responsive, proactive, and ensured that every aspect of our website met our requirements.",
      authorName: "Tamzyn French",
      authorCompany: "ITSulu",
      authorImage: "/assets/img/faces/4.jpg"
    },
    
    {
      stars: [1, 1, 1, 1, 1],
      text: "Densible's remarkable responsiveness to feedback and ability to adapt to our evolving requirements make them our go-to choice for multiple projects. We highly recommend Densible for anyone seeking top-notch SharePoint solutions and a seamless collaboration.",
      authorName: "Sean Joseph",
      authorCompany: "Yunifire",
      authorImage: "/assets/img/faces/Sean Joseph.jpg"
    },
    {
      stars: [1, 1, 1, 1, 1],
      text: "Working with Densible on our e-commerce website was a game-changer for our business. They took our vision and transformed it into a user-friendly and visually appealing online store. The team was responsive, proactive, and ensured that every aspect of our website met our requirements.",
      authorName: "Tamzyn French",
      authorCompany: "ITSulu",
      authorImage: "/assets/img/faces/4.jpg"
    },
    
    {
      stars: [1, 1, 1, 1, 1],
      text: "The team at Densible went above and beyond to understand our unique business requirements and delivered a custom software solution that has revolutionized our operations. Their attention to detail, problem-solving skills, and commitment to excellence are truly commendable.",
      authorName: "Margaret Williams",
      authorCompany: "Agency Design",
      authorImage: "/assets/img/faces/2.jpg"
    },
   
    {
      stars: [1, 1, 1, 1, 1],
      text: "Densible's remarkable responsiveness to feedback and ability to adapt to our evolving requirements make them our go-to choice for multiple projects. We highly recommend Densible for anyone seeking top-notch SharePoint solutions and a seamless collaboration.",
      authorName: "Sean Joseph",
      authorCompany: "Yunifire",
      authorImage: "/assets/img/faces/Sean Joseph.jpg"
    }
  ];

  displayedReviews: any[] = [];
  currentIndex: number = 0;
  reviewsPerPage: number = 3;

  ngOnInit() {
    this.showReviews();
  }

  prevReviews() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showReviews();
    }
  }

  nextReviews() {
    if (this.currentIndex + this.reviewsPerPage < this.reviews.length) {
      this.currentIndex++;
      this.showReviews();
    }
  }

  showReviews() {
    this.displayedReviews = this.reviews.slice(this.currentIndex, this.currentIndex + this.reviewsPerPage);
  }
}
