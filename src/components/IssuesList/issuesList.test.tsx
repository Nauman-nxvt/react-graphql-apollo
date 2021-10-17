import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import IssuesList from './IssuesList'
import { BrowserRouter } from 'react-router-dom'
import { mockIssuesArray } from '../../graphql/mockResponses/mockIssuesArray'

describe('<IssuesList/>', () => {
    it('renders IssuesList component', () => {
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
})
