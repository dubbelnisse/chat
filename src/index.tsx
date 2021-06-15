import ReactDOM from 'react-dom'
import './index.css'
import App from './routes/App'
import { BrowserRouter as Router } from 'react-router-dom'
import Pusher from 'pusher-js'

const { REACT_APP_PUSHER_KEY: key, REACT_APP_PUSHER_CLUSTER: cluster } =
  process.env

export const pusher = new Pusher(key || '', {
  cluster: cluster || '',
})
export const channel = pusher.subscribe('chat-channel')

const AppRoot = () => (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(<AppRoot />, document.getElementById('root'))
