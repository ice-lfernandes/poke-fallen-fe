import { ItemImage } from "./item-image"
import { Pokemon } from "./pokemon"

export class AwardItem {

    name: String = ""
    quantity: number = 1
    occupation: String = ""
    typeItemAward: String = ""
    pokemon: Pokemon = new Pokemon()
    item: ItemImage = new ItemImage()
}
