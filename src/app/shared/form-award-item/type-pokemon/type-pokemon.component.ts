import { Component, Input } from '@angular/core';
import { AwardItem } from 'src/app/service/integration/model/commons/award-item';



@Component({
  selector: 'app-type-pokemon',
  templateUrl: './type-pokemon.component.html',
  styleUrls: ['./type-pokemon.component.css']
})
export class TypePokemonComponent {

  @Input()
  awardItem!: AwardItem
  @Input()
  action!: (args: any) => void;
  @Input()
  disableEdit!: boolean

  statusSelect: String = "0"
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

  onChange(eventValue: String) {
    this.awardItem.pokemon.stats!!.nature = eventValue
    console.log(this.awardItem.pokemon.stats.nature)
  }

}
