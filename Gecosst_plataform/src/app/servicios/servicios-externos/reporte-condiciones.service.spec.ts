import { TestBed } from '@angular/core/testing';

import { ReporteCondicionesService } from './reporte-condiciones.service';

describe('ReporteCondicionesService', () => {
  let service: ReporteCondicionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteCondicionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
