import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importaciones de tus componentes standalone
import { NavbarComponent } from './components/navbar/navbar.component';
import { FootersComponent } from './components/footers/footers.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AutomatizacionProcesosComponent } from "./servicios/automatizacion-procesos/automatizacion-procesos.component";
import { BrandingComponent } from "./servicios/branding/branding.component";
import { CursosTalleresComponent } from "./servicios/cursos-talleres/cursos-talleres.component";
import { DesarrolloWebComponent } from "./servicios/desarrollo-web/desarrollo-web.component";
import { ProduccionMultimediaComponent } from "./servicios/produccion-multimedia/produccion-multimedia.component";
import { TresDComponent } from "./servicios/tres-d/tres-d.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FootersComponent,
    HomeComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    AutomatizacionProcesosComponent,
    BrandingComponent,
    CursosTalleresComponent,
    DesarrolloWebComponent,
    ProduccionMultimediaComponent,
    TresDComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Metamorfo-web';
}
