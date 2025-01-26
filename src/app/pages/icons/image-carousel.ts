import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  images = [
    { src: 'assets/Imagenes/imagen 1.jpg', alt: 'Image 1' },
    { src: 'assets/Imagenes/imagen 2.jpg', alt: 'Image 2' },
    // Agrega más imágenes según sea necesario
  ];

  currentIndex = 0; // Muestra solo la primera imagen al principio
  isFullscreen: boolean = false;
  intervalId: any;

  ngOnInit() {
    // Cambiar la imagen cada 5 segundos
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000); // 5000 milisegundos (5 segundos)
  }

  ngOnDestroy() {
    // Detener el intervalo cuando el componente se destruya
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    const carousel = document.querySelector('.carousel-container');
    if (this.isFullscreen) {
      carousel?.classList.add('fullscreen');
    } else {
      carousel?.classList.remove('fullscreen');
    }
  }
}
