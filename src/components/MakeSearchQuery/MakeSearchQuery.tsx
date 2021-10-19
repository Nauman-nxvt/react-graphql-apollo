import styled, { css } from 'styled-components'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import IconSearch from '../../icons/IconSearch'
import IconCheck from '../../icons/IconCheck'
import IconDot from '../../icons/IconDot'
import IconCross from '../../icons/IconCross'
import { IconButton } from '../atoms/Buttons'
import ContentWrapper from '../atoms/ContentWrapper'
import { DEFAULT_SEARCH_QUERY, SEARCH_FIELD_PLACEHOLDER } from '../../constants'

const SearchBoxWrapper = styled(ContentWrapper)`
    margin-top: 20px;
`

const SearchBox = styled.div`
    display: flex;
    place-self: flex-end stretch;
    width: 100%;
    justify-self: center;

    input[type='text'] {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.lightGrey};
        border-radius: 6px;
        padding: 5px 12px 5px 30px;
        font-size: 0.9rem;
        line-height: 20px;
        border: 1px solid ${({ theme }) => theme.colors.paleWhite};
    }
`
const SearchButtonsContainer = styled.div`
    padding: 16px;
    margin: 20px 0 0 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    min-width: 0;
    border: 1px solid ${({ theme }) => theme.colors.paleWhite};
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
`

const IssueStateButton = styled(IconButton)<{ isSelected: boolean }>`
    width: 70px;
    color: ${({ isSelected, theme }) =>
        isSelected ? 'black' : theme.colors.grey};
    svg {
        fill: ${({ isSelected, theme }) =>
            isSelected ? 'black' : theme.colors.grey};
    }
`

const ClearSearchButton = styled(IconButton)`
    align-items: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkGrey};
    & svg {
        fill: ${({ theme }) => theme.colors.darkGrey};
    }

    :hover {
        color: ${({ theme }) => theme.colors.royalBlue};
        & svg {
            fill: ${({ theme }) => theme.colors.royalBlue};
        }
    }
`
const IconStyle = css`
    width: 1rem;
    height: 1rem;
    margin-right: 5px;
`
const CrossIcon = styled(IconCross)`
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 5px;
`

const SearchIcon = styled(IconSearch)`
    width: 1.5rem;
    height: 1.5rem;
    margin: 3px 5px 0 5px;
    position: absolute;
    fill: ${({ theme }) => theme.colors.grey};
    stroke-width: 2px;
    stroke: ${({ theme }) => theme.colors.grey};
    top: 115px;
`

const Check = styled(IconCheck)`
    ${IconStyle};
    stroke-width: 1;
    stroke: currentColor;
`
const Dot = styled(IconDot)`
    ${IconStyle}
`

const ClearSearch = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
`

type MakeSearchQueryProps = {
    setQuery: Dispatch<SetStateAction<string>>
}

const ISSUES_STATES = {
    open: 'open',
    closed: 'closed',
    all: 'all',
}

const MakeSearchQuery = ({ setQuery }: MakeSearchQueryProps): JSX.Element => {
    const [searchText, setSearchText] = useState('')
    const [issuesState, setIssuesState] = useState(ISSUES_STATES.all)
    const [callDelayedPrepareQuery, setCallDelayedPrepareQuery] =
        useState(false)

    const prepareQuery = () => {
        let query = DEFAULT_SEARCH_QUERY
        if (searchText !== '') query += ` ${searchText}`
        if (issuesState !== ISSUES_STATES.all) query += ` is:${issuesState}`
        setQuery(query)
        callDelayedPrepareQuery && setCallDelayedPrepareQuery(false)
    }

    const clearSearch = () => {
        setSearchText('')
        setIssuesState(ISSUES_STATES.all)
        setCallDelayedPrepareQuery(true)
    }

    useEffect(() => {
        prepareQuery()
    }, [issuesState])
    useEffect(() => {
        if (callDelayedPrepareQuery) {
            prepareQuery()
        }
    }, [callDelayedPrepareQuery])

    const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            prepareQuery()
        }
    }

    return (
        <SearchBoxWrapper>
            <SearchBox>
                <SearchIcon />
                <input
                    type={'text'}
                    value={searchText}
                    placeholder={SEARCH_FIELD_PLACEHOLDER}
                    onKeyPress={(e) => submitOnEnter(e)}
                    onChange={(e) =>
                        setSearchText(e.target.value.replaceAll(':', ''))
                    }
                />
            </SearchBox>
            {(issuesState !== ISSUES_STATES.all || searchText !== '') && (
                <ClearSearch>
                    <ClearSearchButton onClick={clearSearch}>
                        <CrossIcon />{' '}
                        <span>
                            Clear current search query, filters, and sorts
                        </span>
                    </ClearSearchButton>
                </ClearSearch>
            )}
            <SearchButtonsContainer>
                <IssueStateButton
                    isSelected={issuesState === ISSUES_STATES.open}
                    onClick={() => setIssuesState(ISSUES_STATES.open)}
                >
                    <Dot /> <span>Open</span>
                </IssueStateButton>
                <IssueStateButton
                    isSelected={issuesState === ISSUES_STATES.closed}
                    onClick={() => setIssuesState(ISSUES_STATES.closed)}
                >
                    <Check /> <span>Closed</span>
                </IssueStateButton>
            </SearchButtonsContainer>
        </SearchBoxWrapper>
    )
}

export default MakeSearchQuery
