import * as Apollo from '@apollo/client'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { Route, RouteComponentProps, Router } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import * as React from 'react'
import { StaticContext } from 'react-router'
import {
    GetIssueQuery,
    GetIssueQueryVariables,
    GetIssuesQuery,
    GetIssuesQueryVariables,
} from '../generated/graphql'
import { DocumentNode, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { theme } from '../style/theme'

const memoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                search: {
                    keyArgs: ['query'],
                    merge(existing, incoming) {
                        if (existing) {
                            if (
                                existing &&
                                existing.cursors.includes(
                                    incoming.pageInfo.endCursor
                                )
                            ) {
                                return existing
                            }

                            const combined = {
                                ...incoming,
                                cursors: [
                                    ...existing.cursors,
                                    incoming.pageInfo.endCursor,
                                ],
                            }
                            combined.edges = [
                                ...existing.edges,
                                ...incoming.edges,
                            ]
                            return combined
                        }
                        return {
                            ...incoming,
                            cursors: [incoming.pageInfo.endCursor],
                        }
                    },
                },
            },
        },
        Repository: {
            fields: {
                issue: {
                    keyArgs: ['number'],
                },
            },
        },
    },
})

export type ApolloMockType = {
    request: {
        query: DocumentNode
        variables: GetIssueQueryVariables | GetIssuesQueryVariables
    }
    result:
        | Partial<Apollo.QueryResult<GetIssueQuery, GetIssueQueryVariables>>
        | Partial<Apollo.QueryResult<GetIssuesQuery, GetIssuesQueryVariables>>
}[]

export function renderWithProviders(
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
    apolloMock?: ApolloMockType
) {
    return {
        ...render(
            <Router history={history}>
                <MockedProvider
                    mocks={apolloMock}
                    addTypename={true}
                    cache={memoryCache}
                >
                    <ThemeProvider theme={theme}>
                        <Route path={path} component={ui} />
                    </ThemeProvider>
                </MockedProvider>
            </Router>
        ),
    }
}
