import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isMobile: boolean = false;
  isMenuOpen: boolean = false;
  isPopupOpen: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen; // Alterna la visibilidad del popup
  }

  closePopup() {
    this.isPopupOpen = false; // Cierra el popup
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isPopupOpen) {
      document.body.classList.add('no-scroll', 'menu-open-bg');
    } else {
      document.body.classList.remove('no-scroll', 'menu-open-bg');
    }
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 764;
    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }
}