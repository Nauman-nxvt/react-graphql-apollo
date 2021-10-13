import { authoredInfo } from './IssuesList'
import React from 'react'

type IssueInfoProps = {
    issueNumber: number
    createdAt: string
    closedAt: string | null
    login: string | undefined
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
            {authoredInfo(createdAt, closedAt, login)}
        </>
    )
}

export default IssueInfo
