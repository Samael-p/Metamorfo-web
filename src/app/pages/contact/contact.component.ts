import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
    standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule],

})
export class ContactComponent {

}