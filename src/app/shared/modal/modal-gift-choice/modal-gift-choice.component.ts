import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-gift-choice',
  templateUrl: './modal-gift-choice.component.html',
  styleUrls: ['./modal-gift-choice.component.css']
})
export class ModalGiftChoiceComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
