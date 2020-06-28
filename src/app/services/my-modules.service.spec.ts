import { TestBed } from '@angular/core/testing';

import { MyModulesService } from './my-modules.service';

describe('MyModulesService', () => {
  let service: MyModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
