import { io } from "socket.io-client"
let socket = io('http://localhost:3001', { "autoConnect" : false })

export class SocketService{
  socketConnection = () => {
    socket.connect()
  }

  sendMessage = (text: string, room: string, user: string) => {
    socket.emit('sendMessage', {
      text: text,
      room: room,
      user: user
    })
  }

  chatSubscribe = () => {
    
    socket.on('receiveMessage', data => {

    })
  }
  
}