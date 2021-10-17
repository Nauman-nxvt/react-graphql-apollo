import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import IssuePage from './IssuePage'
import { renderWithRouter } from '../../helpers/testing-helpers'
import { act } from 'react-dom/test-utils'
import { mockIssue17846 } from '../../graphql/mockResponses/mockGetIssueResponse'

describe('<IssuePage/>', () => {
    it('gets :id param from url and show loading status after calling getIssueQuery', () => {
        renderWithRouter(IssuePage, {
            route: '/issue/17846',
            path: '/issue/:id',
        })
        expect(screen.getByText('Loading..')).toBeInTheDocument()
    })

    it('gets :id param from url and show loading status after calling getIssueQuery', async () => {
        renderWithRouter(
            IssuePage,
            {
                route: '/issue/17846',
                path: '/issue/:id',
            },
            [mockIssue17846]
        )
        await act(
            async () =>
                await new Promise((resolve) => setTimeout(resolve, 1000))
        )

        expect(
            screen.getByText(mockIssue17846.result.data.repository.issue.title)
        ).toBeInTheDocument()
        const firstComment =
            mockIssue17846.result.data.repository.issue.comments.edges[0].node.bodyHTML
                .replace('<p>', '')
                .replace('</p>', '')
        expect(screen.getByText(firstComment)).toBeInTheDocument()
    })
})
