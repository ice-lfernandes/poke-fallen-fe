import { PokemonStatPointValue } from "./pokemon-stat-point-value"

export class PokemonStats {
    nature: String = ""
    individualValueType: String = ""
    experienceValues: PokemonStatPointValue = new PokemonStatPointValue()
    shiny: boolean = false
}
