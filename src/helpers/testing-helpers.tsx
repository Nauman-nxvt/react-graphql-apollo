import * as Apollo from '@apollo/client'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { Route, RouteComponentProps, Router } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import * as React from 'react'
import { StaticContext } from 'react-router'
import { GetIssueQuery, GetIssueQueryVariables } from '../generated/graphql'
import { DocumentNode } from '@apollo/client'

export function renderWithRouter(
    ui:
        | React.ComponentType<any>
        | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>
        | undefined,
    {
        path = '/',
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
    }: {
        path: string | undefined
        route: string | undefined
        history?: MemoryHistory<unknown>
    },
    apolloMock?: {
        request: { query: DocumentNode; variables: GetIssueQueryVariables }
        result: Partial<
            Apollo.QueryResult<GetIssueQuery, GetIssueQueryVariables>
        >
    }[]
) {
    return {
        ...render(
            <Router history={history}>
                <MockedProvider mocks={apolloMock} addTypename={false}>
                    <Route path={path} component={ui} />
                </MockedProvider>
            </Router>
        ),
    }
}
