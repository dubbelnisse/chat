import React, { useState, useEffect } from 'react'
import { Message } from '../__generated__/types'
import HistoryMessage from './Messages/HistoryMessage'
import IncomingMessage from './Messages/IncomingMessage'
import OutgoingMessage from './Messages/OutgoingMessage'

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
    return <HistoryMessage message={message} />
  }

  if (userId === message.userId) {
    return <OutgoingMessage message={message} isGif={isGif} />
  }

  return <IncomingMessage message={message} isGif={isGif} />
}

export default ChatLogMessage
