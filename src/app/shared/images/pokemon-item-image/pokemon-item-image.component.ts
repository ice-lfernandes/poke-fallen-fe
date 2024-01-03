import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { AwardItem } from 'src/app/service/integration/model/commons/award-item';

@Component({
  selector: 'app-pokemon-item-image',
  templateUrl: './pokemon-item-image.component.html',
  styleUrls: ['./pokemon-item-image.component.css']
})
export class PokemonItemImageComponent implements OnInit {


  faPlus = faPlus

  @Input()
  awardItem!: AwardItem


  ngOnInit(): void {
    console.log(this.awardItem);
  }

}
