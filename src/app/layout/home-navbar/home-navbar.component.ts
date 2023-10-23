import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent {
  isScrolled = false;
  isMobile = false; // To track screen width

  // Define the link color and background color when scrolled and when not scrolled
  linkColorWhenScrolled = '#000 !important'; // Change to your desired color
  linkColorWhenNotScrolled = '#fff !important'; // Change to your desired color
  backgroundColorWhenScrolled = '#fff '; // Change to your desired background color
  backgroundColorWhenNotScrolled = 'transparent'; // Change to your desired background color

  // Define the logo image source when scrolled and when not scrolled
  logoImageWhenScrolled = '/assets/img/logo/Densible-dark.png'; // Change to your desired image source
  logoImageWhenNotScrolled = '/assets/img/logo/Densible-white.png'; // Change to your desired image source

  // Reference to the elements you want to change
  @ViewChild('navLinkElement', { static: true }) navLinkElement: ElementRef;
  @ViewChild('navbarElement', { static: true }) navbarElement: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position, e.g., when the user has scrolled 100 pixels down
    this.isScrolled = window.scrollY > 100; // Adjust the threshold as needed

    // Update the styles based on scroll state
    this.updateStyles();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    // Check screen width
    this.isMobile = window.innerWidth <= 991;

    // Update the styles based on screen width
    this.updateStyles();
  }

  private updateStyles() {
    if (this.isScrolled || this.isMobile) {
      // Apply styles for scrolled state or mobile view
      this.renderer.setStyle(this.navLinkElement.nativeElement, 'color', this.linkColorWhenScrolled);
      this.renderer.setStyle(this.navbarElement.nativeElement, 'background-color', this.backgroundColorWhenScrolled);
    } else {
      // Apply styles for not scrolled state and desktop view
      this.renderer.setStyle(this.navLinkElement.nativeElement, 'color', this.linkColorWhenNotScrolled);
      this.renderer.setStyle(this.navbarElement.nativeElement, 'background-color', this.backgroundColorWhenNotScrolled);
    }
  }
}
