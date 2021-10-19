import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import IssuesList from './IssuesList'
import { Router } from 'react-router-dom'
import { mockIssuesArray } from '../../graphql/mockResponses/mockIssuesArray'
import { createMemoryHistory } from 'history'
import { theme } from '../../style/theme'
import { ThemeProvider } from 'styled-components'

describe('<IssuesList/>', () => {
    const renderWithProviders = () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <ThemeProvider theme={theme}>
                    <IssuesList issues={mockIssuesArray} />
                </ThemeProvider>
            </Router>
        )
        return history
    }
    it('renders all Issues which are passed to it', () => {
        renderWithProviders()
        const issueTitles = screen
            .getAllByTestId('issue-title')
            .map((p) => p.textContent)
        const mockIssuesTitles = mockIssuesArray.map(
            (issue) => issue.node.title
        )
        expect(issueTitles).toEqual(mockIssuesTitles)
    })

    it('redirects to issue/:id when issue link is clicked', () => {
        const history = renderWithProviders()
        const firstIssue = mockIssuesArray[0].node
        const firstIssueHref = `/issue/${firstIssue.number}`
        const issueLink = screen.getByText(firstIssue.title)

        fireEvent.click(issueLink)
        expect(history.location.pathname).toBe(firstIssueHref)
    })
})
