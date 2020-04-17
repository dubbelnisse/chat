import React from 'react'
import { Message } from '../../__generated__/types'
import styled from 'styled-components'
import { format } from 'date-fns'

const Wrapper = styled.div`
  justify-content: flex-start;

  &:not(:first-child) {
    margin-top: 10px;
  }
`

const Meta = styled.span`
  color: rgb(180, 180, 180);
  margin-right: 10px;
`

const Msg = styled.span`
  color: rgb(190, 190, 190);
  margin-right: 10px;
`

interface ChatLogMessageProps {
  message: Message
}

const HistoryMessage: React.FC<ChatLogMessageProps> = ({ message }) => {
  return (
    <Wrapper>
      <Meta>
        <strong>{message.name}</strong> |{' '}
        {format(new Date(message.sent), 'H:mm a')}
      </Meta>
      <Msg>{message.message}</Msg>
    </Wrapper>
  )
}

export default HistoryMessage
