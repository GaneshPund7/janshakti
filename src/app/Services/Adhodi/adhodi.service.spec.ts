import { TestBed } from '@angular/core/testing';

import { AdhodiService } from './adhodi.service';

describe('AdhodiService', () => {
  let service: AdhodiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdhodiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
