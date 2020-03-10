import * as express from 'express'
import * as socketIo from 'socket.io'
import { Server } from 'http'

const app = express()
const server = new Server(app)
const io = socketIo(server, { origins: '*:*' })

app.get('/', (_, res) => {
  res.send({
    name: 'chat-server',
    version: '0.0.1'
  })
})

io.sockets.on('connection', socket => {
  socket.on('chat_message', message => {
      console.log('recived message!')
      message.time = new Date()
      io.emit('chat_message', message)
  })
})

server.listen(9000, () => {
  console.log('listening on *:9000')
})
