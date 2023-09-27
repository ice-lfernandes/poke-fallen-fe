import { PokemonStats } from "./pokemon-stats"

export class Pokemon {

    name: String = ""
    gameID: number = 1
    image: String[] = []
    stas: PokemonStats | undefined
    imageBlob: any
}
