import styled, { css } from 'styled-components'
import IconCheck from '../../icons/IconCheck'
import { ReactComponent as IconDot } from '../../icons/IconDot.svg'

const IconStyle = css`
    width: 1rem;
    height: 1rem;
    margin-right: 5px;
`

export const RedCheck = styled(IconCheck)`
    ${IconStyle};
    stroke-width: 1;
    stroke: rgb(207, 34, 46);
    fill: rgb(207, 34, 46);
`

export const GreenDot = styled(IconDot)`
    ${IconStyle};
    fill: rgb(26, 127, 55);
`
