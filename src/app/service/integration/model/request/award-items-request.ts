import { ItemImage } from "../commons/item-image"
import { Pokemon } from "../commons/pokemon"

export class AwardItemsRequest {

    name: string = ""
    quantity: number = 1
    occupation: string = ""
    pokemon: Pokemon | null
    item: ItemImage | null

    constructor(name: string, quantity: number, occupation: string, 
        pokemon: Pokemon | null = null, 
        item: ItemImage | null = null) {
        this.name = name
        this.quantity = quantity
        this.occupation = occupation
        this.pokemon = pokemon
        this.item = item
    }

}
