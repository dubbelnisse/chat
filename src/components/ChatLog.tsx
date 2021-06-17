import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ScrollableFeed from 'react-scrollable-feed'
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const ChatLog: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [history, setHistory] = useState<Message[]>([])

  useEffect(() => {
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
      <ScrollableFeed>
        {history.map((message: Message, i: Number) => (
          <ChatLogMessage key={`message-${i}`} history message={message} />
        ))}
        {messages.map((message: Message, i: Number) => (
          <ChatLogMessage key={`message-${i}`} message={message} />
        ))}
      </ScrollableFeed>
    </Wrapper>
  )
}

export default ChatLog
