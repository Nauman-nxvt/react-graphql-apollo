import React from 'react'
import { convertDateToTimeAgo } from '../helpers/date-helpers'
import styled from 'styled-components'
const CommentHeader = styled.div`
    padding: 16px;
    margin: 20px 0 0 0;
    background-color: rgb(246, 248, 250);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    min-width: 0;
    border: 1px solid #d0d7de;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    color: #57606a;
`

const CommentBody = styled.div`
    border: 1px solid #d0d7de;
    border-top: 0;
    padding: 10px;
    line-height: 1.5;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
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
                    <span>
                        {`${login} commented ${convertDateToTimeAgo(
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
