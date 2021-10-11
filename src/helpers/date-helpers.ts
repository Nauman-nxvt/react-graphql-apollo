import {formatDistanceToNowStrict} from "date-fns";

export function convertDateToTimeAgo(date: Date) {
    return formatDistanceToNowStrict(date)
}