import React from 'react'
import { SearchResult } from '../generated/graphql'
import styled from 'styled-components'
import { convertDateToTimeAgo } from '../helpers/date-helpers'
import { GreenDot, RedCheck } from './atoms/IssueStateIcons'
import { Link } from 'react-router-dom'
import ContentWrapper from './atoms/ContentWrapper'
import IssueInfo from './IssueInfo'

const IssuesListContainer = styled(ContentWrapper)`
    margin-top: 0;
    padding-top: 0;
`

const IssueList = styled.ul`
    list-style: none;
    border: 1px solid #d0d7de;
    padding: 0;
    margin-top: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
`

const IssueListItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #d0d7de;
    :hover {
        background-color: #eaeef2;
    }
`

const IssueTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.9em;
    line-height: 1;

    p {
        padding: 0;
        margin: 0;
        font-weight: bold;
        line-height: 1.5;
    }
`

const IssueInfoWrapper = styled.div`
    color: #57606a;
    margin: 4px 20px;
    font-size: 0.7rem;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    :hover {
        color: #0969da;
    }
`

type IssueListProps = {
    issues: SearchResult
}

export const authoredInfo = (
    createdAt: string,
    closedAt: string | null,
    author: string | undefined
): string => {
    if (closedAt !== null) {
        return ` by ${author ? author : ''} was closed ${convertDateToTimeAgo(
            new Date(closedAt)
        )} ago`
    }
    return ` opened ${convertDateToTimeAgo(new Date(createdAt))} ago ${
        author ? 'by ' + author : ''
    }`
}

const IssuesList = ({ issues }: IssueListProps): JSX.Element => {
    return (
        <IssuesListContainer>
            <IssueList>
                {issues &&
                    issues.map((edge) => {
                        const node = edge?.node
                        return node && node.__typename === 'Issue' ? (
                            <IssueListItem key={node.number}>
                                <StyledLink to={`issue/${node.number}`}>
                                    <IssueTitle>
                                        {node.state === 'OPEN' ? (
                                            <GreenDot />
                                        ) : (
                                            <RedCheck />
                                        )}
                                        <p>{node.title}</p>
                                    </IssueTitle>
                                </StyledLink>
                                <IssueInfoWrapper>
                                    <IssueInfo
                                        issueNumber={node.number}
                                        createdAt={node.createdAt}
                                        closedAt={node.closedAt}
                                        login={node.author?.login}
                                    />
                                </IssueInfoWrapper>
                            </IssueListItem>
                        ) : null
                    })}
            </IssueList>
        </IssuesListContainer>
    )
}

export default IssuesList
