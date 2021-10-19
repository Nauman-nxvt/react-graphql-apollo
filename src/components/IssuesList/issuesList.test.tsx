import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import IssuesList from './IssuesList'
import { BrowserRouter, Router } from 'react-router-dom'
import { mockIssuesArray } from '../../graphql/mockResponses/mockIssuesArray'
import { createMemoryHistory } from 'history'

describe('<IssuesList/>', () => {
    it('renders all Issues which are passed to it', () => {
        render(
            <BrowserRouter>
                <IssuesList issues={mockIssuesArray} />
            </BrowserRouter>
        )
        const issueTitles = screen
            .getAllByTestId('issue-title')
            .map((p) => p.textContent)
        const mockIssuesTitles = mockIssuesArray.map(
            (issue) => issue.node.title
        )
        expect(issueTitles).toEqual(mockIssuesTitles)
    })

    it('redirects to issue/:id when issue link is clicked', () => {
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <IssuesList issues={mockIssuesArray} />
            </Router>
        )
        const firstIssue = mockIssuesArray[0].node
        const firstIssueHref = `/issue/${firstIssue.number}`
        const issueLink = screen.getByText(firstIssue.title)

        fireEvent.click(issueLink)
        expect(history.location.pathname).toBe(firstIssueHref)
    })
})
