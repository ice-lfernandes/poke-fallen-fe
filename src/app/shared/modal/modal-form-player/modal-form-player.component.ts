import { Component, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Player } from 'src/app/service/integration/model/commons/player';

@Component({
  selector: 'app-modal-form-player',
  templateUrl: './modal-form-player.component.html',
  styleUrls: ['./modal-form-player.component.css']
})
export class ModalFormPlayerComponent {

  player!: Player


  constructor(public activeModal: NgbActiveModal) { }

}

