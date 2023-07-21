import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailsViewComponent } from './player-details-view.component';

describe('PlayerDetailsViewComponent', () => {
  let component: PlayerDetailsViewComponent;
  let fixture: ComponentFixture<PlayerDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerDetailsViewComponent]
    });
    fixture = TestBed.createComponent(PlayerDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
