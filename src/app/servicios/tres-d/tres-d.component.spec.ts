import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresDComponent } from './tres-d.component';

describe('TresDComponent', () => {
  let component: TresDComponent;
  let fixture: ComponentFixture<TresDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TresDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TresDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
