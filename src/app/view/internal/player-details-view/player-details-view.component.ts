import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/service/integration/model/commons/player';

import { PlayerUpdateBasicRequest } from 'src/app/service/integration/model/request/player-update-basic-request';
import { PlayerService } from 'src/app/service/integration/player.service';

@Component({
  selector: 'app-player-details-view',
  templateUrl: './player-details-view.component.html',
  styleUrls: ['./player-details-view.component.css']
})
export class PlayerDetailsViewComponent {

  player: Player = new Player();


  constructor(private playerService: PlayerService) { }


}
