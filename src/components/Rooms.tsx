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
    console.log("in useEffect");
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
    rooms.splice(rooms.indexOf(room) - 1, 1);
    setRooms(rooms);

    socket.emit("deleteRoom", { _id: room._id, name: room.name });
  };

  const handleChange = (e: any) => {
    setRoomName(e.currentTarget.value);
    createRoom();
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
      <form onSubmit={handleChange}>
        <div className="createRoomBox">
          <input
            type="text"
            name="roomName"
            id="roomName"
            placeholder="Room name"
            required
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <input type="submit" value="Skapa rum" />
        </div>
      </form>

      <div>{renderRooms}</div>
    </div>
  );
};
