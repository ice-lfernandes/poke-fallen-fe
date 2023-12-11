import { Component, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { AwardItem } from 'src/app/service/integration/model/commons/award-item';

@Component({
  selector: 'app-type-both',
  templateUrl: './type-both.component.html',
  styleUrls: ['./type-both.component.css']
})
export class TypeBothComponent {

  //icons
  faPlus = faPlus
  
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

}
