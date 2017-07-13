import { TestBed, inject } from '@angular/core/testing';

import { TxrService } from './txr.service';

describe('TxrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TxrService]
    });
  });

  it('should be created', inject([TxrService], (service: TxrService) => {
    expect(service).toBeTruthy();
  }));
});
