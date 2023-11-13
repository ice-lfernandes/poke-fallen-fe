import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePlayerComponent } from './type-player.component';

describe('TypePlayerComponent', () => {
  let component: TypePlayerComponent;
  let fixture: ComponentFixture<TypePlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypePlayerComponent]
    });
    fixture = TestBed.createComponent(TypePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
