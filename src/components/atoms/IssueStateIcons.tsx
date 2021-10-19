import styled from 'styled-components'
import IconDot from '../../icons/IconDot'
import BaseIconStyle from './BaseIconStyle'
import IconCheckRound from '../../icons/IconCheckRound'

export const RedCheck = styled(IconCheckRound)`
    ${BaseIconStyle};
    fill: rgb(207, 34, 46);
`

export const GreenDot = styled(IconDot)`
    ${BaseIconStyle};
    fill: rgb(26, 127, 55);
`
