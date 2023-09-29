import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faArrowLeft, faFloppyDisk, faMinus, faPencil, faPlus, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

import { AwardItem } from 'src/app/service/integration/model/commons/award-item';
import { AwardWeek } from 'src/app/service/integration/model/commons/award-week';
import { PokemonImage } from 'src/app/service/integration/model/commons/pokemon-image';
import { PokemonService } from 'src/app/service/integration/pokemon.service';

@Component({
  selector: 'app-award-week-view',
  templateUrl: './award-week-view.component.html',
  styleUrls: ['./award-week-view.component.css'],
  host: { class: 'd-block' }
})
export class AwardWeekViewComponent implements OnInit {

  // Icons
  faPencil = faPencil
  faArrowLeft = faArrowLeft
  faMinus = faMinus
  faFloppyDisk = faFloppyDisk
  faPlus = faPlus
  faRotateLeft = faRotateLeft

  // Inputs
  @Input()
  awardWeek!: AwardWeek

  itemsReverted: AwardItem[] = []
  pokemonsImage: PokemonImage[] = []
  active = 1
  closeResult = '';

  typeItemChoose: any;
  pokemonSelected: PokemonImage | undefined
  newAwardItem: AwardItem = new AwardItem()

  constructor(private sanitizer: DomSanitizer, private modalService: NgbModal,
    private pokemonService: PokemonService) { }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  newItem(contentNewItem: any) {
    this.modalService.open(contentNewItem, { size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );

    this.pokemonService.findAllPokemons().subscribe(
      {
        next: response => {
          this.pokemonsImage = response
          this.pokemonsImage.forEach(p => {
            let objectURL = 'data:image/jpeg;base64,' + p.image
            p.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          })
          console.log(this.pokemonsImage)
        },
        error: error => {
          console.log(error)
        }
      }
    )
  }

  search: OperatorFunction<string, readonly String[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : this.pokemonsImage.map(p => p.name).filter((v) => v.indexOf(term.toUpperCase()) > -1).slice(0, 10),
      )
    );

  updateModel() {
    this.pokemonSelected = this.pokemonsImage.find(p => p.name == this.typeItemChoose)

    this.newAwardItem.pokemon.image = this.pokemonSelected!.image
    this.newAwardItem.pokemon.imageBlob = this.pokemonSelected!.imageBlob
    this.newAwardItem.pokemon.name = this.pokemonSelected!.name
  }


  removeItem(item: AwardItem) {
    this.itemsReverted = this.awardWeek.items
    this.awardWeek.items = this.awardWeek.items.filter(awardItem => awardItem !== item)
  }

  revertAction() {
    this.awardWeek.items = this.itemsReverted
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.awardWeek.items.forEach(item => {
      if (item.pokemon != null) {
        let objectURL = 'data:image/jpeg;base64,' + item.pokemon.image
        item.pokemon.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    })
    console.log(this.awardWeek)
  }

  formatDateTime(date: Date): String {
    return formatDate(date, "dd/MM/yyyy HH:mm", 'en-US')
  }

}
