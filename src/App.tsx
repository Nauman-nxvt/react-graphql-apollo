import React from 'react'
import SearchPage from './components/SearchPage/SearchPage'
import styled from 'styled-components'
import Header from './components/Header'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import IssuePage from './components/IssuePage/IssuePage'
import { ROOT_PATH, VIEW_ISSUE_PATH } from './routes'

const Container = styled.div`
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: 100%;
    padding-top: ${({ theme }) => theme.unit4};
`

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <Switch>
                    <Route exact path={ROOT_PATH}>
                        <SearchPage />
                    </Route>

                    <Route path={VIEW_ISSUE_PATH}>
                        <IssuePage />
                    </Route>
                    <Route path="*">
                        <Redirect to={ROOT_PATH} />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App
