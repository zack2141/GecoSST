import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInAcCiComponent } from './registro-in-ac-ci.component';

describe('RegistroInAcCiComponent', () => {
  let component: RegistroInAcCiComponent;
  let fixture: ComponentFixture<RegistroInAcCiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroInAcCiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroInAcCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
