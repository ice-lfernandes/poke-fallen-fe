import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGameSaveViewComponent } from './player-game-save-view.component';

describe('PlayerGameSaveViewComponent', () => {
  let component: PlayerGameSaveViewComponent;
  let fixture: ComponentFixture<PlayerGameSaveViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerGameSaveViewComponent]
    });
    fixture = TestBed.createComponent(PlayerGameSaveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
