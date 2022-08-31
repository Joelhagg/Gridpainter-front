import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRoom } from "./models/IRoom";

import { socket } from "./Layout";

export const Rooms = () => {
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
    socket.connect();
    getRooms().then((res) => {
      setRooms(res);
    });
  }, []);

  const createRoom = () => {
    socket.emit("createRoom", { name: roomName, id: socket.io.engine.id });
    joinRoom(roomName);
    navigate(`/${roomName}`);
  };

  const joinRoom = (roomName: any) => {
    console.log("joinRoom", roomName);

    socket.emit("nickname", nickname);
    socket.emit("join", roomName, nickname);
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
