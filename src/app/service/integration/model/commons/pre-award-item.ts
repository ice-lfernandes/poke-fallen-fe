import { ChoiceAwardItem } from "./choice-award-item";
import { ItemImage } from "./item-image";
import { PokemonImage } from "./pokemon-image";

export class PreAwardItem {
    pokemon: PokemonImage | undefined
    item: ItemImage | undefined
    typeItemAward!: string
    choiceItems!: ChoiceAwardItem[]

}
