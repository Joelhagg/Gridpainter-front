import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRoom } from "./models/IRoom";
import { SocketContext } from "../context/Socket";

export const Rooms = () => {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [rooms, setRooms] = useState<IRoom[]>([]);
  let nickname = "Louise";
  async function getRooms() {
    let response = await axios.get<IRoom[]>("http://localhost:3001/rooms");
    return response.data;
  }

  useEffect(() => {
    // den här ska va kvar! Men kan få flyttas om den har en bättre plats :)
    //socket.connect();
    getRooms().then((res) => {
      setRooms(res);
    });
  }, []);

  const createRoom = () => {
    const room = {
      name: roomName,
      id: socket.io.engine.id,
      nickname: localStorage.getItem("nickname"),
    };
    socket.emit("createRoom", room);
    navigate(`/${roomName}`);
  };

  const joinRoom = (roomName: any) => {
    console.log("joinRoom", roomName);

    const room = {
      name: roomName,
      id: socket.io.engine.id,
      nickname: localStorage.getItem("nickname"),
    };
    socket.emit("leaveBeforeJoining", socket.id);
    socket.emit("join", room);
  };

  const deleteRoom = (room: any) => {
    socket.emit("deleteRoom", room._id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.currentTarget.value);
  };

  let renderRooms = rooms.map((room, i) => {
    return (
      <div key={i}>
        {room.name}
        <button
          onClick={() => {
            navigate(`/${room.name}`);
            joinRoom(room.name);
          }}
        >
          Join
        </button>
        <button
          onClick={() => {
            deleteRoom(room);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <div className="createRoomBox">
        <input
          type="text"
          placeholder="Room name"
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button onClick={createRoom}>Create room</button>
      </div>

      <div>{renderRooms}</div>
    </div>
  );
};
