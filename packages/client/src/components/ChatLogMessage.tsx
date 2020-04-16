import React, { useState } from 'react'
import { Message } from '../__generated__/types'
import styled from 'styled-components'
import { format } from 'date-fns'

const Wrapper = styled.li`
  display: flex;
  font-size: 20px;
  justify-content: flex-end;

  &:not(:first-child) {
    margin-top: 5px;
  }
`

const WrapperOther = styled(Wrapper)`
  justify-content: flex-start;
`

const Inner = styled.div`
  max-width: 80%;
`

const Msg = styled.div`
  font-size: 20px;
  padding: 20px;
  background-color: #fef8e6;
  border-radius: 20px 20px 3px 20px;
`

const MsgOther = styled(Msg)`
  background-color: #e8f4f9;
  border-radius: 20px 20px 20px 3px;
`

const Time = styled.div`
  color: #999999;
  font-size: 13px;
  margin-top: 10px;
`

interface ChatLogMessageProps {
  message: Message
}

const ChatLogMessage: React.FC<ChatLogMessageProps> = ({ message }) => {
  const [userId] = useState(localStorage.getItem('userId') || '')

  if (userId === message.userId) {
    return (
      <Wrapper>
        <Inner>
          <Msg>{message.message}</Msg>
          <Time>{format(new Date(message.sent), 'H:mm a')}</Time>
        </Inner>
      </Wrapper>
    )
  }

  return (
    <WrapperOther>
      <Inner>
        <MsgOther>{message.message}</MsgOther>
        <Time>
          <strong>{message.name}</strong> |{' '}
          {format(new Date(message.sent), 'H:mm a')}
        </Time>
      </Inner>
    </WrapperOther>
  )
}

export default ChatLogMessage
