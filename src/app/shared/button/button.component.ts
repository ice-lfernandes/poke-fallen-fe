import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibraryInterface } from '@fortawesome/angular-fontawesome';
import { IconPrefix, faUber } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input()
  textButton: string = ""
  @Input()
  class: string = ""
  @Input()
  loading: boolean = false

  response: boolean = false
  submitted: boolean = false
  classAfterSubmitted: string = ''
  msgAfterSubmitted: string = ''

}
