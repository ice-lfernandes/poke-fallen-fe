import { Component, Input } from '@angular/core';
import { faDownload, faUpload, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as fileSaver from 'file-saver';
import { Observable } from 'rxjs';
import { GameSaveService } from 'src/app/service/integration/game-save-service.service';
import { Player } from 'src/app/service/integration/model/commons/player';

import { PlayerService } from 'src/app/service/integration/player.service';
import { Download } from 'src/app/utils/download';

@Component({
  selector: 'app-modal-game-save',
  templateUrl: './modal-game-save.component.html',
  styleUrls: ['./modal-game-save.component.css']
})
export class ModalGameSaveComponent {

  faDownload = faDownload
  faUpload = faUpload
  faPaperclip = faPaperclip

  loading: boolean = false; // Flag variable
  file: File | null = null; // Variable to store file
  closeResult = '';

  downloadFile!: Observable<Download>


  @Input()
  player!: Player

  constructor(private playerService: PlayerService, private modalService: NgbModal,
    public activeModal: NgbActiveModal, private gameSaveService: GameSaveService) { }

  download() {
    this.downloadFile = this.gameSaveService.downloadGameSave(
      this.player.playerId,
      'game.rxdata'
    )
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
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

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.playerService.uploadGameSave(this.file, this.player.playerId).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.loading = false; // Flag variable 
        }
      }
    );
  }

}
