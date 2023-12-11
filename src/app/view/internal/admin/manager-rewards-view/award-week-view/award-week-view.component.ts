import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faArrowLeft, faCircleInfo, faEye, faFloppyDisk, faMinus, faPencil, faPlus, faRotateLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

import { AwardWeekService } from 'src/app/service/integration/award-week.service';
import { ItemService } from 'src/app/service/integration/item.service';
import { AwardItem } from 'src/app/service/integration/model/commons/award-item';
import { AwardWeek } from 'src/app/service/integration/model/commons/award-week';
import { ItemImage } from 'src/app/service/integration/model/commons/item-image';
import { PokemonImage } from 'src/app/service/integration/model/commons/pokemon-image';
import { PokemonService } from 'src/app/service/integration/pokemon.service';
import { ToastService } from 'src/app/shared/toasts/toast-service.service';

@Component({
  selector: 'app-award-week-view',
  templateUrl: './award-week-view.component.html',
  styleUrls: ['./award-week-view.component.css'],
  host: { class: 'd-block' }
})
export class AwardWeekViewComponent implements OnInit {

  // Icons
  faPencil = faPencil
  faCircleInfo = faCircleInfo
  faUser = faUser
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
  itemsImage: ItemImage[] = []
  itemsBasic: AwardItem[] = []
  itemsPremium: AwardItem[] = []

  active = 1
  closeResult = '';
  loading: boolean = false
  enableToAdd: boolean = false

  typeItemChoose: string = 'pokemon'
  itemChoose: any;
  pokemonChoose: any;
  pokemonSelected: PokemonImage | undefined
  itemSelected: ItemImage | undefined
  newAwardItem: AwardItem = new AwardItem()

  constructor(
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private pokemonService: PokemonService,
    private itemService: ItemService,
    private awardWeekService: AwardWeekService,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.awardWeek.items.forEach(item => {
      if (item.pokemon != null) {
        let objectURL = 'data:image/jpeg;base64,' + item.pokemon.image
        item.pokemon.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        item.validImageBlob = item.pokemon.imageBlob
        item.validGameId = item.pokemon.gameId
      } else {
        let objectURL = 'data:image/jpeg;base64,' + item.item.image
        item.item.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        item.validImageBlob = item.item.imageBlob
        item.validGameId = item.item.gameId
      }
    })
    this.updateEacheTypeItems()
  }

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
  
  awardWeekCanUpdatable(): boolean {
    return this.awardWeek.status === "Agendado"
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

    this.findPokemonsImages()
    this.findItemsImages()
  }

  addNewAwardItem() {
    this.itemsReverted = this.awardWeek.items
    this.awardWeek.items.push(this.newAwardItem)
    this.updateEacheTypeItems()

    this.clear()

    this.modalService.dismissAll()
    console.log('atualizando items da lista para backend: items: ' + this.awardWeek.items)
  }

  private clear() {
    this.newAwardItem = new AwardItem()
    this.itemChoose = ""
    this.pokemonSelected = undefined
    this.itemSelected = undefined
  }

  private updateEacheTypeItems() {
    this.itemsBasic = this.awardWeek.items.filter(i => i.occupation == 'Básico')
    this.itemsPremium = this.awardWeek.items.filter(i => i.occupation == 'Premium')
  }

  save() {
    this.loading = true
    this.awardWeekService.updateItems(this.awardWeek.id, this.awardWeek.items).subscribe(
      {
        next: () => {
          this.loading = false
          this.toastService.show('Prêmios da Semana Atualizado com Sucesso!', { classname: 'bg-success text-light', delay: 10000 });
        },
        error: error => {
          console.log(error)
          this.toastService.show('Erro ao atualizar Premios da Semana!', { classname: 'bg-danger text-light', delay: 10000 });
          this.loading = false
        },
        complete: () => {
          this.loading = false
        }
      }
    )

  }

  private findPokemonsImages() {
    this.pokemonService.findAllPokemons().subscribe(
      {
        next: response => {
          this.pokemonsImage = response
          this.pokemonsImage.forEach(p => {
            let objectURL = 'data:image/jpeg;base64,' + p.image
            p.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          })
        },
        error: error => {
          console.log(error)
        }
      }
    )
  }

  private findItemsImages() {
    this.itemService.findAllItems().subscribe(
      {
        next: response => {
          this.itemsImage = response
          this.itemsImage.forEach(item => {
            let objectURL = 'data:image/jpeg;base64,' + item.image
            item.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          })
        },
        error: error => {
          console.log(error)
        }
      }
    )
  }

  searchPokemons: OperatorFunction<string, readonly String[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : this.pokemonsImage.map(p => p.name).filter((v) => v.indexOf(term.toUpperCase()) > -1).slice(0, 10),
      )
    );

  searchItems: OperatorFunction<string, readonly String[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : this.itemsImage.map(i => i.name).filter((v) => v.indexOf(term.toUpperCase()) > -1).slice(0, 10),
      )
    );

  updateModel() {
    if (this.typeItemChoose == 'pokemon') {
      this.pokemonSelected = this.pokemonsImage.find(p => p.name == this.itemChoose)

      this.newAwardItem.pokemon.image = this.pokemonSelected!.image
      this.newAwardItem.pokemon.imageBlob = this.pokemonSelected!.imageBlob
      this.newAwardItem.pokemon.name = this.pokemonSelected!.name
      this.newAwardItem.pokemon.gameId = ":" + this.pokemonSelected!.name
      this.newAwardItem.validImageBlob = this.pokemonSelected!.imageBlob
      this.newAwardItem.isItem = false

    } else if (this,this.typeItemChoose == 'item') {
      this.itemSelected = this.itemsImage.find(i => i.name == this.itemChoose)

      this.newAwardItem.item.image = this.itemSelected!.image
      this.newAwardItem.item.imageBlob = this.itemSelected!.imageBlob
      this.newAwardItem.item.name = this.itemSelected!.name
      this.newAwardItem.item.gameId = ":" + this.itemSelected!.name
      this.newAwardItem.validImageBlob = this.itemSelected!.imageBlob
      this.newAwardItem.isItem = true
    } else {
      this.pokemonSelected = this.pokemonsImage.find(p => p.name == this.pokemonChoose)

      this.newAwardItem.pokemon.image = this.pokemonSelected!.image
      this.newAwardItem.pokemon.imageBlob = this.pokemonSelected!.imageBlob
      this.newAwardItem.pokemon.name = this.pokemonSelected!.name
      this.newAwardItem.pokemon.gameId = ":" + this.pokemonSelected!.name
      this.newAwardItem.validImageBlob = this.pokemonSelected!.imageBlob

      this.itemSelected = this.itemsImage.find(i => i.name == this.itemChoose)

      this.newAwardItem.item.image = this.itemSelected!.image
      this.newAwardItem.item.imageBlob = this.itemSelected!.imageBlob
      this.newAwardItem.item.name = this.itemSelected!.name
      this.newAwardItem.item.gameId = ":" + this.itemSelected!.name
      this.newAwardItem.validImageBlob = this.itemSelected!.imageBlob
      this.newAwardItem.isBoth = true
    }
  }


  removeItem(item: AwardItem) {
    this.itemsReverted = this.awardWeek.items
    this.awardWeek.items = this.awardWeek.items.filter(awardItem => awardItem !== item)
    this.updateEacheTypeItems()
  }

  revertAction() {
    this.awardWeek.items = this.itemsReverted
    this.updateEacheTypeItems()
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

  formatDateTime(date: Date): String {
    return formatDate(date, "dd/MM/yyyy HH:mm", 'en-US')
  }

}
