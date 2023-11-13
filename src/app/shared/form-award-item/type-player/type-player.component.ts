import { Component, Input, OnInit } from '@angular/core';
import { AwardWeekService } from 'src/app/service/integration/award-week.service';

import { AwardItem } from 'src/app/service/integration/model/commons/award-item';
import { AwardItemPlayer } from 'src/app/service/integration/model/commons/award-item-player';

@Component({
  selector: 'app-type-player',
  templateUrl: './type-player.component.html',
  styleUrls: ['./type-player.component.css']
})
export class TypePlayerComponent implements OnInit {

  @Input()
  nameAward!: string
  awardItemPlayers!: AwardItemPlayer[]

  constructor(private awardWeekService: AwardWeekService) {
  }

  ngOnInit(): void {
    this.awardWeekService.findByAwardItemsByName(this.nameAward).subscribe(
      {
        next: response => {
          this.awardItemPlayers = response
        },
        error: error => {
          console.log(error)
        }
      }
    )
  }

}
