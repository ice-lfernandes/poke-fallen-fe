import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePokemonComponent } from './type-pokemon.component';

describe('TypePokemonComponent', () => {
  let component: TypePokemonComponent;
  let fixture: ComponentFixture<TypePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypePokemonComponent]
    });
    fixture = TestBed.createComponent(TypePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
