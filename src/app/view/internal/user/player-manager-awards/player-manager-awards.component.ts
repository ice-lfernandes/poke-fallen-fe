import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faDownload, faGift, faThumbsUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import { er } from '@fullcalendar/core/internal-common';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AwardItemDeliveryService } from 'src/app/service/integration/award-item-delivery.service';
import { AwardItemDeliveryPlayer } from 'src/app/service/integration/model/commons/award-week-delivery-player';
import { ToastService } from 'src/app/shared/toasts/toast-service.service';

@Component({
  selector: 'app-player-manager-awards',
  templateUrl: './player-manager-awards.component.html',
  styleUrls: ['./player-manager-awards.component.css']
})
export class PlayerManagerAwardsComponent implements OnInit {

  // icons
  faGift = faGift
  faDownload = faDownload
  faThumbsUp = faThumbsUp
  faXmark = faXmark

  closeResult = '';
  enableChoice = false
  noAwards = false
  loading = false
  awardItemsDelivery: AwardItemDeliveryPlayer[] = []
  modalConfirmation!: NgbActiveModal
  modalTransfer!: NgbActiveModal
  playerIdToSend: string | undefined


  constructor(private awardItemDeliveryService: AwardItemDeliveryService,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.searchGifts()
  }

  openConfirmation(content: any) {
    this.modalConfirmation = content
    this.modalService.open(this.modalConfirmation, { size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  openTransfer(content: any) {
    this.modalTransfer = content
    this.modalService.open(this.modalTransfer, { size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  confirmIntent(awardIdItem: number) {
    this.loading = true
    this.awardItemDeliveryService.confirmIntent(awardIdItem.toString()).subscribe(
      {
        next: response => {
          console.log("confirmado intenção de recebimento, response=" + response)
          this.modalService.dismissAll()
          this.searchGifts()
          this.loading = false
          this.toastService.show('Intenção de Recebimento Confirmado!', { classname: 'bg-success text-light', delay: 10000 });
        },
        error: error => {
          console.log("error ao confirmadar intenção de recebimento, error=" + error)
          this.toastService.show('Erro ao confirmar intenção de recebimento!', { classname: 'bg-danger text-light', delay: 10000 });
          this.loading = false
        }
      }
    )
  }

  transferIntent(awardIdItem: number) {
    this.loading = true
    this.awardItemDeliveryService.transferIntent(this.playerIdToSend!, awardIdItem).subscribe(
      {
        next: response => {
          console.log("confirmado intenção de transferência de prêmio, response=" + response)
          this.modalService.dismissAll()
          this.searchGifts()
          this.loading = false
          this.toastService.show('Intenção de Transferência Confirmado!', { classname: 'bg-success text-light', delay: 10000 });
        },
        error: error => {
          console.log("error ao confirmadar intenção de recebimento, error=" + error)
          this.toastService.show('Erro ao confirmar intenção de transferência!', { classname: 'bg-danger text-light', delay: 10000 });
          this.loading = false
        }
      }
    )
  }

  isGameIdtoSendNotFilled(): boolean {
    return this.playerIdToSend == undefined
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

  openGifts() {
    this.enableChoice = true
  }

  searchGifts() {
    this.loading = true
    this.awardItemDeliveryService.checkWaitingConfirmation().subscribe({
      next: response => {
        this.awardItemsDelivery = response
        this.awardItemsDelivery.forEach(item => {
          if (item.awardItem.typeItemAward == 'pokemon') {
            let objectURL = 'data:image/jpeg;base64,' + item.awardItem.pokemon.image
            item.awardItem.pokemon.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            item.awardItem.validImageBlob = item.awardItem.pokemon.imageBlob
            item.awardItem.validGameId = item.awardItem.pokemon.gameId
          } else if(item.awardItem.typeItemAward == 'item') {
            let objectURL = 'data:image/jpeg;base64,' + item.awardItem.item.image
            item.awardItem.item.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            item.awardItem.validImageBlob = item.awardItem.item.imageBlob
            item.awardItem.validGameId = item.awardItem.item.gameId
          } else {
            let objectURL = 'data:image/jpeg;base64,' + item.awardItem.pokemon.image
            item.awardItem.pokemon.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    
            objectURL = 'data:image/jpeg;base64,' + item.awardItem.item.image
            item.awardItem.item.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          }
        })
        this.noAwards = false
        this.loading = false
      },
      error: error => {
        console.log(error)
        if (error.status = '404') {
          this.noAwards = true
          this.enableChoice = false
        }
        this.loading = false
      }
    })
  }


}
