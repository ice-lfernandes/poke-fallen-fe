import { Component, OnInit, PipeTransform, QueryList, ViewChildren } from '@angular/core';
import { faFloppyDisk, faTrash, faPen, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

import { Player } from 'src/app/service/integration/model/commons/player';
import { PlayersPaginateResponse } from 'src/app/service/integration/model/response/players-paginate-response';
import { PlayerService } from 'src/app/service/integration/player.service';

@Component({
  selector: 'app-admin-players-view',
  templateUrl: './admin-players-view.component.html',
  styleUrls: ['./admin-players-view.component.css']
})
export class AdminPlayersViewComponent implements OnInit {

  faPen = faPen
  faFloppyDisk = faFloppyDisk
  faHandHoldingDollar = faHandHoldingDollar

  faTrash = faTrash

  tableResponse!: PlayersPaginateResponse
  players: Player[] = [];
  total: number = 0

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.players = []
    this.playerService.findAllPlayers()
      .subscribe(response => {
        this.tableResponse = response
        this.players = response.content
        this.total = response.numberOfElements
      },
        error => console.log(error))
  }


}
