import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGiftChoiceComponent } from './modal-gift-choice.component';

describe('ModalGiftChoiceComponent', () => {
  let component: ModalGiftChoiceComponent;
  let fixture: ComponentFixture<ModalGiftChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGiftChoiceComponent]
    });
    fixture = TestBed.createComponent(ModalGiftChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
