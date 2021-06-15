import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ChatLogMessage from './ChatLogMessage'
import { channel } from '../index'

export interface Message {
  userId: string
  name: string
  message: string
  sent: Date
}

const Wrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ChatLog: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    channel.bind('message-event', (data: Message) => {
      console.log('BIND', messages, [...messages, data])
      const newMessages = [...messages, data]
      setMessages(newMessages)
    })

    return () => {
      channel.unbind('message-event')
    }
  })

  return (
    <Wrapper>
      <List>
        {messages.map((message: Message, i: Number) => (
          <ChatLogMessage key={`message-${i}`} message={message} />
        ))}
      </List>
    </Wrapper>
  )
}

export default ChatLog
