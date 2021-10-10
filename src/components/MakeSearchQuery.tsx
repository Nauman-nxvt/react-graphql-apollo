import styled, {css} from 'styled-components'
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ReactComponent as IconSearch} from '../icons/IconSearch.svg'
import {ReactComponent as IconCheck} from "../icons/IconCheck.svg"
import {ReactComponent as IconDot} from "../icons/IconDot.svg"

const SearchBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-self: flex-end stretch;
  width: 90%;
  justify-self: center;
`

const SearchBox = styled.div`
  display: flex;
  place-self: flex-end stretch;
  width: 100%;
  justify-self: center;
  
  input[type='text'] {
    width: 100%;
    background-color: rgb(246, 248, 250);
    border-radius: 6px;
    padding: 5px 12px 5px 30px;
    font-size: 14px;
    line-height: 20px;
  }
`
const IssuesListHeader = styled.div`
  padding: 16px;
  margin: 20px 0 0 0;
  background-color: rgb(246, 248, 250);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-width: 0
`

const IssueStateButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 60px;
  padding: 0;
  margin: 0 5px;
  background: transparent;
  border: 0;
  color: ${({isSelected}) => isSelected ? 'black' : '#57606a'};
  svg{
    fill: ${({isSelected}) => isSelected ? 'black' : '#57606a'};
  }
`
const IconStyle = css`
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 5px;
`

const SearchIcon = styled(IconSearch)`
  width: 1.5rem;
  height: 1.5rem;
  margin: 3px 5px 0 5px;
  position: absolute;
  top: 25px;
`

const Check = styled(IconCheck)`
  ${IconStyle}
  stroke-width: 1;
  stroke: currentColor;
`
const Dot = styled(IconDot)`
  ${IconStyle}
`

type MakeSearchQueryProps = {
    setQuery: Dispatch<SetStateAction<string>>
}

const ISSUES_STATES = {
    open: 'open',
    closed: 'closed',
    all: 'all'
}

const MakeSearchQuery = ({setQuery}: MakeSearchQueryProps) => {
    const [searchText, setSearchText] = useState('')
    const [issuesState, setIssuesState] = useState(ISSUES_STATES.all)

    const prepareQuery = () => {
        setQuery(`repo:facebook/react is:issue ${searchText} in:title,body ${issuesState !== ISSUES_STATES.all ? `is:${issuesState}` : ''}`)
    }

    useEffect(() => {
        prepareQuery()
    },[issuesState])

    const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            prepareQuery()
        }
    }

    return(
        <SearchBoxWrapper>
            <SearchBox>
                <SearchIcon/>
                <input type={'text'} value={searchText} onKeyPress={(e) => submitOnEnter(e)} onChange={e => setSearchText(e.target.value)}/>
            </SearchBox>
            <IssuesListHeader>
                <IssueStateButton isSelected={issuesState === ISSUES_STATES.open} onClick={()=>setIssuesState(ISSUES_STATES.open)}>
                    <Dot/> <span>Open</span>
                </IssueStateButton>
                <IssueStateButton isSelected={issuesState === ISSUES_STATES.closed} onClick={()=>setIssuesState(ISSUES_STATES.closed)}>
                    <Check/> <span>Closed</span>
                </IssueStateButton>
            </IssuesListHeader>
        </SearchBoxWrapper>
    )
}

export default MakeSearchQuery