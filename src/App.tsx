import React, {useEffect, useState} from 'react';
import MakeSearchQuery from "./components/MakeSearchQuery";
import styled from "styled-components";
import {useGetIssuesLazyQuery} from "./generated/graphql";
import IssuesList from "./components/IssuesList";
import {BasicButton} from "./components/atoms/Buttons";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 100%;
  padding-top: 20px;
`

const LoadMoreButton = styled(BasicButton)`
  justify-self: center;
`

function App() {
  const [query, setQuery] = useState('')
  const [loadIssues, { called, loading, data, fetchMore }] = useGetIssuesLazyQuery({
    variables: {query},
  });

  const loadMoreIssues = () => {
    fetchMore && fetchMore({
      variables: {
        endCursor: data?.search?.pageInfo?.endCursor
      },
    })
  }

  useEffect(() => {
    loadIssues()
  },[query])

  return (
      <Container>
        <MakeSearchQuery setQuery={setQuery}/>
        <IssuesList issues={data}/>
        {data && <LoadMoreButton onClick={loadMoreIssues}>Load More Issues</LoadMoreButton>}
      </Container>
  );
}

export default App;
