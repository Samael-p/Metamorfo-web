import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDAnimationComponent } from './three-d-animation.component';

describe('ThreeDAnimationComponent', () => {
  let component: ThreeDAnimationComponent;
  let fixture: ComponentFixture<ThreeDAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
