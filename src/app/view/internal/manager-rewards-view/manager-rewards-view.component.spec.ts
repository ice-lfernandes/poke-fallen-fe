import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRewardsViewComponent } from './manager-rewards-view.component';

describe('ManagerRewardsViewComponent', () => {
  let component: ManagerRewardsViewComponent;
  let fixture: ComponentFixture<ManagerRewardsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerRewardsViewComponent]
    });
    fixture = TestBed.createComponent(ManagerRewardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
