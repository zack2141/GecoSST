import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisIAComponent } from './analisis-ia.component';

describe('AnalisisIAComponent', () => {
  let component: AnalisisIAComponent;
  let fixture: ComponentFixture<AnalisisIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisIAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
