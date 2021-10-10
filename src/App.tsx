import React, {useEffect, useState} from 'react';
import MakeSearchQuery from "./components/MakeSearchQuery";
import styled from "styled-components";
import {useGetIssuesLazyQuery} from "./generated/graphql";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 100%;
  padding-top: 20px;
`

function App() {
  const [query, setQuery] = useState('')
  const [loadIssues, { called, loading, data }] = useGetIssuesLazyQuery({
    variables: {query},
  });

  useEffect(() => {
    loadIssues()
  },[query])

  console.log('data', data)
  return (
      <Container>
        <MakeSearchQuery setQuery={setQuery}/>
      </Container>
  );
}

export default App;