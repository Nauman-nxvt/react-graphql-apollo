import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import SearchPage from './SearchPage'
import {
    ApolloMockType,
    renderWithProviders,
} from '../../helpers/testing-helpers'
import { act } from '@testing-library/react'
import {
    mockGetIssuesResponse,
    mockGetMoreIssuesResponse,
} from '../../graphql/mockResponses/mockGetIssuesResponse'
import { SEARCH_FIELD_PLACEHOLDER } from '../../constants'

const renderComponent = (mock?: ApolloMockType) => {
    return renderWithProviders(
        SearchPage,
        {
            route: '/',
            path: '/',
        },
        mock
    )
}

describe('<SearchPage/>', () => {
    it('renders child components and shows loading state after calling getIssuesQuery', async () => {
        await waitFor(() => renderComponent([mockGetIssuesResponse]))
        expect(
            screen.getByPlaceholderText(SEARCH_FIELD_PLACEHOLDER)
        ).toBeInTheDocument()
        expect(screen.getByText('Fetching Results..')).toBeInTheDocument()
        expect(
            screen.queryByRole('button', { name: 'Load More Issues' })
        ).toBeNull()
    })

    it('loads data from getIssuesQuery and displays the data in IssuesList', async () => {
        await waitFor(() => renderComponent([mockGetIssuesResponse]))
        await act(
            async () =>
                await new Promise((resolve) => setTimeout(resolve, 1000))
        )

        const issueTitles = screen.getAllByTestId('issue-title').length
        const issuesInMockResponse =
            mockGetIssuesResponse.result.data.search.edges.length

        expect(issueTitles).toEqual(issuesInMockResponse)

        expect(
            screen.getByText(
                mockGetIssuesResponse.result.data.search.edges[1].node.title
            )
        ).toBeInTheDocument()
    })

    it('loads more results when LoadMoreResults button is clicked', async () => {
        await waitFor(() =>
            renderComponent([mockGetIssuesResponse, mockGetMoreIssuesResponse])
        )
        await act(
            async () =>
                await new Promise((resolve) => setTimeout(resolve, 1000))
        )

        const loadMoreIssuesBtn = screen.getByRole('button', {
            name: 'Load More Issues',
        })

        fireEvent.click(loadMoreIssuesBtn)

        await act(
            async () =>
                await new Promise((resolve) => setTimeout(resolve, 1000))
        )

        const issueTitles = screen.getAllByTestId('issue-title').length

        const issuesInMockResponse =
            mockGetIssuesResponse.result.data.search.edges.length

        const issuesInMockGetMoreIssuesResponse =
            mockGetMoreIssuesResponse.result.data.search.edges.length

        expect(issueTitles).toEqual(
            issuesInMockResponse + issuesInMockGetMoreIssuesResponse
        )

        expect(
            screen.getByText(
                mockGetIssuesResponse.result.data.search.edges[1].node.title
            )
        ).toBeInTheDocument()
        expect(
            screen.getByText(
                mockGetMoreIssuesResponse.result.data.search.edges[1].node.title
            )
        ).toBeInTheDocument()
    })
})
