import { gql } from '@apollo/client'

export const GET_ISSUE = gql`
    query getIssue($id: Int!) {
        repository(owner: "facebook", name: "react") {
            issue(number: $id) {
                title
                bodyHTML
                state
                number
                createdAt
                closedAt
                author {
                    login
                }
                comments(first: 100) {
                    pageInfo {
                        hasNextPage
                    }
                    totalCount
                    edges {
                        node {
                            author {
                                login
                            }
                            createdAt
                            databaseId
                            bodyHTML
                        }
                    }
                }
            }
        }
    }
`

export const GET_ISSUES = gql`
    query getIssues($query: String!, $endCursor: String, $perPage: Int) {
        search(first: $perPage, query: $query, type: ISSUE, after: $endCursor) {
            issueCount
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                node {
                    ... on Issue {
                        id
                        title
                        state
                        number
                        createdAt
                        closedAt
                        author {
                            login
                        }
                        comments {
                            totalCount
                        }
                    }
                }
            }
        }
    }
`
