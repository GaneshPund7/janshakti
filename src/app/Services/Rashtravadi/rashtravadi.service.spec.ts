import { TestBed } from '@angular/core/testing';

import { RashtravadiService } from './rashtravadi.service';

describe('RashtravadiService', () => {
  let service: RashtravadiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RashtravadiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
