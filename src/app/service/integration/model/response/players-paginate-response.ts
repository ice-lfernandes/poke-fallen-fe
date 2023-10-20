import { Player } from "../commons/player";

export interface PlayersPaginateResponse {

    content: Player[];
    totalElements: number;
    number: number;
	size: number;
    numberOfElements: number
}
