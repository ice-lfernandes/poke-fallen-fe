import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

import { BlockPreAwardItemService } from 'src/app/service/integration/block-pre-award-item.service';
import { BlockPreAwardItem } from 'src/app/service/integration/model/commons/block-pre-award-item';
import { ItemImage } from 'src/app/service/integration/model/commons/item-image';
import { PokemonImage } from 'src/app/service/integration/model/commons/pokemon-image';
import { PreAwardItem } from 'src/app/service/integration/model/commons/pre-award-item';
import { ImageComposition } from 'src/app/shared/images/image-composition';


@Component({
  selector: 'app-manager-block-rewards-view',
  templateUrl: './manager-block-rewards-view.component.html',
  styleUrls: ['./manager-block-rewards-view.component.css']
})
export class ManagerBlockRewardsViewComponent implements OnInit {

  // Icons
  faTrash = faTrash
  faSearch = faSearch
  faPlus = faPlus

  blocks: BlockPreAwardItem[] = []
  pokemonsImage: PokemonImage[] = []
  itemsImage: ItemImage[] = []
  typeItemChoose: string = 'pokemon'
  itemChoose: any;
  pokemonChoose: any;
  pokemonSelected: PokemonImage | undefined
  itemSelected: ItemImage | undefined
  newBlock: BlockPreAwardItem = new BlockPreAwardItem()
  closeResult = '';

  // Filters
  blockNameSearchFilter: string | undefined

  loading: boolean = false

  constructor(private blockService: BlockPreAwardItemService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.blocks = []
    this.findBlocks()
  }

  findBlocks() {
    this.loading = true
    this.blocks = []

    this.blockService.findAllBlocks(this.blockNameSearchFilter)
      .subscribe(response => {
        console.log(response)
        this.blocks = response

        this.blocks.forEach(block => {
          block.preAwardItems.forEach(preAwardItem => {
            if (preAwardItem.pokemon != null) {
              let objectURL = 'data:image/jpeg;base64,' + preAwardItem.pokemon.image
              preAwardItem.pokemon.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL)
            }
            if (preAwardItem.item != null) {
              let objectURL = 'data:image/jpeg;base64,' + preAwardItem.item.image
              preAwardItem.item.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL)
            }
            if (preAwardItem.choiceItems != null) {
              preAwardItem.choiceItems.forEach(choiceAwardItem => {
                let objectURL = 'data:image/jpeg;base64,' + choiceAwardItem.pokemon.image
                choiceAwardItem.pokemon.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL)
              })
            }
          })
        })

        this.loading = false
      },
        error => {
          console.log(error)
          this.loading = false
        })
  }

  convertPreAwardItemToImageComposition(preAwardItems: PreAwardItem[]): ImageComposition[] {
    return preAwardItems.map(preAwardItem => {
      let imagePokemonBlob: any
      let namePokemon!: string
      let imageItemBlob: any
      let nameItem!: string

      if (preAwardItem.pokemon != null) {
        imagePokemonBlob = preAwardItem.pokemon.imageBlob,
          namePokemon = preAwardItem.pokemon.name
      }
      if (preAwardItem.item != null) {
        imageItemBlob = preAwardItem.item.imageBlob,
          nameItem = preAwardItem.item.name
      }

      return new ImageComposition(
        imagePokemonBlob,
        namePokemon,
        imageItemBlob,
        nameItem
      )
    })
  }

  convertPreAwardItemToImageCompositionForChoiceAwards(preAwardItems: PreAwardItem[]): ImageComposition[] {
    let images: ImageComposition[] = []
    preAwardItems.map(preAwardItem => {
      let imageItemBlob: any
      let nameItem!: String
      preAwardItem.choiceItems.forEach(choiceItem => 
        images.push(new ImageComposition(
          choiceItem.pokemon.imageBlob,
          choiceItem.pokemon.name,
          imageItemBlob,
          nameItem
        ))  
      )
    })
    return images
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
  
        
  
      } else if (this,this.typeItemChoose == 'item') {
        this.itemSelected = this.itemsImage.find(i => i.name == this.itemChoose)
  
        
  
      } else {
        this.pokemonSelected = this.pokemonsImage.find(p => p.name == this.pokemonChoose)
  
        
      }
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
}
