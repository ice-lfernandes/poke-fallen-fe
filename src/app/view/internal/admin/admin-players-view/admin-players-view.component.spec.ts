import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlayersViewComponent } from './admin-players-view.component';

describe('AdminPlayersViewComponent', () => {
  let component: AdminPlayersViewComponent;
  let fixture: ComponentFixture<AdminPlayersViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPlayersViewComponent]
    });
    fixture = TestBed.createComponent(AdminPlayersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
