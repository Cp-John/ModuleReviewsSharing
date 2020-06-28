import { TestBed } from '@angular/core/testing';

import { AverageRatingsService } from './average-ratings.service';

describe('AverageRatingsService', () => {
  let service: AverageRatingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AverageRatingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
