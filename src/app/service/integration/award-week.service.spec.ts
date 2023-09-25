import { TestBed } from '@angular/core/testing';

import { AwardWeekService } from './award-week.service';

describe('AwardWeekService', () => {
  let service: AwardWeekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwardWeekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
