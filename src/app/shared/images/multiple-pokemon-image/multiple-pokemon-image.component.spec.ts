import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePokemonImageComponent } from './multiple-pokemon-image.component';

describe('MultiplePokemonImageComponent', () => {
  let component: MultiplePokemonImageComponent;
  let fixture: ComponentFixture<MultiplePokemonImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplePokemonImageComponent]
    });
    fixture = TestBed.createComponent(MultiplePokemonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
