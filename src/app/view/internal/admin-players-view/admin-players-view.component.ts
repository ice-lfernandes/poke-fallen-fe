import { Component, OnInit, PipeTransform, QueryList, ViewChildren } from '@angular/core';
import { faFloppyDisk, faTrash, faPen, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

import { Player } from 'src/app/service/integration/model/commons/player';
import { PlayersPaginateResponse } from 'src/app/service/integration/model/response/players-paginate-response';
import { PlayerService } from 'src/app/service/integration/player.service';
import { ActionChoice, valueOfActionChoice } from './action-choose.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormPlayerComponent } from 'src/app/shared/modal/modal-form-player/modal-form-player.component';
import { ModalGameSaveComponent } from 'src/app/shared/modal/modal-game-save/modal-game-save.component';

@Component({
  selector: 'app-admin-players-view',
  templateUrl: './admin-players-view.component.html',
  styleUrls: ['./admin-players-view.component.css']
})
export class AdminPlayersViewComponent implements OnInit {

  // Icons
  faPen = faPen
  faFloppyDisk = faFloppyDisk
  faHandHoldingDollar = faHandHoldingDollar
  faTrash = faTrash

  // Datatable
  tableResponse!: PlayersPaginateResponse
  players: Player[] = []
  total: number = 0

  // Actions
  actionChoice: ActionChoice = ActionChoice.INFORMATION
  playerSelected: Player | undefined

  constructor(private playerService: PlayerService, private modalService: NgbModal) { }

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


  openModalInformation(player: Player) {
    const modalRef = this.modalService.open(ModalFormPlayerComponent, { size: 'lg' });
    modalRef.componentInstance.player = player
  }

  openModalGameSave(player: Player) {
    const modalRef = this.modalService.open(ModalGameSaveComponent, { size: 'lg' });
    modalRef.componentInstance.player = player
  }


}
