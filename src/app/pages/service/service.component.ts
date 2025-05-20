import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-service',
 
  standalone: true,
  imports: [CommonModule], // Asegúrate de que CommonModule esté aquí
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  services = [
    
    {
      title: 'Diseño Web',
      description: 'Creamos sitios modernos, adaptables y visualmente impactantes.',
      icon: 'assets/assetsService/pino.svg'
    },
    {
      title: 'Desarrollo Web',
      description: 'Creamos sitios funcionales y de alto rendimiento.',
      icon: 'assets/assetsService/pino.svg'
    },
    {
      title: 'Marketing Digital',
      description: 'Potenciamos tu marca en el entorno digital.',
      icon: 'assets/assetsService/pino.svg'
    },
    {
      title: 'Impresiones 3D',
      description: 'Prototipos y piezas con impresión 3D personalizada.',
      icon: 'assets/assetsService/pino.svg'
    },
    {
      title: 'Lanzamientos',
      description: 'Impulsa tus proyectos con soluciones innovadoras.',
      icon: 'assets/assetsService/pino.svg'
    },
    {
      title: 'Automatización',
      description: 'Optimización de procesos con tecnología avanzada.',
      icon: 'assets/assetsService/pino.svg'
    }
  ];

 get angleStep(): number {
  return 360 / this.services.length;
}

  centerTitle = 'Opción 1';
  centerDescription = 'Texto central inicial del servicio.';

  updateCenterText(item: any) {
    this.centerTitle = item.title;
    this.centerDescription = item.description;
  }

  resetCenterText() {
    this.centerTitle = 'Opción 1';
    this.centerDescription = 'Texto central inicial del servicio.';
  }
  circleRadius = 200;

ngOnInit() {
  this.updateRadius(window.innerWidth);
  window.addEventListener('resize', () => {
    this.updateRadius(window.innerWidth);
  });
}

updateRadius(width: number) {
  if (width < 768) {
    this.circleRadius = 150; // radio menor para pantallas pequeñas
  } else {
    this.circleRadius = 200; // radio normal
  }
}

}
