import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLoginViewComponent } from './first-login-view.component';

describe('FirstLoginComponent', () => {
  let component: FirstLoginViewComponent;
  let fixture: ComponentFixture<FirstLoginViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstLoginViewComponent]
    });
    fixture = TestBed.createComponent(FirstLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
