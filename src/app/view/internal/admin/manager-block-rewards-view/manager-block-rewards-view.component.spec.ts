import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBlockRewardsViewComponent } from './manager-block-rewards-view.component';

describe('ManagerBlockRewardsViewComponent', () => {
  let component: ManagerBlockRewardsViewComponent;
  let fixture: ComponentFixture<ManagerBlockRewardsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerBlockRewardsViewComponent]
    });
    fixture = TestBed.createComponent(ManagerBlockRewardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
