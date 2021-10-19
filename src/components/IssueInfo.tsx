import React from 'react'
import { convertDateToTimeAgo } from '../helpers/date-helpers'

export type IssueInfoProps = {
    issueNumber: number
    createdAt: string
    closedAt: string | null
    login: string | undefined
}

const authorInfoOpen = (
    createdAt: string,
    author: string | undefined
): string => {
    return ` opened ${convertDateToTimeAgo(new Date(createdAt))} ago ${
        author ? 'by ' + author : ''
    }`
}

const authorInfoClosed = (
    closedAt: string,
    author: string | undefined
): string => {
    return ` by ${author ? author : ''} was closed ${convertDateToTimeAgo(
        new Date(closedAt)
    )} ago`
}

const IssueInfo = ({
    issueNumber,
    createdAt,
    closedAt,
    login,
}: IssueInfoProps): JSX.Element => {
    return (
        <>
            #{issueNumber}
            {closedAt
                ? authorInfoClosed(closedAt, login)
                : authorInfoOpen(createdAt, login)}
        </>
    )
}

export default IssueInfo
