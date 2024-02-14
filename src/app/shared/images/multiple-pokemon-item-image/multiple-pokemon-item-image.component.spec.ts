import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePokemonItemImageComponent } from './multiple-pokemon-item-image.component';

describe('MultiplePokemonItemImageComponent', () => {
  let component: MultiplePokemonItemImageComponent;
  let fixture: ComponentFixture<MultiplePokemonItemImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplePokemonItemImageComponent]
    });
    fixture = TestBed.createComponent(MultiplePokemonItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
