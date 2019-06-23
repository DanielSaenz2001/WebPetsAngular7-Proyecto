import { TestBed } from '@angular/core/testing';

import { VentadetallesService } from './ventadetalles.service';

describe('VentadetallesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentadetallesService = TestBed.get(VentadetallesService);
    expect(service).toBeTruthy();
  });
});
