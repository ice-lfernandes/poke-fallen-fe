import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBothComponent } from './type-both.component';

describe('TypeBothComponent', () => {
  let component: TypeBothComponent;
  let fixture: ComponentFixture<TypeBothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeBothComponent]
    });
    fixture = TestBed.createComponent(TypeBothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
