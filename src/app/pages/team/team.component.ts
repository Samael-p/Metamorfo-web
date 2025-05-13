import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common'; // <-- Agrega esta línea

interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
  socialLinks:{
    facebook?: string;  // Especificamos que puede ser opcional
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  }
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  imports: [CommonModule, NgForOf, NgIf],
  standalone: true,
  
})
export class TeamComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Nombre 1 ',
      role: 'rol',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'assets/FondoHome.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://linkedin.com/in/',
        instagram: 'https://instagram.com/'
      }
    },
    {
      name: 'Nombre 2',
      role: 'UX Designer at Flowy',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'assets/img/team2.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://linkedin.com/in/',
        instagram: 'https://instagram.com/'
      }
    },
    {
      name: 'Nombre 3 ',
      role: 'Software Engineer at DevSoft',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      image: 'assets/img/team3.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://linkedin.com/in/',
        instagram: 'https://instagram.com/'
      }
    }
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
}
