import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardWeekViewComponent } from './award-week-view.component';

describe('AwardWeekViewComponent', () => {
  let component: AwardWeekViewComponent;
  let fixture: ComponentFixture<AwardWeekViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwardWeekViewComponent]
    });
    fixture = TestBed.createComponent(AwardWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
