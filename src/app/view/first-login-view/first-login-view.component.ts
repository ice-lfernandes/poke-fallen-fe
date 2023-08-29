import { Component, OnInit } from '@angular/core';

import { Player } from 'src/app/service/integration/model/commons/player';
import { PlayerService } from 'src/app/service/integration/player.service';

const msgSuccess = "Jogador Criado com Sucesso!"
const msgError = "Erro ao criar jogador!"
const classSuccess = "alert alert-success text-center"
const classerror = "alert alert-danger text-center"

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login-view.component.html',
  styleUrls: ['./first-login-view.component.css']
})
export class FirstLoginViewComponent implements OnInit {

  player!: Player
  submitted = false;
  loading: boolean = false

  msgAfterSubmitted: string = ""
  classAfterSubmitted: string = ""

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = new Player()
  }

  register() {
    this.submitted = false
    this.loading = true

    this.playerService.createPlayer(this.player)
      .subscribe(
        response => {
          this.msgAfterSubmitted = msgSuccess
          this.classAfterSubmitted = classSuccess
          this.loading = false
        }, error => {
          console.log(error)
          this.msgAfterSubmitted = msgError
          this.classAfterSubmitted = classerror
          this.loading = false
        }
      );


    this.submitted = true
    this.resetForm()
  }

  private resetForm() {
    this.player = new Player()
  }

}
