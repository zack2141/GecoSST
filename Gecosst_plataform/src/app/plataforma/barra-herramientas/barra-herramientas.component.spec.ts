import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHerramientasComponent } from './barra-herramientas.component';

describe('BarraHerramientasComponent', () => {
  let component: BarraHerramientasComponent;
  let fixture: ComponentFixture<BarraHerramientasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraHerramientasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
