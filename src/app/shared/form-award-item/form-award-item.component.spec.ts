import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAwardItemComponent } from './form-award-item.component';

describe('FormAwardItemComponent', () => {
  let component: FormAwardItemComponent;
  let fixture: ComponentFixture<FormAwardItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAwardItemComponent]
    });
    fixture = TestBed.createComponent(FormAwardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
