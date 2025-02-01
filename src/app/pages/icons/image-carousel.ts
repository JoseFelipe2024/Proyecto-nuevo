import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {
  images = [
    { src: 'assets/Imagenes/michi.webp', alt: 'Imagen de un michi' },
    { src: 'assets/Imagenes/paisaje.webp', alt: 'Hermoso paisaje' },
    // Agrega más imágenes según sea necesario
  ];
  
  currentIndex = 0;
  isFullscreen = false;

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;

    if (this.isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  @HostListener('document:fullscreenchange', [])
  onFullscreenChange() {
    this.isFullscreen = !!document.fullscreenElement;
  }
}
