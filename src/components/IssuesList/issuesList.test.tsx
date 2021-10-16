import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import IssuesList from './IssuesList'
import { BrowserRouter } from 'react-router-dom'

const mockIssues = [
    {
        __typename: 'SearchResultItemEdge',
        node: {
            __typename: 'Issue',
            id: 'I_kwDOAJy2Ks49QpFx',
            title: '[DevTools Bug]: Firefox and Edge show error in console about unrecognized installation on v4.20.0',
            state: 'CLOSED',
            number: 22572,
            createdAt: '2021-10-15T20:09:41Z',
            closedAt: '2021-10-15T21:18:20Z',
            author: {
                __typename: 'User',
                login: 'jstejada',
            },
            comments: {
                __typename: 'IssueCommentConnection',
                totalCount: 0,
            },
        },
    },
    {
        __typename: 'SearchResultItemEdge',
        node: {
            __typename: 'Issue',
            id: 'I_kwDOAJy2Ks49Qg4P',
            title: '[DevTools Bug] Cannot add node "1" because a node with that id is already in the Store.',
            state: 'OPEN',
            number: 22570,
            createdAt: '2021-10-15T19:16:38Z',
            closedAt: null,
            author: {
                __typename: 'User',
                login: 'samkhatri',
            },
            comments: {
                __typename: 'IssueCommentConnection',
                totalCount: 1,
            },
        },
    },
]

describe('<IssuesList/>', () => {
    it('renders IssuesList component', () => {
        render(
            <BrowserRouter>
                <IssuesList issues={mockIssues} />
            </BrowserRouter>
        )
        expect(screen.getByText(mockIssues[0].node.title)).toBeInTheDocument()
    })
})
