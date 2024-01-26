import { TestBed } from '@angular/core/testing';

import { BlockPreAwardItemService } from './block-pre-award-item.service';

describe('BlockPreAwardItemService', () => {
  let service: BlockPreAwardItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockPreAwardItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
