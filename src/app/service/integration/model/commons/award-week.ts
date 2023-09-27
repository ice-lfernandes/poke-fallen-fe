import { AwardItem } from "./award-item"
import { StatusAwardWeek } from "./status-award-week"

export interface AwardWeek {

    dateTime: Date
    status: StatusAwardWeek
    items: AwardItem[]

}

