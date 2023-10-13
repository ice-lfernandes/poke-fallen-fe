import { AwardItemsRequest } from "./award-items-request";

export class AwardWeekUpdateRequest {

    items: AwardItemsRequest[]

    constructor(items: AwardItemsRequest[]) {
        this.items = items
    }

}
