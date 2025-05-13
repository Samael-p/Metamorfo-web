import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  imports: [ NgForOf]
})
export class ServiceComponent {
  servicios = [
    {
      icono: 'assets/icons/3Dprinter.png',
      titulo: 'App Design',
      descripcion: 'Diseño de aplicaciones modernas y funcionales.'
    },
    {
      icono: 'assets/icons/web design.png',
      titulo: 'Development',
      descripcion: 'Desarrollo web y móvil con tecnología actual.'
    },
    {
      icono: 'assets/icons/marketing.png',
      titulo: 'Marketing',
      descripcion: 'Estrategias de marketing digital efectivas.'
    }
    // Puedes agregar más objetos aquí
  ];
}
