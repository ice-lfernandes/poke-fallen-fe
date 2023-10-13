import { ItemImage } from "./item-image"
import { Pokemon } from "./pokemon"

export class AwardItem {

    name: string = ""
    quantity: number = 1
    occupation: string = ""
    typeItemAward: string | undefined
    pokemon: Pokemon = new Pokemon()
    item: ItemImage = new ItemImage()
}
