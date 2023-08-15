import { Component, Input, OnInit } from '@angular/core';

import { Player } from 'src/app/service/integration/model/commons/player';
import { PlayerUpdateBasicRequest } from 'src/app/service/integration/model/request/player-update-basic-request';
import { PlayerService } from 'src/app/service/integration/player.service';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.css']
})
export class FormPlayerComponent implements OnInit {

  @Input()
  player!: Player;

  @Input()
  isUser: boolean = true


  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    console.log(this.player)
    if (this.player == undefined) {
      this.player = new Player()
    }
  }

  updateBasicData() {
    console.log('atualizando... ')
    this.playerService.updateBasicDataPlayer(new PlayerUpdateBasicRequest(this.player.email, this.player.name), 
    this.player.playerId)
      .subscribe(
        response => {
          console.log('atualizou com sucesso');
        }, error => {
          console.log(error)
        }
      );
  }

}
