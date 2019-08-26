import { TestBed } from '@angular/core/testing';

import { ActivatedRouteService } from './activated-route.service';

describe('ActivatedRouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivatedRouteService = TestBed.get(ActivatedRouteService);
    expect(service).toBeTruthy();
  });
});
