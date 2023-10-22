import { Component, Input, OnInit } from '@angular/core';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';

import { Player } from 'src/app/service/integration/model/commons/player';
import { PlayerUpdateBasicRequest } from 'src/app/service/integration/model/request/player-update-basic-request';
import { PlayerService } from 'src/app/service/integration/player.service';
import { ToastService } from '../toasts/toast-service.service';

const msgSuccess = "Dados de jogador alterado com Sucesso!"
const msgError = "Erro ao alterar dados de jogador!"
const classSuccess = "alert alert-success text-center"
const classError = "alert alert-danger text-center"

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.css']
})
export class FormPlayerComponent implements OnInit {

  // icons
  faFloppyDisk = faFloppyDisk

  @Input()
  player!: Player;
  @Input()
  isUser: boolean = true

  submitted = false;
  loading: boolean = false
  msgAfterSubmitted: string = ""
  classAfterSubmitted: string = ""


  constructor(private playerService: PlayerService, private toastService: ToastService) { }

  ngOnInit(): void {
    if (this.player == undefined) {
      this.playerService.findByPlayerId(sessionStorage.getItem('playerId')!!)
        .subscribe(response => {
          this.player = response
        },
          error => console.log(error));
    }
  }

  updateBasicData() {
    this.loading = true
    this.playerService.updateBasicDataPlayer(new PlayerUpdateBasicRequest(this.player.email, this.player.name),
      this.player.playerId)
      .subscribe(
        response => {
          this.loading = false
          this.msgAfterSubmitted = msgSuccess
          this.classAfterSubmitted = classSuccess
          this.submitted = true
          this.toastService.show('Dados de usuário alterado com sucesso!', { classname: 'bg-success text-light', delay: 10000 });
        }, error => {
          console.log(error)
          this.loading = false
          this.msgAfterSubmitted = msgError
          this.classAfterSubmitted = classError
          this.submitted = true
          this.toastService.show('Erro ao atualizar dados de usuário!', { classname: 'bg-danger text-light', delay: 10000 });
        }
      );
  }

}
