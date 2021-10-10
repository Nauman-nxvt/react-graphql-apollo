import {gql} from '@apollo/client'

export const GET_ISSUES = gql`
    query getIssues($query: String!) {
        search(
            first:10,
            query: $query,
            type:ISSUE
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