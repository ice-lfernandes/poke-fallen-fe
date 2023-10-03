import { Component, Input } from '@angular/core';
import { ItemImage } from 'src/app/service/integration/model/commons/item-image';

@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent {

@Input()
item!: ItemImage

}
