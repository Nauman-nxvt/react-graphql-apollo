import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_GITHUB_TOKEN
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
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
    }),
    connectToDevTools: true,
})
ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
