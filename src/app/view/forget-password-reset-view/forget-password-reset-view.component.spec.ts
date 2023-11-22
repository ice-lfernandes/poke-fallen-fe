import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordResetViewComponent } from './forget-password-reset-view.component';

describe('ForgetPasswordCheckViewComponent', () => {
  let component: ForgetPasswordResetViewComponent;
  let fixture: ComponentFixture<ForgetPasswordResetViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPasswordResetViewComponent]
    });
    fixture = TestBed.createComponent(ForgetPasswordResetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
