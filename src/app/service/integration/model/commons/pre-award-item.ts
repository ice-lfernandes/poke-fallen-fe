import { Item } from "./item";
import { Pokemon } from "./pokemon";

export class PreAwardItem {
    pokemon: Pokemon | undefined
    item: Item | undefined
    typeItemAward!: string
}
