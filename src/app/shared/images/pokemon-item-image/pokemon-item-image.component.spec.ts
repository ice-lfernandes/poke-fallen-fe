import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonItemImageComponent } from './pokemon-item-image.component';

describe('PokemonItemImageComponent', () => {
  let component: PokemonItemImageComponent;
  let fixture: ComponentFixture<PokemonItemImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonItemImageComponent]
    });
    fixture = TestBed.createComponent(PokemonItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
