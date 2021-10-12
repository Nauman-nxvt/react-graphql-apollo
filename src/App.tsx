import React, { ReactElement, useEffect, useState } from 'react'
import MakeSearchQuery from './components/MakeSearchQuery'
import styled from 'styled-components'
import { useGetIssuesLazyQuery } from './generated/graphql'
import IssuesList from './components/IssuesList'
import { BasicButton } from './components/atoms/Buttons'
import { ISSUES_PER_PAGE } from './constants'

const Container = styled.div`
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: 100%;
    padding-top: 20px;
`

const LoadMoreButton = styled(BasicButton)`
    justify-self: center;
`

function App(): ReactElement {
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const [loadIssues, { data, fetchMore }] = useGetIssuesLazyQuery({
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
    }, [query])

    return (
        <Container>
            <MakeSearchQuery setQuery={setQuery} makeSearch={loadIssues} />
            <IssuesList issues={issues} />
            {showLoadMoreButton() && (
                <LoadMoreButton onClick={loadMoreIssues}>
                    Load More Issues
                </LoadMoreButton>
            )}
        </Container>
    )
}

export default App
