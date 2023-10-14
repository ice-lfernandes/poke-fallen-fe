import { AwardItem } from "./award-item"

export interface AwardWeek {

    id: Number,
    dateTime: Date
    status: string
    items: AwardItem[]

}

