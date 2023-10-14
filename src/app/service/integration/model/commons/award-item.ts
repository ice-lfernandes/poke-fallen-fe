import { Item } from "./item"
import { Player } from "./player"
import { Pokemon } from "./pokemon"
import { StatusAwardItem } from "./status-award-item"

export class AwardItem {

    name: string = ""
    quantity: number = 1
    occupation: string = ""
    typeItemAward: string | undefined
    pokemon: Pokemon = new Pokemon()
    item: Item = new Item()
    player: Player | null = null
    validImageBlob: any
    status: StatusAwardItem = StatusAwardItem.SCHEDULED

    updateValodImageBlob(): any {
        if (this.pokemon != null && this.pokemon.image.length > 0) {
            console.log('pokemon')
            return this.pokemon.imageBlob
        } else {
            console.log('item')
            return this.item.imageBlob
        }
    }
}
