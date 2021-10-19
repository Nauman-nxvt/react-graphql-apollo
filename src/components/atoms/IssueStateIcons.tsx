import styled from 'styled-components'
import IconCheck from '../../icons/IconCheck'
import IconDot from '../../icons/IconDot'
import BaseIconStyle from './BaseIconStyle'

export const RedCheck = styled(IconCheck)`
    ${BaseIconStyle};
    stroke-width: 1;
    stroke: rgb(207, 34, 46);
    fill: rgb(207, 34, 46);
`

export const GreenDot = styled(IconDot)`
    ${BaseIconStyle};
    fill: rgb(26, 127, 55);
`
