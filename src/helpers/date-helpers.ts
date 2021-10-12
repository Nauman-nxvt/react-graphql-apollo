import { formatDistanceToNowStrict } from 'date-fns'

export function convertDateToTimeAgo(date: Date): string {
    return formatDistanceToNowStrict(date)
}
