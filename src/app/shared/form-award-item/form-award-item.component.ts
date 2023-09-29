import { Component, Input } from '@angular/core';
import { AwardItem } from 'src/app/service/integration/model/commons/award-item';

@Component({
  selector: 'app-form-award-item',
  templateUrl: './form-award-item.component.html',
  styleUrls: ['./form-award-item.component.css']
})
export class FormAwardItemComponent {

  @Input()
  item: AwardItem = new AwardItem()

}
