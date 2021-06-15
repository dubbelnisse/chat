import ReactDOM from 'react-dom'
import './index.css'
import App from './routes/App'
import { BrowserRouter as Router } from 'react-router-dom'
import Pusher from 'pusher-js'

export const pusher = new Pusher('07308c3f15524abb4ac3', {
  cluster: 'eu',
})
export const channel = pusher.subscribe('chat-channel')

const AppRoot = () => (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(<AppRoot />, document.getElementById('root'))
