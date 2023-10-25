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
    validGameId: string | undefined
    status: StatusAwardItem = StatusAwardItem.SCHEDULED
    isItem: boolean = false
}
