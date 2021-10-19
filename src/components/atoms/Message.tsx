import React from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
`
const Heading = styled.h2`
    margin: ${({ theme }) => theme.unit4} auto;
`

type MessageProps = {
    children: string | HTMLElement
}

export const Message = ({ children }: MessageProps): JSX.Element => {
    return (
        <MessageContainer>
            <Heading>{children}</Heading>
        </MessageContainer>
    )
}

export default Message
