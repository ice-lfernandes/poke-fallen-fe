import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerManagerAwardsComponent } from './player-manager-awards.component';

describe('PlayerManagerAwardsComponent', () => {
  let component: PlayerManagerAwardsComponent;
  let fixture: ComponentFixture<PlayerManagerAwardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerManagerAwardsComponent]
    });
    fixture = TestBed.createComponent(PlayerManagerAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
