import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveProgressViewComponent } from './save-progress-view.component';

describe('SaveProgressViewComponent', () => {
  let component: SaveProgressViewComponent;
  let fixture: ComponentFixture<SaveProgressViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveProgressViewComponent]
    });
    fixture = TestBed.createComponent(SaveProgressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
