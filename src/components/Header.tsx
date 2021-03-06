import React from 'react'
import styled from 'styled-components'
import IconLogo from '../icons/IconLogo'
import { Link } from 'react-router-dom'
import { ROOT_PATH } from '../routes'

const AppHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${({ theme }) => `${theme.unit2} ${theme.unit3}`};
    font-size: ${({ theme }) => theme.fontSize4};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.whiteOG};
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    margin-top: 0;
`
const Logo = styled(IconLogo)`
    width: ${({ theme }) => theme.unit5};
    height: ${({ theme }) => theme.unit5};
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
