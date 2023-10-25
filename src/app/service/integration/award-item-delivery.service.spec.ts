import { TestBed } from '@angular/core/testing';

import { AwardItemDeliveryService } from './award-item-delivery.service';

describe('AwardWeekDeliveryService', () => {
  let service: AwardItemDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwardItemDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
