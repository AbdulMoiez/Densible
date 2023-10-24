import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions-swiper',
  templateUrl: './solutions-swiper.component.html',
  styleUrls: ['./solutions-swiper.component.scss']
})
export class SolutionsSwiperComponent {
  solutions = [
    {
        number:'I',
        title: 'Scalable Cloud Infrastructure Services',
        description: 'Our scalable cloud infrastructure solutions provide a robust foundation for your digital transformation journey. With flexible and scalable infrastructure resources, businesses can efficiently handle varying workloads and rapidly expand their operations as needed.',
        // imageSrc: '/assets/img/projects/project-1.png'
      },
    {
        number:'II',
        title: 'Cloud Storage Solutions',
        description: 'Ensure secure and seamless data management with our cloud storage solutions. Leverage the vast storage capacities of leading cloud platforms to store and access your data efficiently. With robust security measures and redundant storage options, your critical data remains protected.',
        // imageSrc: '/assets/img/projects/project-2.png'
      },
      {
        number:'III',
        title: 'Cloud Application Development',
        description: 'Accelerate application development and deployment with our cloud-based solutions. Utilizing modern technologies and serverless computing, we enable the creation of high-performance and responsive applications that can scale effortlessly.',
        // imageSrc: '/assets/img/projects/project-5-1.png'
      },
      {
        number:'IV',
        title: 'Cloud Security and Compliance',
        description: 'Safeguard your data and applications with our comprehensive cloud security and compliance solutions. We implement industry-leading security measures, including encryption, access controls, and continuous monitoring, to protect your assets from potential threats.',
        // imageSrc: '/assets/img/projects/project-4-3.png'
      },
     
  ];

  currentIndex = 0;
  solutionsToShow = 3;

  constructor() {}

  nextSolution() {
    this.currentIndex += 1;
    if (this.currentIndex > this.solutions.length - this.solutionsToShow) {
      this.currentIndex = 0;
    }
  }

  prevSolution() {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.solutions.length - this.solutionsToShow;
    }
  }
}

