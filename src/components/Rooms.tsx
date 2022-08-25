import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Rooms = () => {
  const [roomName, setRoomName] = useState("")
  const [rooms, setRooms] = useState("")

  const createRoom = () => {
    axios.post('http://localhost:3001/rooms', {room: roomName})
    .then(res => {
      console.log(res);
    })
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