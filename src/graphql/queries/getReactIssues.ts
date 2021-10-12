import { gql } from '@apollo/client'

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
