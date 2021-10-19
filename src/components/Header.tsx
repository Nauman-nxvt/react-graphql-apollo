import React from 'react'
import styled from 'styled-components'
import IconLogo from '../icons/IconLogo'
import { Link } from 'react-router-dom'
import { ROOT_PATH } from '../routes'

const AppHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 16px;
    font-size: 0.9rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.whiteOG};
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    margin-top: 0;
`
const Logo = styled(IconLogo)`
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.colors.whiteOG};
    background: transparent;
`

const NavList = styled.ul`
    list-style: none;
    a {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.whiteOG};
        text-decoration: none;
        :hover {
            color: ${({ theme }) => theme.colors.paleWhite};
        }
    }
`

const Header = (): JSX.Element => {
    return (
        <AppHeader>
            <Logo />
            <div>
                <NavList>
                    <li>
                        <Link to={ROOT_PATH}>Issues</Link>
                    </li>
                </NavList>
            </div>
        </AppHeader>
    )
}

export default Header
