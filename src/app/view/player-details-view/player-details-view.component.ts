import { Component } from '@angular/core';

import {
  faArrowRightArrowLeft, faAward, faDownload, faFloppyDisk,
  faHandHoldingDollar, faUpload, faUser
} from '@fortawesome/free-solid-svg-icons';

import * as fileSaver from 'file-saver';

import { PlayerService } from 'src/app/service/integration/player.service';


@Component({
  selector: 'app-player-details-view',
  templateUrl: './player-details-view.component.html',
  styleUrls: ['./player-details-view.component.css']
})
export class PlayerDetailsViewComponent {

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
      //window.open(url);
      //window.location.href = response.url;
      fileSaver.saveAs(blob, 'employees.json');
    }, error => console.log('Error downloading the file: ' + error),
      () => console.info('File downloaded successfully'));
  }
}
