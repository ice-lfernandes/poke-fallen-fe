import { PokemonStats } from "./pokemon-stats"

export class Pokemon {

    name: String = ""
    gameId: String = ":"
    image: String[] = []
    stats: PokemonStats = new PokemonStats()
    imageBlob: any
    
}
