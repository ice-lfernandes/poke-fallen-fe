import { PokemonImage } from "../commons/pokemon-image";

export interface PokemonsPaginatedResponse {
    content: PokemonImage[];
    numberOfElements: number;
    number: number;
	size: number;
}
