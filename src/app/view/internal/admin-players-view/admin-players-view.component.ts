import { Component, OnInit, PipeTransform, QueryList, ViewChildren } from '@angular/core';
import { faFloppyDisk, faTrash, faPen, faHandHoldingDollar, faSearch } from '@fortawesome/free-solid-svg-icons';

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
  faSearch = faSearch

  // Datatable
  tableResponse!: PlayersPaginateResponse
  players: Player[] = []
  total: number = 0
  page = 1
  size = 10

  // Filters
  playerIdSearchFilter: string | undefined
  usernameSearchFilter: string | undefined

  // Actions
  actionChoice: ActionChoice = ActionChoice.INFORMATION
  playerSelected: Player | undefined
  loading: boolean = false

  constructor(private playerService: PlayerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.players = []
    this.refreshTable()
  }

  refreshTable() {
    this.loading = true
    this.playerService.findAllPlayers(this.page, this.playerIdSearchFilter, this.usernameSearchFilter)
      .subscribe(response => {
        console.log(response)
        this.tableResponse = response
        this.players = response.content
        this.total = response.totalElements
        this.loading = false
      },
        error => {
          console.log(error)
          this.loading = false
        })
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
