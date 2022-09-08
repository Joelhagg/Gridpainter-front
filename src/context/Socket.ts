import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io('https://gridpainter-back-v2.herokuapp.com/', {"autoConnect": true, transports: ['websocket']})
export const SocketContext = createContext(socket)

export let user = "";

socket.on("username", (username) => {
  user = username
})