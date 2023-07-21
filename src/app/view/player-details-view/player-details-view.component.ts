import { Component } from '@angular/core';

import {
  faArrowRightArrowLeft, faAward, faDownload, faFloppyDisk,
  faHandHoldingDollar, faUpload, faUser
} from '@fortawesome/free-solid-svg-icons';


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
}
