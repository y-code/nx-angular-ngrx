import { TestBed } from '@angular/core/testing';

import { ApiContentAService } from './api-content-a.service';

describe('ApiContentAService', () => {
  let service: ApiContentAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiContentAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
