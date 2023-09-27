import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faArrowLeft, faFloppyDisk, faMinus, faPencil, faPlus, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AwardItem } from 'src/app/service/integration/model/commons/award-item';

import { AwardWeek } from 'src/app/service/integration/model/commons/award-week';
import { PokemonImage } from 'src/app/service/integration/model/commons/pokemon-image';

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
  itemsReverted : AwardItem[] = []

  active = 1
  closeResult = '';

  constructor(private sanitizer: DomSanitizer, private modalService: NgbModal) { }

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
