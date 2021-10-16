import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetIssueQuery } from '../generated/graphql'
import styled from 'styled-components'
import { GreenDot, RedCheck } from './atoms/IssueStateIcons'
import ContentWrapper from './atoms/ContentWrapper'
import TextBox from './TextBox'
import IssueInfo from './IssueInfo'
import Message from './atoms/Message'

const IssueWrapper = styled(ContentWrapper)`
    margin-top: 0;
    padding-top: 0;
`

const Issue = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const IssueTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.9em;
    line-height: 1;

    h1 {
        padding: 0;
        margin: 0;
        font-weight: 400;
        line-height: 1.5;
    }
`

const IssueInfoWrapper = styled.div`
    color: #57606a;
    margin: 4px 10px;
    font-size: 0.9rem;
    span:first-of-type {
        font-weight: bold;
    }
`

const Separator = styled.div`
    width: 100%;
    margin-top: 10px;
    border-bottom: 1px solid #d0d7de;
`

type IssueParams = {
    id: string
}

function IssuePage(): JSX.Element {
    const { id } = useParams<IssueParams>()
    if (!id) return <h2>Invalid ID</h2>
    const issueId = parseInt(id)
    const { data, called, loading } = useGetIssueQuery({
        fetchPolicy: 'cache-and-network',
        variables: {
            id: issueId,
        },
    })

    const issue = data?.repository?.issue

    if (called && loading) return <Message>Loading..</Message>
    if (!issue) return <Message>Issue not found</Message>

    return (
        <IssueWrapper>
            <Issue>
                <IssueTitle>
                    {issue.state === 'OPEN' ? <GreenDot /> : <RedCheck />}
                    <h1>{issue.title}</h1>
                </IssueTitle>
                <IssueInfoWrapper>
                    <IssueInfo
                        issueNumber={issue.number}
                        createdAt={issue.createdAt}
                        closedAt={issue.closedAt}
                        login={issue.author?.login}
                    />
                </IssueInfoWrapper>
                <Separator />
                <TextBox
                    login={issue.author?.login}
                    createdAt={issue.createdAt}
                    bodyHTML={issue.bodyHTML}
                />
            </Issue>
            {issue.comments?.edges?.map((e) => {
                if (e?.node)
                    return (
                        <TextBox
                            key={e.node.databaseId}
                            login={e.node.author?.login}
                            createdAt={e.node.createdAt}
                            bodyHTML={e.node.bodyHTML}
                        />
                    )
            })}
        </IssueWrapper>
    )
}

export default IssuePage
