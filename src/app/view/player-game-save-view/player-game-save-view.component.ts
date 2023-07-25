import { Component } from '@angular/core';

import { PlayerService } from 'src/app/service/integration/player.service';

import {
  faArrowRightArrowLeft, faAward, faDownload, faFloppyDisk,
  faHandHoldingDollar, faUpload, faUser
} from '@fortawesome/free-solid-svg-icons';

import * as fileSaver from 'file-saver';


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

  constructor(private playerService: PlayerService) { }

  download() {
    this.playerService.downloadGameSave("55555").subscribe(response => {
      let blob: any = new Blob([response], { type: 'text/json; charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, 'game.xrdata');
    }, error => console.log('Error downloading the file: ' + error),
      () => console.info('File downloaded successfully'));
  }
}
