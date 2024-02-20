import { PokemonStats } from "./pokemon-stats"

export class Pokemon {

    name: string = ""
    gameId: string = ":"
    image: String[] = []
    stats: PokemonStats = new PokemonStats()
    imageBlob: any
    
}
