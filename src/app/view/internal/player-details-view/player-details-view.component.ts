import { Component, OnInit } from '@angular/core';

import { Player } from 'src/app/model/player';
import { PlayerUpdateBasicRequest } from 'src/app/service/integration/model/player-update-basic-request';
import { PlayerService } from 'src/app/service/integration/player.service';

@Component({
  selector: 'app-player-details-view',
  templateUrl: './player-details-view.component.html',
  styleUrls: ['./player-details-view.component.css']
})
export class PlayerDetailsViewComponent implements OnInit {

  player: Player = new Player();


  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.findByPlayerId()
      .subscribe(response => {
        this.player = response
        this.player.prettyOccupations = this.fillPrettyOccupations(this.player.occupations)
      },
        error => console.log(error));

  }

  private fillPrettyOccupations(occupations: String[]): string {
    if (Array.isArray(occupations) && occupations.length || occupations == undefined) {
      return "N/A"
    } else {
      return occupations.join(" + ")
    }
  }

  updateBasicData() {
    console.log('atualizando... ')
    this.playerService.updateBasicDataPlayer(new PlayerUpdateBasicRequest(this.player.email, this.player.name))
      .subscribe(
        response => {
          console.log('atualizou com sucesso');
        }, error => {
          console.log(error)
        }
      );
  }
}
