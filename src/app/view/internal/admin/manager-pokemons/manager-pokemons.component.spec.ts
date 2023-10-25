import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPokemonsComponent } from './manager-pokemons.component';

describe('ManagerPokemonsComponent', () => {
  let component: ManagerPokemonsComponent;
  let fixture: ComponentFixture<ManagerPokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerPokemonsComponent]
    });
    fixture = TestBed.createComponent(ManagerPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
