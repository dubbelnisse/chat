import React, { useState, useRef, useEffect } from 'react'
import { gql, useSubscription, useQuery } from '@apollo/client'
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
  subscription messages($input: SubscriptionInput!) {
    messageAdded(input: $input) {
      message
      name
      userId
      id
      sent
    }
  }
`

const GET_HISTORY = gql`
  query history {
    history {
      message
      name
      userId
      id
      sent
    }
  }
`

const ChatLog: React.FC = () => {
  const name = localStorage.getItem('username') || ''
  const userId = localStorage.getItem('userId') || ''
  const logWrapper = useRef<HTMLDivElement | null>(null)
  const [chatLog, updateChatLog] = useState<Message[]>([])
  const { error } = useSubscription<MessagesSubscription>(
    MESSAGES_SUBSCRIPTION,
    {
      variables: {
        input: {
          userId,
          name,
        },
      },
      onSubscriptionData: ({ subscriptionData }) => {
        if (subscriptionData.data?.messageAdded) {
          updateChatLog([...chatLog, subscriptionData.data.messageAdded])
        }
      },
    }
  )
  const { data: historyData, error: historyError } = useQuery(GET_HISTORY)

  useEffect(() => {
    const node = logWrapper.current
    if (node) {
      node.scrollTop = node.scrollHeight
    }
  }, [chatLog])

  if (error || historyError) {
    return <div>Error</div>
  }

  return (
    <Wrapper ref={logWrapper}>
      <List>
        {historyData &&
          historyData.history.map((message: Message, i: Number) => (
            <ChatLogMessage
              key={`history-message-${i}`}
              history
              message={message}
            />
          ))}
        {chatLog.map((message: Message, i: Number) => (
          <ChatLogMessage key={`message-${i}`} message={message} />
        ))}
      </List>
    </Wrapper>
  )
}

export default ChatLog
