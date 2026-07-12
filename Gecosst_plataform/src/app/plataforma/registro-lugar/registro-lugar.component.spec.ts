import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLugarComponent } from './registro-lugar.component';

describe('RegistroLugarComponent', () => {
  let component: RegistroLugarComponent;
  let fixture: ComponentFixture<RegistroLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroLugarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
