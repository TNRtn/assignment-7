import { TestBed } from '@angular/core/testing';

import { OnlineshopingService } from './onlineshoping.service';

describe('OnlineshopingService', () => {
  let service: OnlineshopingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineshopingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
