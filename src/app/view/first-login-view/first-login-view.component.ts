import { Component, OnInit } from '@angular/core';

import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/service/integration/player.service';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login-view.component.html',
  styleUrls: ['./first-login-view.component.css']
})
export class FirstLoginViewComponent implements OnInit {

  player!: Player
  submitted = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = new Player()
  }

  register() {
    this.submitted = false
    console.log('iniciou cadastro')

    this.playerService.createPlayer(this.player)
      .subscribe(
        response => {
          console.log('cadastrou com sucesso');
        }, error => {
          console.log(error)
        }
      );

    this.submitted = true
    this.resetForm()
    console.log('finalizou cadastro')
  }

  private resetForm() {
    this.player = new Player()
  }

}