import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io('http://localhost:3001', {"autoConnect": false})

export const Rooms = () => {
  const [roomName, setRoomName] = useState("")

  const createRoom = () => {
    socket.connect()
    socket.emit("new room", roomName)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.currentTarget.value)
  }

  const navigate = useNavigate()
  return(<div>
    <div className="createRoomBox">
      <input type="text" placeholder="Room name" required onChange={(e) => {handleChange(e)}}/>
      <button onClick={createRoom}>Create room</button>
    </div>
    Lista över rum man kan joina
    <div>
      Ett rum
      <button onClick={() => {navigate('/room')}}>Fakeknapp joina rum</button>
    </div>
  </div>
  )
}