import Pusher from 'pusher'
import { addToHistory } from './utils/history'

const {
  APP_ID: appId,
  KEY: key,
  SECRET: secret,
  CLUSTER: cluster,
} = process.env

const pusher = new Pusher({
  appId: appId || '',
  key: key || '',
  secret: secret || '',
  cluster: cluster || '',
})

module.exports = async (req: any, res: any) => {
  const { userId, message, name } = req.body
  const sent = new Date()

  const newMessage = {
    userId,
    message,
    name,
    sent,
  }

  try {
    await pusher.trigger('chat-channel', 'message-event', newMessage)
    await addToHistory(newMessage)

    res.send(newMessage)
  } catch (e) {
    console.log(e.message)
  }
}
