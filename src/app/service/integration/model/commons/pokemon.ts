import { PokemonStats } from "./pokemon-stats"

export class Pokemon {

    name: String = ""
    gameID: number = 1
    image: String[] = []
    stats: PokemonStats | undefined
    imageBlob: any
}
