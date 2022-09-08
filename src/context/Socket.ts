import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io('https://gridpainter-back.herokuapp.com/')
export const SocketContext = createContext(socket)

export let user = "";

socket.on("username", (username) => {
  user = username
})