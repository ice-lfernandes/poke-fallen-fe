import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGameSaveComponent } from './modal-game-save.component';

describe('ModalGameSaveComponent', () => {
  let component: ModalGameSaveComponent;
  let fixture: ComponentFixture<ModalGameSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGameSaveComponent]
    });
    fixture = TestBed.createComponent(ModalGameSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
