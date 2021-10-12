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
                                const combined = { ...incoming }
                                combined.edges = [
                                    ...existing.edges,
                                    ...incoming.edges,
                                ]
                                return combined
                            }
                            return incoming
                        },
                    },
                },
            },
        },
    }),
})
ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
