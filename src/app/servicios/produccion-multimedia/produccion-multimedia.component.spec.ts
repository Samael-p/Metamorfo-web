import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionMultimediaComponent } from './produccion-multimedia.component';

describe('ProduccionMultimediaComponent', () => {
  let component: ProduccionMultimediaComponent;
  let fixture: ComponentFixture<ProduccionMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduccionMultimediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
