import { Component, OnInit } from '@angular/core';

import { faUser, faFloppyDisk, faHandHoldingDollar, faAward, faArrowRightArrowLeft, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Player } from 'src/app/model/player';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {

  // Icons
  faUser = faUser
  faFloppyDisk = faFloppyDisk
  faHandHoldingDollar = faHandHoldingDollar
  faAward = faAward
  faArrowRightArrowLeft = faArrowRightArrowLeft
  faDownload = faDownload
  faUpload = faUpload

  player: Player = new Player();


  constructor(public loginService: AuthenticationService) { }

  


}
