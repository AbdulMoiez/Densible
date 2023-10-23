import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent {
  constructor() { }

  ngOnInit(): void {
  }

  prevSlide(): void {
    const slideContainer = document.getElementById('slide');
    if (slideContainer) {
      const slideItems = slideContainer.querySelectorAll('.item');
      slideContainer.insertBefore(slideItems[slideItems.length - 1], slideItems[0]);
    }
  }
  
  nextSlide(): void {
    const slideContainer = document.getElementById('slide');
    if (slideContainer) {
      const slideItems = slideContainer.querySelectorAll('.item');
      slideContainer.appendChild(slideItems[0]);
    }
  }
  
}
