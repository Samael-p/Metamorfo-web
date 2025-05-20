import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosTalleresComponent } from './cursos-talleres.component';

describe('CursosTalleresComponent', () => {
  let component: CursosTalleresComponent;
  let fixture: ComponentFixture<CursosTalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosTalleresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
