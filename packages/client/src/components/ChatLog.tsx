import React, { useState, useRef, useEffect } from 'react'
import { gql, useSubscription } from '@apollo/client'
import { Message, MessagesSubscription } from '../__generated__/types'
import styled from 'styled-components'
import ChatLogMessage from './ChatLogMessage'

const Wrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const MESSAGES_SUBSCRIPTION = gql`
  subscription messages {
    messageAdded {
      message
      name
      userId
      id
      sent
    }
  }
`

const ChatLog: React.FC = () => {
  const logWrapper = useRef<HTMLDivElement | null>(null)
  const [chatLog, updateChatLog] = useState<Message[]>([])
  const { error } = useSubscription<MessagesSubscription>(
    MESSAGES_SUBSCRIPTION,
    {
      onSubscriptionData: ({ subscriptionData }) => {
        if (subscriptionData.data?.messageAdded) {
          updateChatLog([...chatLog, subscriptionData.data.messageAdded])
        }
      },
    }
  )

  useEffect(() => {
    const node = logWrapper.current
    if (node) {
      node.scrollTop = node.scrollHeight
    }
  }, [chatLog])

  if (error) {
    return <div>Error</div>
  }

  return (
    <Wrapper ref={logWrapper}>
      <List>
        {chatLog.map((message: Message, i: Number) => (
          <ChatLogMessage key={`message-${i}`} message={message} />
        ))}
      </List>
    </Wrapper>
  )
}

export default ChatLog
