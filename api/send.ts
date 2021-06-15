import Pusher from 'pusher'

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

  try {
    await pusher.trigger("chat-channel", "message-event", {
      userId,
      message,
      name,
      sent
    })

    res.send({
      userId,
      message,
      name,
      sent
    })
  } catch (e) {
    console.log(e.message)
  }
}