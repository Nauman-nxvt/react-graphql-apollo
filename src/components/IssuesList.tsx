import {GetIssuesQuery} from "../generated/graphql";
import {ReactComponent as IconCheck} from "../icons/IconCheck.svg"
import {ReactComponent as IconDot} from "../icons/IconDot.svg"
import styled, {css} from "styled-components";
import {convertDateToTimeAgo} from "../helpers/date-helpers";

const IssuesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  place-self: flex-end stretch;
  width: 90%;
  justify-self: center;
  margin-top: 0;
  padding-top: 0;
`

const IconStyle = css`
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 5px;
`

const Check = styled(IconCheck)`
  ${IconStyle}
  stroke-width: 1;
  stroke: currentColor;
`
const RedCheck = styled(Check)`
  fill: darkred;
`

const Dot = styled(IconDot)`
  ${IconStyle}
`
const GreenDot = styled(Dot)`
 fill: green; 
`

const IssueList = styled.ul`
  list-style: none;
  border: 1px solid #d0d7de;
  padding: 0;
  margin-top: 0;
`

const IssueListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #d0d7de;
  :hover {
    background-color: #eaeef2;
  }
`

const IssueTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: .9em;
  line-height: 1;
  
  p {
    padding: 0;
    margin: 0;
    font-weight: bold;
    line-height: 1.5;
  }
`

const IssueInfo = styled.div`
  color: #57606a;
  margin: 4px 20px;
  font-size: 0.7rem;
  
`

type IssueListProps = {
    issues: GetIssuesQuery | undefined
}

const authoredInfo = (createdAt: string, closedAt: string|null, author: string|undefined): string => {
    if(!author) return ''
    if (closedAt !== null) {
        return ` by ${author} was closed ${convertDateToTimeAgo(new Date(closedAt))}`
    }
    return  ` opened ${convertDateToTimeAgo(new Date(createdAt))} by ${author}`
}

const IssuesList = ({issues}: IssueListProps) => {
    return(
        <IssuesListContainer>
            <IssueList>
                {issues && issues.search && issues.search.edges && issues.search.edges.map((edge) => {
                    return edge && edge.node && edge.node.__typename === 'Issue' ?
                         (<IssueListItem key={edge.node.id}>
                                <IssueTitle>
                                    {edge.node.state === 'OPEN' ? <GreenDot/> : <RedCheck/>}
                                    <p>{edge.node.title}</p>
                                </IssueTitle>
                                <IssueInfo>
                                    #{edge.node.number}
                                    {authoredInfo(edge.node.createdAt, edge.node.closedAt, edge.node.author?.login)}
                                </IssueInfo>
                                {/*<div dangerouslySetInnerHTML={{__html: edge.node.bodyHTML}}/>*/}
                            </IssueListItem>) : null
                })
                }
            </IssueList>
        </IssuesListContainer>
    )
}

export default IssuesList