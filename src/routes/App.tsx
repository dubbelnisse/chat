import React from 'react'
import Chat from '../routes/Chat/Chat'
import Start from '../routes/Start/Start'
import { Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Start />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
    </Switch>
  )
}

export default App
