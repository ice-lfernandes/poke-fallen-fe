import { Component, Input, OnInit } from '@angular/core';
import { AwardItem } from 'src/app/service/integration/model/commons/award-item';

@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent implements OnInit {

  @Input()
  awardItem!: AwardItem
  @Input()
  disableEdit!: boolean

  occupationList: String[] = ["Básico", "Premium"]

  ngOnInit(): void {
    this.awardItem.typeItemAward = 'item'
  }

}
