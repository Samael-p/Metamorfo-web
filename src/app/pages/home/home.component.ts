import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { ContactComponent } from '../contact/contact.component';
import { ServiceComponent } from '../service/service.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AutomatizacionProcesosComponent } from '../../servicios/automatizacion-procesos/automatizacion-procesos.component';
import { BrandingComponent} from '../../servicios/branding/branding.component';
import { CursosTalleresComponent } from '../../servicios/cursos-talleres/cursos-talleres.component';
import { DesarrolloWebComponent } from '../../servicios/desarrollo-web/desarrollo-web.component';
import { ProduccionMultimediaComponent } from '../../servicios/produccion-multimedia/produccion-multimedia.component';
import { TresDComponent } from '../../servicios/tres-d/tres-d.component';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cuadroAnimacion', [
      state('inactivo', style({ transform: 'scale(1)' })),
      state('activo', style({ transform: 'scale(2.2)', zIndex: 10 })),
      transition('inactivo <=> activo', animate('0.8s ease'))
    ])
  ],
  imports: [CommonModule, TeamComponent, NavbarComponent,
     
    AutomatizacionProcesosComponent,
BrandingComponent,
CursosTalleresComponent,
DesarrolloWebComponent,
ProduccionMultimediaComponent,
TresDComponent
  ]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  cuadroActivo: string | null = null;

  @ViewChild('text1') text1Ref!: ElementRef<HTMLSpanElement>;
  @ViewChild('text2') text2Ref!: ElementRef<HTMLSpanElement>;

  texts = ['Servicio', 'Enseñanza', 'Resultado'];
  morphTime = 1;
  cooldownTime = 1.25;

  private textIndex = this.texts.length - 1;
  private time = new Date();
  private morph = 0;
  private cooldown = this.cooldownTime;
  private animationRunning = true;




  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.text1Ref.nativeElement.textContent = this.texts[this.textIndex % this.texts.length];
    this.text2Ref.nativeElement.textContent = this.texts[(this.textIndex + 1) % this.texts.length];
    this.animate();
  }

  ngOnDestroy(): void {
    this.animationRunning = false;
  }

  activarCuadro(event: MouseEvent, id: string): void {
    event.stopPropagation();
    this.cuadroActivo = id;
  }

  cerrarCuadro(event: MouseEvent): void {
    event.stopPropagation();
    this.cuadroActivo = null;
  }

  private doMorph(): void {
    this.morph -= this.cooldown;
    this.cooldown = 0;

    let fraction = this.morph / this.morphTime;
    if (fraction > 1) {
      this.cooldown = this.cooldownTime;
      fraction = 1;
    }

    this.setMorph(fraction);
  }

  private setMorph(fraction: number): void {
    const text1 = this.text1Ref.nativeElement;
    const text2 = this.text2Ref.nativeElement;

    text2.style.filter = `blur(${Math.min(10 / fraction - 10, 100)}px)`;
    text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;

    text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text1.style.opacity = `${Math.pow(fraction, 1.4) * 1000}%`;

    text1.textContent = this.texts[this.textIndex % this.texts.length];
    text2.textContent = this.texts[(this.textIndex + 1) % this.texts.length];
  }

  private doCooldown(): void {
    this.morph = 0;
    this.text2Ref.nativeElement.style.filter = '';
    this.text2Ref.nativeElement.style.opacity = '100%';
    this.text1Ref.nativeElement.style.filter = '';
    this.text1Ref.nativeElement.style.opacity = '0%';
  }

  private animate = (): void => {
    if (!this.animationRunning) return;

    requestAnimationFrame(this.animate);

    const newTime = new Date();
    const shouldIncrementIndex = this.cooldown > 0;
    const dt = (newTime.getTime() - this.time.getTime()) / 1000;
    this.time = newTime;

    this.cooldown -= dt;

    if (this.cooldown <= 0) {
      if (shouldIncrementIndex) this.textIndex++;
      this.doMorph();
    } else {
      this.doCooldown();
    }
  };
  
}
