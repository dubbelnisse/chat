"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const app = express_1.default();
const server = http_1.default.Server(app);
socket_io_1.default(server, { origins: '*:*' });
app.get('/', (_, res) => {
    res.send({
        name: 'chat-server',
        version: '0.0.1'
    });
});
socket_io_1.default.sockets.on('connection', socket => {
    socket.on('username', username => {
        socket.username = username;
        socket_io_1.default.emit('is_online', `🔵 <i>${socket.username} join the chat</i>`);
    });
    socket.on('disconnect', username => {
        socket_io_1.default.emit('is_online', `🔴 <i>${socket.username} left the chat</i>`);
    });
    socket.on('chat_message', message => {
        socket_io_1.default.emit('chat_message', `${message}`);
    });
});
server.listen(9000, () => {
    // tslint:disable-next-line:no-console
    console.log('listening on *:9000');
});
//# sourceMappingURL=index.js.map