import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ThreeDAnimationComponent } from "../../components/three-d-animation/three-d-animation.component"; 

@Component({
  selector: 'app-home',
  imports: [CommonModule, NavbarComponent, ThreeDAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
