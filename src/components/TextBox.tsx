import React from 'react'
import { convertDateToTimeAgo } from '../helpers/date-helpers'
import styled from 'styled-components'
const CommentHeader = styled.div`
    padding: ${({ theme }) => theme.unit3};
    margin: ${({ theme }) => theme.unit4} 0 0 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    min-width: 0;
    border: 1px solid ${({ theme }) => theme.colors.paleWhite};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    color: ${({ theme }) => theme.colors.grey};
    span:first-of-type {
        font-weight: 600;
        margin-right: ${({ theme }) => theme.unit1};
    }
`

const CommentBody = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.paleWhite};
    border-top: 0;
    padding: ${({ theme }) => theme.unit3};
    line-height: 1.5;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  pre {
    padding: ${({ theme }) => theme.unit3};
    overflow: auto;
    font-size: ${({ theme }) => theme.fontSize4};
    line-height: 1.45;
    background-color: ${({ theme }) => theme.colors.lightestGrey};
    border-radius: 6px;
`
type CommentProps = {
    login: string | undefined
    createdAt: string
    bodyHTML: string
}

function TextBox({
    login,
    createdAt,
    bodyHTML,
}: CommentProps): JSX.Element | null {
    if (login && createdAt && bodyHTML) {
        return (
            <>
                <CommentHeader>
                    <span>{login}</span>
                    <span>
                        {`commented ${convertDateToTimeAgo(
                            new Date(createdAt)
                        )}`}
                    </span>
                </CommentHeader>
                <CommentBody
                    dangerouslySetInnerHTML={{
                        __html: bodyHTML,
                    }}
                />
            </>
        )
    }
    return null
}

export default TextBox
