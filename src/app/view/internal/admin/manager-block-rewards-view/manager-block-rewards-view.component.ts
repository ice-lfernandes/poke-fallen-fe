import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faFloppyDisk, faSearch, faArrowLeft, faCircleInfo, faMinus, faPencil, faPlus, faRotateLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BlockPreAwardItemService } from 'src/app/service/integration/block-pre-award-item.service';
import { BlockPreAwardItem } from 'src/app/service/integration/model/commons/block-pre-award-item';
import { PreAwardItem } from 'src/app/service/integration/model/commons/pre-award-item';
import { ImageComposition } from 'src/app/shared/images/image-composition';


@Component({
  selector: 'app-manager-block-rewards-view',
  templateUrl: './manager-block-rewards-view.component.html',
  styleUrls: ['./manager-block-rewards-view.component.css']
})
export class ManagerBlockRewardsViewComponent implements OnInit {

  // Icons
  faSearch = faSearch
  faPencil = faPencil
  faCircleInfo = faCircleInfo
  faUser = faUser
  faArrowLeft = faArrowLeft
  faMinus = faMinus
  faFloppyDisk = faFloppyDisk
  faPlus = faPlus
  faRotateLeft = faRotateLeft

  blocks: BlockPreAwardItem[] = []

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
      let namePokemon!: String
      let imageItemBlob: any
      let nameItem!: String

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
}
