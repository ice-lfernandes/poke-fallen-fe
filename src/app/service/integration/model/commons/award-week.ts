import { AwardItem } from "./award-item"
import { StatusAwardWeek } from "./status-award-week"

export interface AwardWeek {

    id: Number,
    dateTime: Date
    status: StatusAwardWeek
    items: AwardItem[]

}

