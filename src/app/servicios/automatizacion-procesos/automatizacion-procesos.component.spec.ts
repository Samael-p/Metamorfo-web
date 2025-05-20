import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatizacionProcesosComponent } from './automatizacion-procesos.component';

describe('AutomatizacionProcesosComponent', () => {
  let component: AutomatizacionProcesosComponent;
  let fixture: ComponentFixture<AutomatizacionProcesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatizacionProcesosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomatizacionProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
