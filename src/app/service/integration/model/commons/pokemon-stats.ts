import { PokemonStatPointValue } from "./pokemon-stat-point-value"

export class PokemonStats {
    nature: string = ""
    individualValueType: String = ""
    form: string = ""
    experienceValues: PokemonStatPointValue = new PokemonStatPointValue()
    shiny: boolean = false
}
