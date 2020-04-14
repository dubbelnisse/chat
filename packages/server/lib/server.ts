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
  socket.on('user_connected', user => {
    user.time = new Date()
    socket.broadcast.emit('user_connected', user)
  })

  socket.on('chat_message', message => {
      message.time = new Date()
      io.emit('chat_message', message)
  })

  socket.on('user_disconnected', user => {
    user.time = new Date()
    io.emit('user_disconnected', user)
  })
})

server.listen(9000, () => {
  console.log('listening on *:9000')
})
