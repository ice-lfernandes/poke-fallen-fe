import { Player } from "../commons/player";

export interface PlayersPaginateResponse {

    content: Player[];
    numberOfElements: number;
    number: number;
	size: number;
}
