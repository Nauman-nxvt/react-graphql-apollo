import React from 'react'
import { SearchResult } from '../../generated/graphql'
import styled from 'styled-components'
import { GreenDot, RedCheck } from '../atoms/IssueStateIcons'
import { Link } from 'react-router-dom'
import IssueInfo from '../IssueInfo'

const IssuesListContainer = styled.section`
    width: 100%;
    margin-top: 0;
    padding-top: 0;
`

const IssueList = styled.ul`
    list-style: none;
    border: 1px solid ${({ theme }) => theme.colors.paleWhite};
    padding: 0;
    margin-top: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
`

const IssueListItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.unit2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.paleWhite};
    :hover {
        background-color: ${({ theme }) => theme.colors.white};
    }
`

const IssueTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    line-height: 1;

    p {
        padding: 0;
        margin: 0;
        font-size: ${({ theme }) => theme.fontSize5};
        font-weight: bold;
        line-height: 1.5;
    }
`

const IssueInfoWrapper = styled.div`
    color: ${({ theme }) => theme.colors.grey};
    margin: ${({ theme }) => `${theme.unit1} ${theme.unit4}`};
    font-size: ${({ theme }) => theme.fontSize3};
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    :hover {
        color: ${({ theme }) => theme.colors.royalBlue};
    }
`

type IssueListProps = {
    issues: SearchResult
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
                                        <p data-testid="issue-title">
                                            {node.title}
                                        </p>
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
