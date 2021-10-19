import { GET_ISSUES } from '../queries/getReactIssues'
import { IssueState } from '../../generated/graphql'

export const mockGetIssuesResponse = {
    request: {
        query: GET_ISSUES,
        variables: {
            endCursor: undefined,
            perPage: 10,
            query: 'repo:facebook/react is:issue in:title,body',
        },
    },
    result: {
        data: {
            search: {
                issueCount: 10803,
                pageInfo: {
                    endCursor: 'Y3Vyc29yOjEw',
                    hasNextPage: true,
                },
                edges: [
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49TL_V',
                            title: 'Bug: ',
                            state: IssueState.Closed,
                            number: 22576,
                            createdAt: '2021-10-17T21:17:15Z',
                            closedAt: '2021-10-17T21:17:24Z',
                            author: {
                                login: 'Tex777tex',
                            },
                            comments: {
                                totalCount: 0,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49QpFx',
                            title: '[DevTools Bug]: Firefox and Edge show error in console about unrecognized installation on v4.20.0',
                            state: IssueState.Closed,
                            number: 22572,
                            createdAt: '2021-10-15T20:09:41Z',
                            closedAt: '2021-10-15T21:18:20Z',
                            author: {
                                login: 'jstejada',
                            },
                            comments: {
                                totalCount: 0,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49Qg4P',
                            title: '[DevTools Bug] Cannot add node "1" because a node with that id is already in the Store.',
                            state: IssueState.Open,
                            number: 22570,
                            createdAt: '2021-10-15T19:16:38Z',
                            closedAt: null,
                            author: {
                                login: 'samkhatri',
                            },
                            comments: {
                                totalCount: 1,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49N4CK',
                            title: " Attempted import error: 'useLocation' is not exported from 'react-router-dom'.",
                            state: IssueState.Closed,
                            number: 22565,
                            createdAt: '2021-10-15T03:43:14Z',
                            closedAt: '2021-10-15T07:12:56Z',
                            author: {
                                login: 'sytpb',
                            },
                            comments: {
                                totalCount: 2,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49NUzB',
                            title: 'Bug: shows duplicate the last elements of an array stored with useRef',
                            state: IssueState.Closed,
                            number: 22564,
                            createdAt: '2021-10-14T23:13:04Z',
                            closedAt: '2021-10-15T15:40:01Z',
                            author: {
                                login: 'stvkoch',
                            },
                            comments: {
                                totalCount: 3,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49LmTI',
                            title: 'Standalone Devtools splash page unresponsive after client disconnects ',
                            state: IssueState.Closed,
                            number: 22558,
                            createdAt: '2021-10-14T14:11:25Z',
                            closedAt: '2021-10-15T16:54:24Z',
                            author: {
                                login: 'gabrieltrompiz',
                            },
                            comments: {
                                totalCount: 4,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49JxSp',
                            title: 'Bug: SSL/TLS support not available',
                            state: IssueState.Closed,
                            number: 22556,
                            createdAt: '2021-10-14T05:35:47Z',
                            closedAt: '2021-10-14T08:50:56Z',
                            author: {
                                login: 'jackvik',
                            },
                            comments: {
                                totalCount: 1,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49IXEd',
                            title: 'Handle duplicate extensions in Firefox and Edge',
                            state: IssueState.Open,
                            number: 22552,
                            createdAt: '2021-10-13T19:08:19Z',
                            closedAt: null,
                            author: {
                                login: 'jstejada',
                            },
                            comments: {
                                totalCount: 0,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49GAZI',
                            title: "Bug: Method from React Context can't read its own state.",
                            state: IssueState.Closed,
                            number: 22549,
                            createdAt: '2021-10-13T09:05:40Z',
                            closedAt: '2021-10-14T13:26:09Z',
                            author: {
                                login: 'eakl',
                            },
                            comments: {
                                totalCount: 2,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks49DPBt',
                            title: 'Bug: Rules with suggestions must set the `meta.hasSuggestions` property to `true`',
                            state: IssueState.Open,
                            number: 22545,
                            createdAt: '2021-10-12T19:51:32Z',
                            closedAt: null,
                            author: {
                                login: 'pkelly-rh',
                            },
                            comments: {
                                totalCount: 3,
                            },
                            __typename: 'Issue',
                        },
                    },
                ],
            },
        },
    },
}

export const mockGetMoreIssuesResponse = {
    request: {
        query: GET_ISSUES,
        variables: {
            endCursor: 'Y3Vyc29yOjEw',
            perPage: 10,
            query: 'repo:facebook/react is:issue in:title,body',
        },
    },
    result: {
        data: {
            search: {
                issueCount: 10804,
                pageInfo: {
                    endCursor: 'Y3Vyc29yOjIw',
                    hasNextPage: true,
                },
                edges: [
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks48_qW1',
                            title: 'An error occured  while importing modules',
                            state: IssueState.Closed,
                            number: 22541,
                            createdAt: '2021-10-12T03:35:24Z',
                            closedAt: '2021-10-12T07:05:11Z',
                            author: {
                                login: 'NaveenkumarMD',
                            },
                            comments: {
                                totalCount: 1,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks48-8hW',
                            title: 'Custom React-specific metadata format',
                            state: IssueState.Open,
                            number: 22540,
                            createdAt: '2021-10-11T21:33:40Z',
                            closedAt: null,
                            author: {
                                login: 'bvaughn',
                            },
                            comments: {
                                totalCount: 3,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks489W2z',
                            title: 'Allow custom hooks to return stable results',
                            state: IssueState.Open,
                            number: 22539,
                            createdAt: '2021-10-11T13:35:54Z',
                            closedAt: null,
                            author: {
                                login: 'FezVrasta',
                            },
                            comments: {
                                totalCount: 0,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks4863Ag',
                            title: "Bug: Typescript definitions don't let me define function types that may return Destructors",
                            state: IssueState.Closed,
                            number: 22536,
                            createdAt: '2021-10-10T18:51:14Z',
                            closedAt: '2021-10-10T23:21:17Z',
                            author: {
                                login: 'DavidIAm',
                            },
                            comments: {
                                totalCount: 2,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks486qGh',
                            title: 'React 18 - `useState` invisible for end users',
                            state: IssueState.Open,
                            number: 22535,
                            createdAt: '2021-10-10T15:09:20Z',
                            closedAt: null,
                            author: {
                                login: 'pedro-gilmora',
                            },
                            comments: {
                                totalCount: 0,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks48585l',
                            title: 'React 18 ',
                            state: IssueState.Closed,
                            number: 22534,
                            createdAt: '2021-10-09T22:41:01Z',
                            closedAt: '2021-10-10T08:56:36Z',
                            author: {
                                login: 'Israelromero197',
                            },
                            comments: {
                                totalCount: 0,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks4856QI',
                            title: '`eslint-plugin-react-hooks`: eslint v8 support',
                            state: IssueState.Closed,
                            number: 22533,
                            createdAt: '2021-10-09T21:44:28Z',
                            closedAt: '2021-10-10T15:23:31Z',
                            author: {
                                login: 'ljharb',
                            },
                            comments: {
                                totalCount: 2,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks4838z3',
                            title: 'Improve "native" component stacks host component frames',
                            state: IssueState.Open,
                            number: 22531,
                            createdAt: '2021-10-08T16:55:59Z',
                            closedAt: null,
                            author: {
                                login: 'bvaughn',
                            },
                            comments: {
                                totalCount: 0,
                            },
                            __typename: 'Issue',
                        },
                    },
                    {
                        node: {
                            id: 'I_kwDOAJy2Ks4835xC',
                            title: "Bug: dom.br can't accept empty Fragments as children",
                            state: IssueState.Open,
                            number: 22530,
                            createdAt: '2021-10-08T16:40:28Z',
                            closedAt: null,
                            author: {
                                login: 'markboyall',
                            },
                            comments: {
                                totalCount: 0,
                            },
                            __typename: 'Issue',
                        },
                    },
                ],
            },
        },
    },
}
