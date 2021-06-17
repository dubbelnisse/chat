import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
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
  const [history, setHistory] = useState<Message[]>([])

  useEffect(() => {
    console.log('effekt1')
    channel.bind('message-event', (data: Message) => {
      const newMessages = [...messages, data]
      setMessages(newMessages)
    })

    return () => {
      channel.unbind('message-event')
    }
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/history')

      setHistory(result.data)
    }

    fetchData()
  }, [])

  return (
    <Wrapper>
      <List>
        {history.map((message: Message, i: Number) => (
          <ChatLogMessage key={`message-${i}`} history message={message} />
        ))}
        {messages.map((message: Message, i: Number) => (
          <ChatLogMessage key={`message-${i}`} message={message} />
        ))}
      </List>
    </Wrapper>
  )
}

export default ChatLog
