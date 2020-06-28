import { TestBed } from '@angular/core/testing';

import { RefinementListService } from './refinement-list.service';

describe('RefinementListService', () => {
  let service: RefinementListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefinementListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
