import { Component } from '@angular/core';
import {
  faArrowRightArrowLeft, faAward, faDownload, faFloppyDisk,
  faHandHoldingDollar, faPaperclip, faUpload, faUser
} from '@fortawesome/free-solid-svg-icons';

import * as fileSaver from 'file-saver';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PlayerService } from 'src/app/service/integration/player.service';


@Component({
  selector: 'app-player-game-save-view',
  templateUrl: './player-game-save-view.component.html',
  styleUrls: ['./player-game-save-view.component.css']
})
export class PlayerGameSaveViewComponent {

  faUser = faUser
  faFloppyDisk = faFloppyDisk
  faHandHoldingDollar = faHandHoldingDollar
  faAward = faAward
  faArrowRightArrowLeft = faArrowRightArrowLeft
  faDownload = faDownload
  faUpload = faUpload
  faPaperclip = faPaperclip

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File | null = null; // Variable to store file
  closeResult = '';

  constructor(private playerService: PlayerService, private modalService: NgbModal) { }

  download() {
    this.playerService.downloadGameSave("55555").subscribe(response => {
      let blob: any = new Blob([response], { type: 'text/json; charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, 'game.xrdata');
    }, error => console.log('Error downloading the file: ' + error),
      () => console.info('File downloaded successfully'));
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
    this.playerService.uploadGameSave(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable 
        }
      }
    );
  }
}
