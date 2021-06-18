import Pusher from 'pusher'
import { addToHistory } from '../api-utils/history'
import { v4 as uuidv4 } from 'uuid'

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
  const id = uuidv4()

  const newMessage = {
    id,
    userId,
    message,
    name,
    sent,
  }

  try {
    await pusher.trigger('chat-channel', 'message-event', newMessage)
    await addToHistory(newMessage)

    res.send(newMessage)
  } catch (error) {
    console.log(error)
  }
}
