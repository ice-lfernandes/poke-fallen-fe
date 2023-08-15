import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormPlayerComponent } from './modal-form-player.component';

describe('ModalFormPlayerComponent', () => {
  let component: ModalFormPlayerComponent;
  let fixture: ComponentFixture<ModalFormPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFormPlayerComponent]
    });
    fixture = TestBed.createComponent(ModalFormPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
