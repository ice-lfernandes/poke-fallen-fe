import { TestBed } from '@angular/core/testing';

import { AwardWeekLotteryService } from './award-week-lottery.service';

describe('AwardWeekLotteryService', () => {
  let service: AwardWeekLotteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwardWeekLotteryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
