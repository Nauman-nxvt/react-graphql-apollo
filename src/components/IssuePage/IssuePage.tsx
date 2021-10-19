import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetIssueQuery } from '../../generated/graphql'
import styled from 'styled-components'
import ContentWrapper from '../atoms/ContentWrapper'
import TextBox from '../TextBox'
import Message from '../atoms/Message'
import { BasicButton } from '../atoms/Buttons'
import { convertDateToTimeAgo } from '../../helpers/date-helpers'
import IconDot from '../../icons/IconDot'
import IconCheckRound from '../../icons/IconCheckRound'
import BaseIconStyle from '../atoms/BaseIconStyle'

const IssueWrapper = styled(ContentWrapper)`
    margin-top: ${({ theme }) => theme.unit2};
    padding-top: 0;
`

const Issue = styled.div`
    display: flex;
    flex-direction: column;
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
    span {
        color: ${({ theme }) => theme.colors.grey};
    }
`

const IssueInfoWrapper = styled.div`
    color: ${({ theme }) => theme.colors.grey};
    margin: ${({ theme }) => `${theme.unit1} ${theme.unit2} ${theme.unit2} 0`};
    span:first-of-type {
        font-weight: bold;
    }
`

const Separator = styled.div`
    width: 100%;
    margin-top: ${({ theme }) => theme.unit2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.paleWhite};
`

type IssueParams = {
    id: string
}

const RoundBtn = styled(BasicButton)`
    width: auto;
    padding: ${({ theme }) => `${theme.unit1} ${theme.unit3}`};
    font-size: ${({ theme }) => theme.fontSize4};
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
    border-radius: 2rem;
    margin-right: ${({ theme }) => theme.unit1};
`
const ButtonOpenIssue = styled(RoundBtn)`
    background: ${({ theme }) => theme.colors.green};
`
const ButtonClosedIssue = styled(RoundBtn)`
    background: ${({ theme }) => theme.colors.red};
`

const WhiteCheck = styled(IconCheckRound)`
    ${BaseIconStyle};
    fill: ${({ theme }) => theme.colors.white};
`

const WhiteDot = styled(IconDot)`
    ${BaseIconStyle};
    fill: ${({ theme }) => theme.colors.white};
`

const InfoWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 0;
    span {
        margin-left: ${({ theme }) => theme.unit1};
    }
`

const IssueInfo = ({
    createdAt,
    closedAt,
    login,
}: {
    createdAt: string
    closedAt: string | null
    login: string | undefined
}): JSX.Element => {
    return (
        <InfoWrapper>
            {closedAt ? (
                <ButtonClosedIssue>
                    <WhiteCheck /> Closed
                </ButtonClosedIssue>
            ) : (
                <ButtonOpenIssue>
                    <WhiteDot /> Open
                </ButtonOpenIssue>
            )}

            <span>{login}</span>
            {createdAt && (
                <span>{`opened this issue ${convertDateToTimeAgo(
                    new Date(createdAt)
                )}`}</span>
            )}
        </InfoWrapper>
    )
}

function IssuePage(): JSX.Element {
    const { id } = useParams<IssueParams>()
    if (!id) return <Message>ID not found</Message>
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
                    <h1>
                        {issue.title} <span>#{issue.number}</span>
                    </h1>
                </IssueTitle>
                <IssueInfoWrapper>
                    <IssueInfo
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
