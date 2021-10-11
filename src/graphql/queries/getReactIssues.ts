import {gql} from '@apollo/client'

export const GET_ISSUES = gql`
    query getIssues($query: String!, $endCursor: String) {
        search(
            first:10,
            query: $query,
            type:ISSUE,
            after: $endCursor
        ) {
            issueCount
            pageInfo {endCursor}
            edges {
                node {
                    ... on Issue {
                        id,
                        title,
                        state,
                        number,
                        createdAt,
                        closedAt,
                        author{login},
                        comments {totalCount}
                    }
                }
            }
        }
    }
`