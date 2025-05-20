import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common'; // <-- Agrega esta línea

interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
  socialLinks: {
    facebook?: string;  // Especificamos que puede ser opcional
    tiktok?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
    telegram?: string;
    twitter?: string;
    youtube?: string;
    whatsapp?: string;
    discord?: string;
  };
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  imports: [CommonModule, NgForOf],
  standalone: true,
})
export class TeamComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Nombre 1',
      role: 'rol',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'assets/imgTeam/7309681.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/',
        github: 'https://github.com/',
        linkedin: 'https://linkedin.com/in/',
      },
    },
    {
      name: 'Nombre 2',
      role: 'UX Designer at Flowy',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'assets/imgTeam/9334243.jpg',
      socialLinks: {
        instagram: 'https://instagram.com/',
        twitter: 'https://twitter.com/',
      },
    },
    {
      name: 'Nombre 3',
      role: 'Software Engineer at DevSoft',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'assets/imgTeam/9440461.jpg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/',
        youtube: 'https://youtube.com/',
        tiktok: 'https://tiktok.com/',
      },
    },
    {
      name: 'Nombre 4',
      role: 'marketing manager at Flowy',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'assets/imgTeam/9334243.jpg',
      socialLinks: {
        instagram: 'https://instagram.com/',
        twitter: 'https://twitter.com/',
        tiktok: 'https://tiktok.com/',
        facebook: 'https://facebook.com/',
      },
    },
  ];

  currentIndex = 0;

  get currentTestimonial() {
    return this.testimonials[this.currentIndex];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  // Convierte el objeto socialLinks en un arreglo de pares { icon, link }
  getSocialLinks(socialLinks: { [key: string]: string | undefined }) {
    return Object.entries(socialLinks)
      .filter(([_, link]) => link) // Filtra solo las redes sociales con enlaces definidos
      .map(([key, link]) => ({
        icon: `fa-${key}`, // Convierte la clave en la clase de FontAwesome
        link: link as string, // Asegura que el enlace no sea undefined
      }));
  }
}
