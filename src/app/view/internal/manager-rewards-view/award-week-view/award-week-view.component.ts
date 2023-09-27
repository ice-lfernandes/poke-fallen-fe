import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faArrowLeft, faFloppyDisk, faMinus, faPencil } from '@fortawesome/free-solid-svg-icons';


import { AwardWeek } from 'src/app/service/integration/model/commons/award-week';
import { PokemonImage } from 'src/app/service/integration/model/commons/pokemon-image';

@Component({
  selector: 'app-award-week-view',
  templateUrl: './award-week-view.component.html',
  styleUrls: ['./award-week-view.component.css']
})
export class AwardWeekViewComponent implements OnInit{

  // Icons
  faPencil = faPencil
  faArrowLeft = faArrowLeft
  faMinus = faMinus
  faFloppyDisk = faFloppyDisk

  // Inputs
  @Input()
  awardWeek!: AwardWeek

  pokemons: PokemonImage[] = []
  active = 1

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.awardWeek.items.forEach(item => {
      if (item.pokemon != null) {
        let objectURL = 'data:image/jpeg;base64,' + item.pokemon.image
        item.pokemon.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    })
    console.log(this.awardWeek)
  }


  // getItemsAwardWeek() {
  //   this.pokemonService.findAllPokemons()
  //     .subscribe(data => {
  //       this.pokemons = data.content
  //       this.pokemons.forEach(p => {
  //         let objectURL = 'data:image/jpeg;base64,' + p.image
  //         p.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  //       })
  //     })
  // }

  formatDateTime(date: Date): String {
    return formatDate(date, "dd/MM/yyyy HH:mm", 'en-US')
  }

}
