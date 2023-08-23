import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinopseViewComponent } from './sinopse-view.component';

describe('SinopseViewComponent', () => {
  let component: SinopseViewComponent;
  let fixture: ComponentFixture<SinopseViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinopseViewComponent]
    });
    fixture = TestBed.createComponent(SinopseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
