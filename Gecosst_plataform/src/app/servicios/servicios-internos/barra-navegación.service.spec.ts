import { TestBed } from '@angular/core/testing';

import { BarraNavegaciónService } from './barra-navegación.service';

describe('BarraNavegaciónService', () => {
  let service: BarraNavegaciónService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarraNavegaciónService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
