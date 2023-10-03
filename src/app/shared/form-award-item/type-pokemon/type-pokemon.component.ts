import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/service/integration/model/commons/pokemon';

@Component({
  selector: 'app-type-pokemon',
  templateUrl: './type-pokemon.component.html',
  styleUrls: ['./type-pokemon.component.css']
})
export class TypePokemonComponent {

  @Input()
  pokemon!: Pokemon

}
