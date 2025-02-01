import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {
  images = [
    { src: 'assets/Imagenes/michi.webp', alt: 'Imagen de un michi' },
    { src: 'assets/Imagenes/paisaje.webp', alt: 'Hermoso paisaje' },
  ];
  
  currentIndex = 0;
  isFullscreen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;

    const carousel = this.el.nativeElement.querySelector('.carousel-container');

    if (this.isFullscreen) {
      if (carousel.requestFullscreen) {
        carousel.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  @HostListener('document:fullscreenchange', [])
  onFullscreenChange() {
    this.isFullscreen = !!document.fullscreenElement;
  }
}
