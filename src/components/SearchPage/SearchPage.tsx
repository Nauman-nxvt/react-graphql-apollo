import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MakeSearchQuery from '../MakeSearchQuery/MakeSearchQuery'
import IssuesList from '../IssuesList/IssuesList'
import { BasicButton } from '../atoms/Buttons'
import { useGetIssuesLazyQuery } from '../../generated/graphql'
import { ISSUES_PER_PAGE } from '../../constants'
import Message from '../atoms/Message'
import Skeleton from 'react-loading-skeleton'

const SearchWrapper = styled.div`
    width: 95%;
    max-width: 1216px;
    margin: auto;
`
const LoadMoreButton = styled(BasicButton)`
    margin: auto;
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
        const currentlyVisibleIssues = page * ISSUES_PER_PAGE
        if (edges && currentlyVisibleIssues < edges.length) {
            return setPage(page + 1)
        }
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
        <SearchWrapper>
            <MakeSearchQuery setQuery={setQuery} />
            {called && loading && <Skeleton count={8} height={90} />}
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
        </SearchWrapper>
    )
}

export default SearchPage
