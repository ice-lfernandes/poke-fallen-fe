import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicePokemonImageComponent } from './choice-pokemon-image.component';

describe('ChoicePokemonImageComponent', () => {
  let component: ChoicePokemonImageComponent;
  let fixture: ComponentFixture<ChoicePokemonImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoicePokemonImageComponent]
    });
    fixture = TestBed.createComponent(ChoicePokemonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
