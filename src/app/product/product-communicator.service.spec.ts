import { TestBed, inject } from '@angular/core/testing';

import { ProductCommunicatorService } from './product-communicator.service';

describe('ProductCommunicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCommunicatorService]
    });
  });

  it('should be created', inject([ProductCommunicatorService], (service: ProductCommunicatorService) => {
    expect(service).toBeTruthy();
  }));
});
