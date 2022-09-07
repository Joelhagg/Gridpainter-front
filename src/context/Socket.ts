import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io('http://localhost:3001')
export const SocketContext = createContext(socket)

export let user = ""

socket.on("username", (username) => {
  user = username
})