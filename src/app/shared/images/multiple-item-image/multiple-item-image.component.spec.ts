import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleItemImageComponent } from './multiple-item-image.component';

describe('MultipleItemImageComponent', () => {
  let component: MultipleItemImageComponent;
  let fixture: ComponentFixture<MultipleItemImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleItemImageComponent]
    });
    fixture = TestBed.createComponent(MultipleItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
