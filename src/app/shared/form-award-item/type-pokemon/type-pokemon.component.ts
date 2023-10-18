import { Component, Input, Output } from '@angular/core';
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
  // @Input()
  // @Output()
  // enableToAdd: boolean = false

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

  // onChangeFields(): void {
  //   this.enableToAdd = 
  //     (this.awardItem.name != null && this.awardItem.name != "") &&
  //     (this.awardItem.occupation != null && this.awardItem.occupation != "") &&
  //     this.awardItem.pokemon != null && 
  //     this.awardItem.pokemon.gameId != "" && 
  //     this.awardItem.pokemon.name != "" &&
  //     (this.awardItem.pokemon.stats.experienceValues.attack != 0 && this.awardItem.pokemon.stats.experienceValues.attack != undefined) &&
  //     (this.awardItem.pokemon.stats.experienceValues.defense != 0 && this.awardItem.pokemon.stats.experienceValues.defense != undefined) &&
  //     (this.awardItem.pokemon.stats.experienceValues.specialAttack != 0 && this.awardItem.pokemon.stats.experienceValues.specialAttack != undefined) &&
  //     (this.awardItem.pokemon.stats.experienceValues.specialDefense != 0 && this.awardItem.pokemon.stats.experienceValues.specialDefense != undefined) &&
  //     (this.awardItem.pokemon.stats.experienceValues.speed != 0 && this.awardItem.pokemon.stats.experienceValues.speed != undefined) && 
  //     (this.awardItem.pokemon.stats.experienceValues.hp != 0 && this.awardItem.pokemon.stats.experienceValues.hp != undefined) && 
  //     (this.awardItem.pokemon.stats.individualValueType != "") && 
  //     (this.awardItem.pokemon.stats.nature != "") 
  // }

}
