import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  @ViewChild('scene', { static: true }) scene!: ElementRef;
  @ViewChild('container404', { static: true }) container404!: ElementRef;

  ngOnInit() {
    this.initParallax();
  }

  initParallax() {
    if (this.scene && this.container404) {
      this.scene.nativeElement.addEventListener('mousemove', (event: MouseEvent) => {
        const xAxis = (window.innerWidth / 2 - event.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - event.pageY) / 25;
      
        this.container404.nativeElement.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });
      
     

      this.scene.nativeElement.addEventListener('mouseenter', () => {
        if (this.container404.nativeElement) {
          this.container404.nativeElement.style.transition = 'none';
        }
      });

      // ... (Your other event listeners)

    }
  }
}
