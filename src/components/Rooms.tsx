import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRoom } from "./models/IRoom";
import { io } from "socket.io-client"

const socket = io('http://localhost:3001', { "autoConnect" : false })

export const Rooms = () => {
  const navigate = useNavigate()
  const [roomName, setRoomName] = useState("")
  const [rooms, setRooms] = useState<IRoom[]>([])


  async function getRooms() {
    let response = await axios.get<IRoom[]>('http://localhost:3001/rooms')
    return response.data
  }

  useEffect(() => {
    getRooms().then(res => {
      setRooms(res)
    })
  }, [])

  const createRoom = () => {
    socket.connect()
    axios.post('http://localhost:3001/rooms', {room: roomName})
    .then(res => {
      socket.on("updatedRooms", (rooms) => {
        setRooms(rooms.data)
      })
    })
    navigate("/" + roomName)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.currentTarget.value)
  }

  let renderRooms = rooms.map((room, i) => {
    return(<div key={i}>
      {room.room}
      <button onClick={() => {navigate(`/${room.room}`)}}>Join</button>
    </div>)
  })

  return(<div>
    <div className="createRoomBox">
      <input type="text" placeholder="Room name" required onChange={(e) => {handleChange(e)}}/>
      <button onClick={createRoom}>Create room</button>
    </div>

    <div>
      {renderRooms}
    </div>
  </div>
  )
}