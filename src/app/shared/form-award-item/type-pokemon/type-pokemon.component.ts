import { Component, Input, OnInit, Output } from '@angular/core';
import { AwardItem } from 'src/app/service/integration/model/commons/award-item';



@Component({
  selector: 'app-type-pokemon',
  templateUrl: './type-pokemon.component.html',
  styleUrls: ['./type-pokemon.component.css']
})
export class TypePokemonComponent implements OnInit {

  @Input()
  awardItem!: AwardItem
  @Input()
  action!: (args: any) => void;
  @Input()
  disableEdit!: boolean

  occupationList: String[] = ["Básico", "Premium"]
  individualTypeValueList: String[] = ["Full IV", "Rank A"]
  natureList: String[] = [
    "",
    "ADAMANT",
    "BASHFUL",
    "BOLD",
    "BRAVE",
    "CALM",
    "CAREFUL",
    "DOCILE",
    "GENTLE",
    "HARDY",
    "HASTY",
    "IMPISH",
    "JOLLY",
    "LAX",
    "LONELY",
    "MILD",
    "MODEST",
    "NAIVE",
    "NAUGHTY",
    "QUIET",
    "QUIRKLY",
    "RASH",
    "RELAXED",
    "SASSY",
    "SERIOUS",
    "TIMID"
  ]

  ngOnInit(): void {
    this.awardItem.typeItemAward = 'pokemon'
  }


}
