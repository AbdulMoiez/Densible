import { Component } from '@angular/core';

@Component({
  selector: 'app-solution-swiper-database',
  templateUrl: './solution-swiper-database.component.html',
  styleUrls: ['./solution-swiper-database.component.scss']
})
export class SolutionSwiperDatabaseComponent {
  solutions = [
    {
        number:'I',
        title: 'Customized Database Solutions',
        description: 'Our industry-specific database services offer tailored solutions designed to meet the unique data management needs of your industry. From healthcare and finance to manufacturing and retail, we customize database architectures and functionalities to align with your specific industry requirements.',
         imageSrc: '/assets/img/icons/md/15.svg'
      },
    {
        number:'II',
        title: 'Compliance and Regulatory Support',
        description: "We provide database services that adhere to industry-specific regulations and compliance standards. Whether it's HIPAA for healthcare, GDPR for data privacy, or PCI DSS for payment processing, our database solutions ensure data security and compliance with relevant industry guidelines.",
        imageSrc: '/assets/img/icons/md/20.svg'
      },
      {
        number:'III',
        title: 'Integration with Industry-Specific Software',
        description: "We specialize in integrating databases with industry-specific software and applications. Whether it's Enterprise Resource Planning (ERP) software for manufacturing, or Point of Sale (POS) systems for retail, we ensure seamless data flow and synchronization between databases and your industry-focused software.",
        imageSrc: '/assets/img/icons/md/4.svg'
      },
      {
        number:'IV',
        title: 'Scalable Database Solutions for Growth',
        description: 'At Densible We understand that industries experience dynamic growth, and our database services include scalable solutions that can handle increasing data volumes and user demands. Our databases grow with your business, accommodating future expansion seamlessly. Your success is our priority! ',
        imageSrc: '/assets/img/icons/md/10.svg'
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
