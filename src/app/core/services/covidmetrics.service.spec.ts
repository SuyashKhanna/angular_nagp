import { TestBed } from '@angular/core/testing';

import { CovidmetricsService } from './covidmetrics.service';

describe('CovidmetricsService', () => {
  let service: CovidmetricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidmetricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
