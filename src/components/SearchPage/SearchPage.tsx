import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MakeSearchQuery from '../MakeSearchQuery/MakeSearchQuery'
import IssuesList from '../IssuesList/IssuesList'
import { BasicButton } from '../atoms/Buttons'
import { useGetIssuesLazyQuery } from '../../generated/graphql'
import { ISSUES_PER_PAGE } from '../../constants'
import Message from '../atoms/Message'

const LoadMoreButton = styled(BasicButton)`
    justify-self: center;
`

function SearchPage(): JSX.Element {
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const [loadIssues, { data, called, loading, fetchMore }] =
        useGetIssuesLazyQuery({
            variables: {
                query,
                perPage: ISSUES_PER_PAGE,
            },
        })

    const loadMoreIssues = () => {
        typeof fetchMore !== 'undefined' &&
            fetchMore({
                variables: {
                    endCursor: data?.search?.pageInfo?.endCursor,
                    query,
                },
            }).then(() => setPage(page + 1))
    }
    const pageInfo = data?.search?.pageInfo
    const edges = data?.search?.edges
    const issues = edges && edges.slice(0, page * ISSUES_PER_PAGE)

    const showLoadMoreButton = () => {
        if (!issues || !edges || !pageInfo) return false
        if (issues?.length < edges?.length) {
            return true
        }
        return issues?.length === edges?.length && pageInfo.hasNextPage
    }

    useEffect(() => {
        setPage(1)
        loadIssues()
    }, [query])

    return (
        <>
            <MakeSearchQuery setQuery={setQuery} />
            {called && loading && <Message>Fetching Results..</Message>}
            {edges?.length === 0 ? (
                <Message>No matching issues found</Message>
            ) : (
                <IssuesList issues={issues} />
            )}
            {showLoadMoreButton() && (
                <LoadMoreButton onClick={loadMoreIssues}>
                    Load More Issues
                </LoadMoreButton>
            )}
        </>
    )
}

export default SearchPage
