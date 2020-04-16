import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ChatInput from '../../components/ChatInput'
import ChatLog from '../../components/ChatLog'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: calc(100vh - 40px);
  padding: 20px;
`

const InputWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`

const App = () => {
  const history = useHistory()
  const [userId] = useState(localStorage.getItem('userId') || undefined)

  useEffect(() => {
    if (!userId) {
      history.push('/')
    }
  })

  return (
    <Wrapper>
      <ChatLog />
      <InputWrapper>
        <ChatInput />
      </InputWrapper>
    </Wrapper>
  )
}

export default App
