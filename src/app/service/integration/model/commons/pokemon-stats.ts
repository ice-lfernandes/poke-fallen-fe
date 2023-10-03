import { PokemonStatPointValue } from "./pokemon-stat-point-value"

export class PokemonStats {
    nature: String = ""
    form: String = ""
    individualValues: PokemonStatPointValue = new PokemonStatPointValue()
    experienceValues: PokemonStatPointValue = new PokemonStatPointValue()
    shiny: boolean = false
}
