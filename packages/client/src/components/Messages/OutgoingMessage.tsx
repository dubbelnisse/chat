import React from 'react'
import { Message } from '../../__generated__/types'
import styled from 'styled-components'
import { format } from 'date-fns'

const Wrapper = styled.li`
  display: flex;
  font-size: 15px;
  justify-content: flex-end;

  &:not(:first-child) {
    margin-top: 10px;
  }
`

const Inner = styled.div`
  max-width: 80%;
`

const Msg = styled.div`
  padding: 20px;
  background-color: #fef8e6;
  border-radius: 20px 20px 3px 20px;
`

const Time = styled.div`
  color: #999999;
  font-size: 13px;
  margin-top: 10px;
`

const Gif = styled.img`
  width: 100%;
`

interface ChatLogMessageProps {
  message: Message
  isGif?: boolean
}

const OutgoingMessage: React.FC<ChatLogMessageProps> = ({ message, isGif }) => {
  return (
    <Wrapper>
      <Inner>
        <Msg>
          {isGif ? <Gif src={message.message} alt="GIF" /> : message.message}
        </Msg>
        <Time>{format(new Date(message.sent), 'H:mm a')}</Time>
      </Inner>
    </Wrapper>
  )
}

export default OutgoingMessage
