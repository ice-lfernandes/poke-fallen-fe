import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { PokemonImage } from 'src/app/service/integration/model/commons/pokemon-image';
import { PokemonService } from 'src/app/service/integration/pokemon.service';

@Component({
  selector: 'app-manager-pokemons',
  templateUrl: './manager-pokemons.component.html',
  styleUrls: ['./manager-pokemons.component.css']
})
export class ManagerPokemonsComponent implements OnInit {

  pokemons: PokemonImage[] = []

  constructor(private pokemonService: PokemonService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.pokemonService.findAllPokemonsWithPageable()
      .subscribe(data => {
        this.pokemons = data.content
        this.pokemons.forEach(p => {
          let objectURL = 'data:image/jpeg;base64,' + p.image
          p.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        })
      })
  }

}
