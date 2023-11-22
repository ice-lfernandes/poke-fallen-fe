import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordViewComponent } from './forget-password-view.component';

describe('ForgetPasswordViewComponent', () => {
  let component: ForgetPasswordViewComponent;
  let fixture: ComponentFixture<ForgetPasswordViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPasswordViewComponent]
    });
    fixture = TestBed.createComponent(ForgetPasswordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
