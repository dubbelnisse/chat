import React, { useState, useEffect } from 'react'
import { Message } from '../__generated__/types'
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

const WrapperOther = styled(Wrapper)`
  justify-content: flex-start;
`

const Inner = styled.div`
  max-width: 80%;
`

const Msg = styled.div`
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

const Gif = styled.img`
  width: 100%;
`

const HistoryWrapper = styled.div`
  justify-content: flex-start;

  &:not(:first-child) {
    margin-top: 10px;
  }
`

const Meta = styled.span`
  color: rgb(180, 180, 180);
  margin-right: 10px;
`

const HistoryMsg = styled.span`
  color: rgb(190, 190, 190);
  margin-right: 10px;
`

interface ChatLogMessageProps {
  message: Message
  history?: boolean
}

const ChatLogMessage: React.FC<ChatLogMessageProps> = ({
  message,
  history,
}) => {
  const [userId] = useState(localStorage.getItem('userId') || '')
  const [isGif, updateIsGif] = useState(false)

  useEffect(() => {
    if (message.message.toLowerCase().match(/\.(gif)/g)) {
      updateIsGif(true)
    }
  }, [message])

  if (history) {
    return (
      <HistoryWrapper>
        <Meta>
          <strong>{message.name}</strong> |{' '}
          {format(new Date(message.sent), 'H:mm a')}
        </Meta>
        <HistoryMsg>{message.message}</HistoryMsg>
      </HistoryWrapper>
    )
  }

  if (userId === message.userId) {
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

  return (
    <WrapperOther>
      <Inner>
        <MsgOther>
          {isGif ? <Gif src={message.message} alt="GIF" /> : message.message}
        </MsgOther>
        <Time>
          <strong>{message.name}</strong> |{' '}
          {format(new Date(message.sent), 'H:mm a')}
        </Time>
      </Inner>
    </WrapperOther>
  )
}

export default ChatLogMessage
